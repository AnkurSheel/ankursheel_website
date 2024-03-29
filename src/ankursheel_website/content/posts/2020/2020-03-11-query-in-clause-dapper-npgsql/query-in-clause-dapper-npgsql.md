---
title: 'Dapper and NPGSql : Write a query with the IN operator'
excerpt: 'In this post, I look at what changes need to be made to write a query with the IN operator in a WHERE clause using Dapper and NPGSql'
coverImage: './cover.jpg'
category: "programming"
tags:
    - csharp
    - snippet
    - sql
    - dapper
    - postgres
---

## Scenario

We want to get details of users that match a given list of ids.

### The SQL

```sql
Select *
FROM users
WHERE id IN (1, 2, 3)
```

### Implementation in C&#35;

```csharp
void GetUsers(IReadOnlyCollection<int> userIds)
{
    const sql = @@"@Html.Raw("Select * FROM users")
                WHERE id IN @@UserIds"

    var parameters = new Dictionary<string, object>
                    {
                        { "UserIds", userIds }
                    };

    using (var connection = new NpgsqlConnection(_connectionString))
    {
        var users  = connection.Query<User>(
                        sql,
                        parameters.ToDynamicParameters())
                    .ToList();
    }
}
```

_Notes:_

-   _We are using [NPGSql](https://www.npgsql.org/) and [Dapper](https://github.com/DapperLib/Dapper)._
-   _ToDynamicParameters is an extension method to transform the dictionary into Dapper.DynamicParameters_

## Problem #1

On running this, we get an error.

```csharp
System.NotSupportedException: Npgsql 3.x removed support for writing
    a parameter with an IEnumerable value, use .ToList()/.ToArray()
    instead.
```

Luckily, the error message is telling us what we need to do. So let's make userIds an Array.

```csharp
void GetUsers(IReadOnlyCollection<int> userIds)
{
    //unchanged

    var parameters = new Dictionary<string, object>
                    {
                        { "UserIds", userIds.ToArray() }
                    };

    // unchanged
}
```

## Problem #2

We now get the error.

```csharp
Npgsql.PostgresException : 42601: syntax error at or near "$2"
```

Unfortunately, this is a more cryptic error.

There are 2 changes we need to make to the SQL to fix this error.

-   parens are needed around the parameter
-   **IN** needs to be replaced with **= ANY**

Our resulting SQL now becomes

```csharp
void GetUsers(IReadOnlyCollection<int> userIds)
{
    const sql = @@"@Html.Raw("Select * FROM users")
                WHERE id IN @@UserIds"
   // unchanged
}
```

## Final Solution

```csharp
void GetUsers(IReadOnlyCollection<int> userIds)
{
    const sql = @@"@Html.Raw("Select * FROM users")
                WHERE id IN @@UserIds"

    var parameters = new Dictionary<string, object>
                    {
                        { "UserIds", userIds.ToArray() }
                    };

    using (var connection = new NpgsqlConnection(_connectionString))
    {
        var users  = connection.Query<User>(
                        sql,
                        parameters.ToDynamicParameters())
                    .ToList();
    }
}
```

This allows us to get details of users that match a given list of ids.
