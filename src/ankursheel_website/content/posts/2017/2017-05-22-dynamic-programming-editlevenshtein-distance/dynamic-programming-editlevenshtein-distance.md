---
title: Solve Edit(Levenshtein) distance with Dynamic Programming
excerpt: In this article, we will develop a Dynamic Programming solution to the Edit Distance problem.
coverImage: './cover.jpg'
category: "programming"
tags:
    - cpp
    - dynamic programming
    - tutorial
series: 'Dynamic Programming'
---

In this article, we will use the steps mentioned in the [introduction article](/blog/dynamic-programming-series-introduction) to arrive at a Dynamic Programming solution to the Edit Distance problem.

## Edit Distance

**Problem Statement:** Given two input strings (S1, S2) of different lengths (m, n), we need to convert the first string into the second string using a minimum number (or minimum cost) of edit operations.

One can replace existing characters in the first string with characters from the second string, delete existing characters or insert new characters into the first string.

**Examples:**

1. Edit Distance for input sequences _"sunday"_ and _"saturday"_ is 3. The last three and first characters are the same. We need to convert _'un'_ to _'atur'_.

    This can be achieved by inserting character _'a'_, inserting character 't' and replacing character _'n'_ with character _'r'_

2. Edit Distance for input sequences _"cat"_ and _"cars"_ is 2. The first 2 characters are the same. We need to convert _'t'_ to _'rs'_.

    This can be achieved by inserting character _'r'_ and replacing character _'t'_ with character _'s'_.

The edit distance can be used in spell checkers and correction systems for optical character recognition.

You can read more about the Edit Distance [here](https://en.wikipedia.org/wiki/Edit_distance).

## Profiling

As mentioned in the [introduction article](/blog/dynamic-programming-series-introduction), we will be using [google benchmark](https://github.com/google/benchmark) to help profile our solutions. If you want to know more about how we will be using google benchmark, you can read the [introduction article](/blog/dynamic-programming-series-introduction).

For the Edit Distance problem, the worst case occurs when there is no match between the sequences.

For the purposes of this article, we will profile against the worst case by creating 2 strings of length **_n_** and filling one of them with **_'a'_** and the other with **_'b'_**. We will then attempt to see how long it takes for the function to return. **_n_** will be part of the Benchmark name.

If you want to see the benchmarks in action, you can find the code [here](https://github.com/AnkurSheel/DynamicProgramming).

## Steps

In the [introduction article](/blog/dynamic-programming-series-introduction), we came up with the following steps to find a dynamic programming approach to our problem

1. Find the overlapping subproblem.
2. Start with a recursive solution
3. Modify the recursive solution to use a top-down memoized version.
4. Remove the recursion by making it an iterative solution.
5. If you don't need to keep all the previous results, keep only the required ones.

### Overlapping Subproblem

Let the 2 strings be **X** of length **_m_** and **Y** of length **_n_**.

Let **EditDistance(i,j)** be the number of operations. Then we can formalise the problem as follows

```ini
EditDistance(i, j) = n - j : if i = 0;
EditDistance(i, j) = m - i : if  j = 0;
EditDistance(i, j) = EditDistance(i + 1, j + 1) if X[i] = Y[j]
EditDistance(i, j) = 1 + min (
                                EditDistance(i,  j + 1) // insert
                                EditDistance(i + 1,  j) // delete
                                EditDistance(i + 1,  j + 1) // replace
                            ) if X[i] != Y[j]
```

The length of the edit distance will be **_EditDistance(0,0)_**.

### Naive Recursive Approach

The above formalisation can easily be translated into the following recursive method.

```cpp
int cEditDistance::Recursive(const string& first, const string& second, int index1, int index2)
{
    int length1 = first.length() - index1;
    int length2 = second.length() - index2;

    if (length1 == 0)
    {
        return length2;
    }

    if (length2 == 0)
    {
        return length1;
    }

    if (first[index1] == second[index2])
    {
        return Recursive(first, second, index1 + 1, index2 + 1);
    }
    else
    {
        int insertCost = Recursive(first, second, index1, index2 + 1);
        int deleteCost = Recursive(first, second, index1 + 1, index2);
        int replaceCost = Recursive(first, second, index1 + 1, index2 + 1);

        int minCost = insertCost;
        if (deleteCost < minCost)
        {
            minCost = deleteCost;
        }

        if (replaceCost < minCost)
        {
            minCost = replaceCost;
        }
        return 1 + minCost;
    }
    return -1;
}
```

In the recursive approach, it is tough to get the operations string, so we will just return the number of operations.

### Top-Down Recursive approach with Memoization

Edit distance subproblems consist of a pair of suffixes of the 2 input strings. To store and look up the subproblem solutions, we can use a 2d array. We will use a _**-1**_ to tell the algorithm that nothing has been stored yet.

To get the actual operations, we will use another 2D array that will store the operation we are performing at that stage.

```cpp
string cEditDistance::Memonized(const string& first, const string& second)
{
    int length1 = first.length();
    int length2 = second.length();

    m_results.Init(length1 + 1, length2 + 1);
    m_Operations.Init(length1, length2);
    int operations = Memonized(first, second, 0, 0);
    return GetSteps(first, second, operations);
}

int cEditDistance::Memonized(const string& first, const string& second, int index1, int index2)
{
    if (m_results.GetElement(index1, index2) == -1)
    {
        int length1 = first.length() - index1;
        int length2 = second.length() - index2;

        if (length1 == 0)
        {
            m_results.SetElement(index1, index2, length2);
        }
        else if (length2 == 0)
        {
            m_results.SetElement(index1, index2, length1);
        }
        else if (first[index1] == second[index2])
        {
            m_results.SetElement(index1, index2, Memonized(first, second, index1 + 1, index2 + 1));
            m_Operations.SetElement(index1, index2, 0);
        }
        else
        {
            int insertCost = Memonized(first, second, index1, index2 + 1);
            int deleteCost = Memonized(first, second, index1 + 1, index2);
            int replaceCost = Memonized(first, second, index1 + 1, index2 + 1);

            int minCost = insertCost;
            m_Operations.SetElement(index1, index2, 1);

            if (deleteCost < minCost)
            {
                minCost = deleteCost;
                m_Operations.SetElement(index1, index2, 2);
            }

            if (replaceCost < minCost)
            {
                minCost = replaceCost;
                m_Operations.SetElement(index1, index2, 3);
            }

            m_results.SetElement(index1, index2, 1 + minCost);
        }
    }
    return m_results.GetElement(index1, index2);
}
```

The above algorithm, **_m_results(0)_**, gives the number of operations.

In the next section, we will look at **_GetSteps()_** to see how we can get the subsequence after computing the **_m_operations_** array.

### Getting the subsequence

Once we have filled in the **_m_results_** array, we can find the sequence by traversing forwards through the array.

```cpp
string cEditDistance::GetSteps(const std::string& first, const std::string& second, int numberOfOperations)
{
    int index1 = 0;
    int index2 = 0;
    stringstream steps;
    stringstream currentString;

    steps << "Number Of Operations : " << numberOfOperations << endl;

    if (numberOfOperations == 0)
    {
        return steps.str();
    }

    steps << "Starting String : " << first << endl;

    while (index1 < first.length() && index2 < second.length())
    {
        if (m_Operations.GetElement(index1, index2) == 0)  // match
        {
            currentString << first[index1];
            index1 = index1 + 1;
            index2 = index2 + 1;
        }
        else if (m_Operations.GetElement(index1, index2) == 1)  // insert
        {
            steps << "Insert character " << second[index2] << " : Current String " << currentString.str();
            currentString << second[index2];
            steps << " : Updated String " << currentString.str() << endl;
            index2 = index2 + 1;
        }
        else if (m_Operations.GetElement(index1, index2) == 2)  // delete
        {
            currentString << first[index1];
            steps << "Delete character " << first[index1] << " : Current String " << currentString.str();
            currentString.seekp(-1, ios_base::end);
            currentString << " ";
            steps << " : Updated String " << currentString.str() << endl;
            currentString.seekp(-1, ios_base::end);
            index1 = index1 + 1;
        }
        else if (m_Operations.GetElement(index1, index2) == 3)  // replace
        {
            steps << "Replace character " << first[index1] << " with character " << second[index2] << " : Current String ";
            currentString << first[index1];
            steps << currentString.str();
            currentString.seekp(-1, ios_base::end);
            currentString << second[index2];
            steps << " : Updated String " << currentString.str() << endl;
            index1 = index1 + 1;
            index2 = index2 + 1;
        }
    }
    if (second.length() - index2 > 0)
    {
        steps << "Current String \"" << currentString.str() << "\" : Insert remaining " << second.length() - index2 << " characters from the second string at position " << index2 << endl;
    }
    if (first.length() - index1 > 0)
    {
        if (index1 == 0)
        {
            currentString << first;
        }
        steps << "Current String \"" << currentString.str() << "\" : Delete remaining " << first.length() - index1 << " characters from position " << index1 << endl;
    }
    steps << "Final String : " << second << endl;
    return steps.str();
}
```

To find the operations, we traverse through **m_operations** till either **_index1 >= first.length_** or **_index2 >= second.length_** as at that point either all the remaining characters need to be inserted or deleted.

If there is a match, then

-   If the element at **m_operations** indicates a **match**, we increment **index1** and **index2**.
-   If the element at **m_operations** indicates an **Insert**, then we insert the character at **second[index2]** and increment **index2**.
-   If the element at **m_operations** indicates a **Delete**, we delete the character at **first[index1]** and increment **index1**.
-   If the element at **m_operations** indicates a **Replace**, we replace the character at **first[index1]** with **second[index2]** and increment **index1** and **index2**.

Continuing in this way, we can get the operations.

### Bottom-Up Approach with Dynamic Programming

To develop a DP approach, we just flip the way we are storing the results by traversing the strings backwards.

```cpp
string cEditDistance::DP(const std::string& first, const std::string& second)
{
    int length1 = first.length();
    int length2 = second.length();

    m_results.Init(length1 + 1, length2 + 1);

    for (int index1 = length1; index1 >= 0; index1--)
    {
        for (int index2 = length2; index2 >= 0; index2--)
        {
            if (index1 == length1)
            {
                m_results.SetElement(index1, index2, length2 - index2);
            }
            else if (index2 == length2)
            {
                m_results.SetElement(index1, index2, length1 - index1);
            }
            else if (first[index1] == second[index2])
            {
                m_results.SetElement(index1, index2, m_results.GetElement(index1 + 1, index2 + 1));
                m_Operations.SetElement(index1, index2, 0);
            }
            else
            {
                int insertCost = m_results.GetElement(index1, index2 + 1);
                int deleteCost = m_results.GetElement(index1 + 1, index2);
                int replaceCost = m_results.GetElement(index1 + 1, index2 + 1);

                int minCost = insertCost;
                m_Operations.SetElement(index1, index2, 1);

                if (deleteCost < minCost)
                {
                    minCost = deleteCost;
                    m_Operations.SetElement(index1, index2, 2);
                }

                if (replaceCost < minCost)
                {
                    minCost = replaceCost;
                    m_Operations.SetElement(index1, index2, 3);
                }

                m_results.SetElement(index1, index2, 1 + minCost);
            }
        }
    }

    int operations = m_results.GetElement(0, 0);
    return GetSteps(first, second, operations);
}
```

The disadvantage of the bottom-up approach over memoizing is that this fills in the entire array even if the problem could be solved by computing a fraction of the array.

## Conclusion

The benchmark results on my machine

![Edit distance benchmarks](./cover.jpg)

If you would like to look at the code or run the benchmarks or tests yourself, you can find the code [here](https://github.com/AnkurSheel/DynamicProgramming).

In the following article in the series, we will look at another problem that can be solved by Dynamic Programming.

Have you tried Dynamic Programming before? How was your experience? Let me know.
