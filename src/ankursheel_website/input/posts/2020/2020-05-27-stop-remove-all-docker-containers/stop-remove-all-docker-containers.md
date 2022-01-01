---
title: 'How to stop and remove all Docker containers'
excerpt: "Occasionally, I have needed to stop and remove all the docker containers I am running locally. Let's see how we can do it easily."
tags:
    - devops
    - docker
    - snippet
---

## Problem

Occasionally, I have needed to stop and remove all the docker containers I am running locally. I got tired of googling for the commands and wrote a snippet that I could easily access.

## Solution

Before we see how to stop and remove all containers, we need to list all the containers.

### List all Containers

The command to [lists all containers](https://docs.docker.com/engine/reference/commandline/container_ls/) is `docker container ls [OPTIONS]`.

By default, it shows just the running containers and a lot of information that we won't need. So let's pass in some options.

-   **_-a_**: Show all the containers.
-   **_-q_**: Only display the numeric ids.

```bash
docker container ls -aq
```

### Stopping all containers

The command to [stop docker containers](https://docs.docker.com/engine/reference/commandline/container_stop/) is `docker container stop [OPTIONS] CONTAINER [CONTAINER...]`

We can see it takes a space-delimited list of container ids/names to stop. We already have the list of container id's from the previous step. We need to use a shell expansion trick to pass in the list of all containers.

```bash
docker container stop $(docker container ls -aq)
```

### Removing all containers

The command to [remove docker containers](https://docs.docker.com/engine/reference/commandline/container_rm/) is `docker container rm [OPTIONS] CONTAINER [CONTAINER...]`

We can see it's similar to the stop command and also takes a space-delimited list of container ids to remove.

We can use the same shell expansion trick to pass in the list of all containers.

```bash
docker container rm $(docker container ls -aq)
```

## Conclusion

This makes it trivial to stop and remove all the containers that I have running locally.
