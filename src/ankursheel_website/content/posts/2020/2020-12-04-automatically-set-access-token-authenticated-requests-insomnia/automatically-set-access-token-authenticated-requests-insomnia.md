---
title: 'How to automatically set the access token in Insomnia'
excerpt: 'How can you test a GraphQl endpoint accessible only to authorised users in Insomnia to test your requests (without jumping through hoops).'
coverImage: './images/request_success.png'
category: "programming"
tags:
    - Insomnia
    - testing
    - tutorial
    - security
---

## Problem

The Graphql endpoint for the API is accessible only to authorised users. Although it is required from a security perspective, it makes testing the API through [Insomnia](https://insomnia.rest/) a little tedious. What if we could automatically insert the bearer token every time we made a request using Insomnia?

## Solution

Let's start by creating a new environment. Although not entirely necessary, it makes authenticating in different environments easy. _Note: You can give the environment better names such as Dev, Staging, Production etc._

![Creating a new environment](./images/new_environment.png)

Now, let's add some environment variables specific to that environment.

-   baseUrl: The base URL for all the endpoints
-   email: The email used to login
-   password: The password used to login

![Adding environment variables](./images/environment_variables.png)

Let's make Insomnia use the environment.

![Use the environment](./images/use_environment.png)

Assuming that the endpoint to get the access token is `LoginUser`, add a new post request called `GetAccessToken`.

_Remember the environment variables from earlier. We can use them so that no matter what environment we are in, everything will just work._

![Get token](./images/get_token.png)

Let's add a new Graphql query and try to send the request. We get a **401 Unauthorised** error because we haven't passed in the bearer token.

![Graphql request without bearer token](./images/unauthorised.png)

To set the bearer token, we can click on the **Bearer** tab and enter _Response ⇒ Body Attribute_ for the token.

![Set the bearer token](./images/set_token.png)

To edit the tag, click on it.

![Edit the tag](./images/edit_tag.png)

In the **Edit Tag** screen, select _Post GetAccessToken_ for the request.

![Set the request on the tag screen](./images/set_tag_request.png)

Set the trigger behaviour to **Always** so that the request is made every time and you get a new token

![Set the trigger behaviour](./images/trigger.png)

For the filter, enter `$.accessToken.value`. The value will be dependent on the response that you get from _GetAccessToken_. If you have set it up correctly, you should see a token in **Live Preview**.

![Set the filter](./images/filter.png)

If you try to resend the request, you should get back a **200 OK** response.

![Send a successful request](./images/request_success.png)

## Conclusion

We can quickly test our API using Insomnia by automatically generating access tokens every time we make a Graphql request.
