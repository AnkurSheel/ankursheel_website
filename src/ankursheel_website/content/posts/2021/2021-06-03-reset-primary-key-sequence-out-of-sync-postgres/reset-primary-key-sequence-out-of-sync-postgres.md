---
title: 'How to reset the primary key sequence in Postgres'
excerpt: 'How can we fix the "duplicate key value violates unique constraint" error because the primary key sequence is out of sync from the records in the table'
category: "programming"
tags:
    - 'postgres'
    - 'sql'
    - 'snippet'
---

## The Problem

When we insert a new row in a table with a sequential primary key, we get a "23505: duplicate key value violates unique constraint" error.

This implies that a record already exists for the next number being returned for the sequence.

The reason this happens is that the primary key sequence is out of sync with the table rows.

## Assumptions

-   The table name is "**_table"_**
-   The column with the issue is "**_id_**."

## Validate that the sequence is out-of-sync

Before we reset the sequence, let us make sure that it is out of sync.

```sql
SELECT nextval(PG_GET_SERIAL_SEQUENCE('"table"', 'id'));

SELECT
    CURRVAL(PG_GET_SERIAL_SEQUENCE('"table"', 'id')) AS "Current Value",
    MAX("id") AS "Max Value"
FROM "table";
```

**Line #1:** We make a call to **_nextval_** because if we call **_currval_** before calling **_nextval_** in the current session, it will give us an error similar to "**_ERROR: currval of sequence "table_id_seq" is not yet defined in this session_**".

**Line #3-6:** Gets the value most recently obtained by **nextval** for this sequence in the current session along with the maximum value for **_id_** in **_table_**.

Our sequence is out-of-sync when the **_Current Value_** is less than **_Max Value_**.

### What does PG_GET_SERIAL_SEQUENCE do?

`PG_GET_SERIAL_SEQUENCE('"table"', 'id')` can be used to get the sequence name.

Using this, we can avoid hard-coding the actual sequence name, which helps prevent incorrect assumptions about the sequence name.

_Note that the table name is in double-quotes, surrounded by single quotes._

## The Fix

```sql
SELECT SETVAL(
    (SELECT PG_GET_SERIAL_SEQUENCE('"table"', 'id')),
    (SELECT (MAX("id") + 1) FROM "table"),
    FALSE);
```

This will set the sequence to the next available value higher than any existing value for "**_id_**" in **_table_**. Further inserts will not result in a "duplicate key value violates unique constraint" error.

## Further Reading

-   [Sequence Manipulation Functions](https://www.postgresql.org/docs/current/functions-sequence.html)
