---
title: Solve Longest Common Subsequence with Dynamic Programming
excerpt: In this article, we will use the above steps to arrive at a Dynamic Programming solution to the Longest Common Subsequence problem.
category: "programming"
tags:
    - cpp
    - dynamic programming
    - tutorial
series: 'Dynamic Programming'
---

In this article, we will use the steps mentioned in the [introduction article](/blog/dynamic-programming-series-introduction) to arrive at a Dynamic Programming solution to the Longest Common Subsequence problem.

## Longest Common Subsequence (LCS)

**Problem Statement:** Given two sequences, find the length of the longest subsequence present in both of them. A subsequence is a sequence that appears in the same relative order but is not necessarily contiguous.

**Examples:**

1. LCS for input sequences "ABCDGH" and "AEDFHR" is "ADH".
2. LCS for input sequences "HUMAN" and "CHIMPANZEE" is "HMAN".

The longest common subsequence is used to solve problems such as

-   computing how similar two DNA sequences are; and
-   comparing two different versions of the same file.

You can read more about the Longest Common Subsequence [here](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem).

## Profiling

As mentioned in the [introduction article](/blog/dynamic-programming-series-introduction), we will be using [google benchmark](https://github.com/google/benchmark) to help profile our solutions.

_If you want to know more about how we will be using google benchmark, you can read the [introduction article](/blog/dynamic-programming-series-introduction)._

For the LCS problem, the worst case occurs when there is no match between the sequences.

For the purposes of this article, we will profile against the worst case by creating 2 strings of length _**n**_ and filling one of them with _**'a'**_ and the other with _**'b'**_. We will then attempt to see how long it takes for the function to return. _**n**_ will be part of the Benchmark name.

If you want to see the benchmarks in action, you can find the code [here](https://github.com/AnkurSheel/DynamicProgramming).

## Steps

In the [introduction article](/blog/dynamic-programming-series-introduction), we came up with the following steps to find a dynamic programming approach to our problem

1. Find the overlapping subproblem.
2. Start with a recursive solution
3. Modify the recursive solution to use a top-down memoized version.
4. Remove the recursion by making it an iterative solution.
5. If you don't need to keep all the previous results, keep only the required ones.

### Overlapping Subproblem

Let the 2 strings be **X** of length _**m**_ and **Y** of length _**n**_

Let **LCS(i,j)** be the length of the LCS. Then we can formalise the problem as follows

```ini
LCS(i,j) = 0 if X[i] = '\0' || Y[j] = '\0'
LCS(i,j) = 1 + LCS(i+1, j+1) if X[i] = Y[j]
LCS(i,j) = max(LCS(i+1, j), LCS(i, j+1) if X[i] != Y[j]
```

The length of the longest common subsequence will be **LCS(0,0)**.

### Naive Recursive Approach

The above formalisation can easily be translated into the following recursive method.

```cpp
int cLCS::Recursive(const char* const first, const char* const second)
{
    if (*first == '\0' || *second == '\0')
    {
        return 0;
    }
    if (*first == *second)
    {
        return 1 + Recursive(first + 1, second + 1);
    }
    return max(Recursive(first + 1, second), Recursive(first, second + 1));
}
```

In the recursive approach, it is tough to get the actual LCS string, so we are just going to return the length of the LCS.

### Top-Down Recursive approach with Memoization

LCS subproblems consist of a pair of suffixes of the 2 input strings.

To store and look up the subproblem solutions, we can use a 2d array.

We will use a _**-1**_ to tell the algorithm that nothing has been stored yet.

```cpp
string cLCS::Memonized(const string& first, const string& second)
{
    int length1 = first.length();
    int length2 = second.length();
    if (length1 == 0 || length2 == 0)
    {
        return "";
    }
    Memonized(first.data(), second.data(), 0, 0);
    return GetText(first, second);
}

int cLCS::Memonized(const char* const first, const char* const second, int i, int j)
{
    if (m_results[GetIndex(i, j)] == -1)
    {
        if (first[i] == '\0' || second[j] == '\0')
        {
            m_results[GetIndex(i, j)] = 0;
        }
        else if (first[i] == second[j])
        {
            m_results[GetIndex(i, j)] = 1 + Memonized(first, second, i + 1, j + 1);
        }
        else
        {
            int val1 = Memonized(first, second, i + 1, j);
            int val2 = Memonized(first, second, i, j + 1);
            m_results[GetIndex(i, j)] = max(val1, val2);
        }
    }
    return m_results[GetIndex(i, j)];
}
```

In the above algorithm, _**m_results(0)**_, gives the length of the LCS.

We will look at _**GetText()**_ in the next section to see how we can get the subsequence after computing the _**m_results**_ array.

### Getting the subsequence

Once we have filled in the **_m_results_** array, we can find the sequence by traversing forwards through the array.

```cpp
string cLCS::GetText(const string& first, const string& second)
{
    if (m_results[0] == 0)
    {
        return "";
    }
    int i = 0;
    int j = 0;
    stringstream ss("");
    while (i < first.length() && j < second.length())
    {
        if (first[i] == second[j])
        {
            ss << first[i];
            i++;
            j++;
        }
        else if (m_results[GetIndex(i + 1, j)] >= m_results[GetIndex(i, j + 1)])
        {
            i++;
        }
        else
        {
            j++;
        }
    }
    return ss.str();
}
```

To find the longest common subsequence, we traverse through both the strings - _**first**_ and **_second_** using indexes **_i_** and **_j_** respectively.

If _**first[i] = second[j]**_, then we add this character to the result string and increment both **_i_** and _**j**_.

If there is no match, that means that the subsequence was formed either by deleting **_first[i]_** or **_second[j]_**.

If **_m_results[i+1][j]_** >= **_m_results[i][j + 1]_**, this means that the subsequence was formed by deleting **_first[i]_**. Otherwise, it was formed by deleting **_second[j]_**.

Continuing in this way, we can get the common subsequence.

### Bottom-Up Approach with Dynamic Programming

To develop a DP approach, we just flip the way we are storing the results by traversing the array backwards.

```cpp
string cLCS::DP(const std::string& first, const std::string& second)
{
    int length1 = first.length();
    int length2 = second.length();
    if (length1 == 0 || length2 == 0)
    {
        return "";
    }

    for (int i = length1; i >= 0; i--)
    {
        for (int j = length2; j >= 0; j--)
        {
            if (first[i] == '\0' || second[j] == '\0')
            {
                m_results[GetIndex(i, j)] = 0;
            }
            else if (first[i] == second[j])
            {
                m_results[GetIndex(i, j)] = 1 + m_results[GetIndex(i + 1, j + 1)];
            }
            else
            {
                m_results[GetIndex(i, j)] = max(m_results[GetIndex(i + 1, j)], m_results[GetIndex(i, j + 1)]);
            }
        }
    }
    return GetText(first, second);
}
```

The disadvantage of the bottom-up approach over memoizing is that this fills in the entire array even if the problem could be solved by computing a fraction of the array.

### Bottom-Up Approach with Dynamic Programming(optimised)

We can optimise the above solution since once we have computed the row **_i_** of array **_m_results_**, we no longer need the values of **_i + 1_**.

However, we cannot recreate the subsequence using this approach and hence I won't be showing it here.

## Conclusion

If you would like to look at the code or run the benchmarks or tests yourself, you can find the code [here](https://github.com/AnkurSheel/DynamicProgramming).

In the following article in the series, we will look at another problem that can be solved by Dynamic Programming.

Have you tried Dynamic Programming before? How was your experience? Let me know.
