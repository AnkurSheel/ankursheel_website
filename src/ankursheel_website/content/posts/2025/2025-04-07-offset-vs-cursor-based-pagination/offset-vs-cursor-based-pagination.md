---
title: "Offset vs Cursor Based Pagination"
excerpt: "Understand SQL pagination with practical examples, comparing offset and cursor methods to manage datasets efficiently."
coverImage: "./cover.png"
category: "programming"
tags:
- "sql"
- "snippet"

---


## Introduction

SQL pagination helps manage large datasets by breaking them into smaller, more manageable chunks called 'pages.' It prevents overwhelming applications by retrieving data one page at a time, ensuring smoother performance and a better user experience.

In this article, I'll discuss two primary SQL pagination methods—offset and cursor-based—and explore an advanced technique for efficiently handling large datasets, highlighting their specific use cases and benefits.

![A robot holding a book with turning pages, trying to find a specific page](./cover.png){ width=300 }

## Offset Pagination

Offset pagination involves skipping a specified number of rows and then taking a fixed number of rows, allowing for flexible data retrieval.

### Example

Here's a typical query using offset pagination:

```sql
SELECT *         
FROM product        
WHERE category = 1        
ORDER BY id         
LIMIT $pageSize         
OFFSET $offset;        
```

The `LIMIT` clause defines how many rows to return, while `OFFSET` skips a specified number of rows. `ORDER BY` ensures results are consistent.

Typically, `pageSize` and `offset` are set based on user input or application logic to control pagination dynamically. For example, if `pageSize` is 100 and `offset` is 200, the query retrieves rows 200-300.

### Advantages

Offset pagination allows you to jump directly to a specific set of records, which is useful for applications requiring quick access to specific data or "go to page X" functionality. For instance, you can easily access a specific range like 3000-3100.

It is easier to implement, making it useful for smaller systems or static datasets like blog archives or product lists.

### Disadvantages

Offset pagination requires scanning all preceding rows to find the starting point. This can be inefficient and slow as the dataset grows. Performance degrades with larger datasets, as scanning more rows leads to slower response times.

For example, in a query like `SELECT * FROM product ORDER BY id LIMIT 100 OFFSET 100000`, Postgres scans and discards 100,000 rows even though only 100 are needed.

While offset-based pagination is common in legacy systems, its utility in modern systems may be limited compared to cursor-based pagination.

## Cursor-based Pagination

Unlike offset pagination, cursor-based pagination fetches results using a unique identifier (or a combination of columns), avoiding the need to skip rows.

### Example

Here's how you might implement cursor-based pagination:

```sql
SELECT *         
FROM product         
WHERE id > $lastId        
    AND category = 1        
ORDER BY id         
LIMIT $pageSize;        
```

Notice that, unlike the previous example, this query doesn't use `OFFSET`. Instead, we keep track of the `id` of the last record retrieved from the previous page and use it in the `WHERE` clause to fetch the next set of records.

To maintain reliable pagination, it's essential to ensure the cursor column is unique and immutable, as changes could disrupt the order of results. A good candidate is a primary key ID or a `CreatedTimestamp` column.

### Advantages

Cursor-based pagination is generally more efficient, as it avoids scanning and discarding rows. Instead, it directly jumps to records based on the cursor value. This approach remains efficient even for large offsets because the database can quickly use an index on the cursor column to find the starting point.

Cursor-based pagination provides stable results even if new records are inserted or deleted between page requests. Each page contains the expected set of records based on the cursor value.

### Disadvantages

Cursor-based pagination requires sequential page traversal and is more complex to implement because you must track the cursor value in your application code. This might be less convenient for users who want to navigate directly to a specific page.

_**Note:** However, we can avoid the need for sequential page traversal by using PageInfo/PageCursor in GraphQL._

We need to be mindful of [IDOR (Insecure Direct Object References)](https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html). If IDs are sensitive, we should encrypt cursor values with a random salt.

It can become quite complex if you need extra features like sorting on multiple columns, etc.

## Advanced Cursor Pagination Techniques

When dealing with extremely large datasets, an advanced cursor-based technique can further optimise performance.

In my experience using the basic cursor-based example on a table with 163 million rows, where only 300K rows met the `WHERE` clause criteria, the query timed out even with a `LIMIT` of 1000. This occurred because the query had to scan too many rows before finding 1000 that matched the criteria.

Now, you might wonder why it would need to scan so many rows if you have an index. The index's benefit is that it lets the database quickly locate the starting point. Imagine that the first record is in row 1. Now, the second record is after 1 million rows. To reach the limit of 1000, at least 1 million rows will need to be scanned. Even though there is an index, it can (and probably will) result in a timeout because it requires scanning many non-matching rows to find the ones that match.

In such scenarios, it's crucial to limit the number of rows scanned during each query execution. This can be achieved by adding a constraint that ensures efficient data retrieval, even if the `LIMIT` is not fully met.

### Example

Here's an updated query:

```sql
SELECT *         
FROM product         
WHERE id > $lastId        
    AND id <= $clampId        
    AND category = 1        
ORDER BY id         
LIMIT $pageSize;        
```

The `clampId` serves as an upper boundary, calculated as `lastId` plus a predefined range, to limit the number of rows scanned per query execution.

For instance, if `lastId` is 1000 and the scan limit is 10,000 rows, set `clampId` to 11,000. The `LIMIT` remains 1,000, ensuring immediate return if 1,000 matches are found or scanning at most 10,000 rows.

By clamping the range, we can significantly reduce query execution time, making it feasible to handle large datasets without overwhelming the system.

### Using Non-sequential Identifiers

While in the examples, the `id` is assumed to be numeric and sequential, it doesn't need to be to implement cursor-based pagination. We can, for instance, combine multiple fields, e.g., `<last_updated_at>` for sorting and `<last_id>` as a UUID to get the last item on the current page.

```sql
SELECT *       
FROM product      
WHERE (last_updated_at < $lastUpdatedAt)      
 OR (last_updated_at = $lastUpdatedAt AND last_id > $lastId)      
ORDER BY last_updated_at DESC, last_id      
LIMIT $pageSize;      
```

## Conclusion

Choosing the right pagination approach ensures optimal application performance and user satisfaction, regardless of dataset size.

While offset pagination is simpler to implement, it suffers from significant performance degradation at scale. In contrast, cursor pagination maintains consistent performance regardless of page depth.

However, offset-based pagination allows us to arbitrarily jump to any page. With cursor pagination, we have to traverse pages sequentially or use more complex techniques.

The choice between these two approaches ultimately depends on your use case. Choose cursor pagination for high-performance needs with large datasets. Opt for offset pagination when dataset size is manageable, and random page navigation is required.
