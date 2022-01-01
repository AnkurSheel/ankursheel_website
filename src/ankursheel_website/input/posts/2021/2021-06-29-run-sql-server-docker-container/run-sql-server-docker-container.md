---
title: 'How to run SQL Server in a Docker container'
excerpt: 'In this post, we will see how we can run SQL Server on Docker using docker-compose and managing the image and environment variables in a docker file'
tags:
    - docker
    - snippet
---

In this post, we will see how we can run SQL Server on Docker. We will be launching the SQL server container using docker-compose and managing the image and environment variables in a docker file.

### Docker Compose file

To launch a SQL Server container, we will first create a `docker-compose.yml` file. I like to keep my docker scripts in a folder called **_build._**

```yaml
version: '3.8'

services:
    db:
        container_name: sql_server_db
        build:
            context: ./../
            dockerfile: ./build/mssqlserver.Dockerfile
        ports:
            - '1433:1433'
```

-   **Line #1**: This denotes that we are using version 3.8 of Docker compose so that Docker can provide the appropriate features.
-   **Line #3** This section defines all the different containers we will create.
-   **Line #4**: The name of the SQL Server Database service. _Can be anything._
-   **Line #5**: A custom container name rather than a generated default name so that we can easily find the container in Docker.
-   **Line #6**: Configuration options that are applied at build time
-   **Line #7:** Setting this to `.\..\` allows the build process to access any of the files in the root folder.
-   **Line #8**: Set the path to the docker file relative to the context path.
-   **Line #9-10**: SQL Server is listening on port 1433 in the container, and we want to expose it on port 1433, on the host.

### Docker file for SQL Server

We can start by adding the base image and environment variables to the docker file.

```docker
FROM mcr.microsoft.com/mssql/server:2017-latest

ARG SA_PASSWORD="Password1!"
ENV SA_PASSWORD=$SA_PASSWORD
ENV ACCEPT_EULA="Y"

EXPOSE 1433
```

-   **Line #1**: Pull down the SQL Server 2017 container image.
-   **Line #3**: Set the SA_PASSWORD as a variable so that it can be reused.
-   **Line #4**: Specify the strong password that meets SQL Server password requirements as an environment variable.
-   **Line #5**: Sets the environment variable to confirm our acceptance of the End-User Licensing Agreement.
-   **Line #7**: Expose the port to access it from composed containers. _SQL server listens for a connection on TCP port 1433 by default_.

### Initialize SQL server in Docker container

Add the following lines to the docker file to initialize SQL Server.

```docker
RUN mkdir -p /usr/work
COPY ./build/*.sql /usr/work/

WORKDIR /usr/work

RUN ( /opt/mssql/bin/sqlservr & ) \
    | grep -q "Service Broker manager has started" \
    && /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P $SA_PASSWORD -i create-db.sql \
    && pkill sqlservr
```

-   **Line #1**: Run a command to create a new directory creating all the directories in the path.
-   **Line #2**: Copy all the SQL files into the created directory.
-   **Line #4**: Set the working directory for the subsequent instructions.
-   **Line #6**: Starts the SQL server.
-   **Line #7**: Wait for _sqlservr_ to start by checking the logs. _grep_ will block until it has found the string and then exit.
-   **Line #8**: Run _sqlcmd_ to run _create-db.sql_ which scaffolds our database.
-   **Line #9**: Kill the _sqlservr_ process.

### Script to scaffold our database

In our SQL script, we can do whatever we need to do at startup. In this demo, we will just create a database with a schema.

```sql
CREATE DATABASE DemoDb;
GO
USE DemoDb;
GO

CREATE TABLE [dbo].[Table1]
(
    [Id] INT NOT NULL PRIMARY KEY IDENTITY,
    [Name] NVARCHAR(200) NOT NULL,
)

GO
```

### Running the container

We can use the following command to run start the DB using from the root folder.

```bash
docker-compose -f ./build/docker-compose.yml up -d --force-recreate --build db
```

## Conclusion

Starting a new Docker container with Microsoft SQL Server is really simple. However, there are a few hoops to jump through. I hope that it’s easy to understand how it works after reading this article.

Please let me know your thoughts about this article if you have any suggestions or share the article with others.
