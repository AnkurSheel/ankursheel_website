---
title: 'How to use Access Control Lists (ACL) for Graphql subscriptions with Redis'
excerpt: 'A guide to adding Access Control Lists (ACL)  for Redis to restrict access and using a restricted user for Graphql subscriptions with Hot Chocolate'
category: "programming"
tags:
    - 'graphql'
    - 'docker'
    - 'hotchocolate'
series: Graphql subscriptions with Redis and HotChocolate
---

In the last post, we saw how we can [add subscriptions to our Graphql server](/blog/implement-graqhql-subscriptions-hotchocolate-redis). This post will show how to set up an ACL (Access Control List) for Redis to restrict access to trusted clients.

## Setting up Redis ACL (Access Control list)

Create a new file and call it _users.acl_. In this file, we want to do 3 things.

- disable the default user
- add an admin user who is the same as a default user but has an explicit username.
- add a restricted user with access to a specific channel.

### Disable the default user

By default, a single user without any restrictions is defined. We can disable the default user by adding `user default off`

### Create an admin user

`user admin on nopass ~* &* +@@all`

This line creates a user with the username _**admin**_. This user is configured to be

- **on**: active
- **nopass**: require no password
- __~*__: access every possible key
- __&*__: access every Pub/Sub channel
- **+@@all**: able to call every possible command

### Create a restricted user for Graphql subscriptions

`user test on nopass ~* resetchannels &cdd/graphql_subscriptions/* -@@all +@@connection +@@pubsub`

This line creates a user with the username _**test**_. This user is configured to be

- **on**: active
- **nopass**: require no password
- __~*__: access every possible key
- **resetchannels**: : Resetsw the list of allowed channel patterns and disconnect the user from channels it doesnt have access to anymore.
- __&graphql_subscriptions/*__: access everything under the _graphql_subscriptions_ channel
- **-@@all +@@connection +@@pubsub**: Restrict access to the connection and pubsub commands.

## Setting up Redis configuration

The _redis.conf_ file allows us to configure Redis and set up authentication.

`aclfile /usr/local/etc/redis/users.acl`

This tells Redis that we want to use an external aclfile found at _/usr/local/etc/redis/_.

## Updating Hot Chocolate to use a custom user

In our _Startup.cs_ class, we need to update the configuration options to set the user for the Redis server. We also set the channelPrefix as the graphpqlSubscriptionUser only has access to _graphql_subscriptions_ channel.

```csharp
public void ConfigureServices(IServiceCollection services)
{
    var options = new ConfigurationOptions
            {
                EndPoints = { "localhost:6379" },
                User = "graphpqlSubscriptionUser",
                ChannelPrefix = "graphql_subscriptions/"
            };

    services.AddGraphQLServer()
        .AddQueryType<Query>()
        .AddMutationType<Mutation>()
        .AddSubscriptionType<Subscription>()
        .AddRedisSubscriptions(_ => ConnectionMultiplexer.Connect(options));
}
```

## Adding a docker compose file

```dockerfile
version: '3'
services:
  redis:
    image: redis:6.2-alpine
    ports:
      - "6379:6379"
    volumes:
      - ./redis.conf:/usr/local/etc/redis/redis.conf
      - ./users.acl:/usr/local/etc/redis/users.acl
    container_name: redis-graphql
    command: redis-server /usr/local/etc/redis/redis.conf
```

Then we can run the command `docker-compose up --force-recreate -d --build` to start the Redis container.

## Demo Project

There is a [demo project](https://github.com/AnkurSheel/HotChocolateSubscriptions) you can check out over on GitHub.

## Further Reading

- [Redis ACL](https://redis.io/topics/acl)
- [StackExchange.Redis Configuration](https://stackexchange.github.io/StackExchange.Redis/Configuration)
