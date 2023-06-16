---
title: "Transitioning from C# LINQ to Java Streams"
excerpt: "Transitioning from C# to Java? Mapping C# LINQ functions to Java Streams may seem challenging, but we'll explore their equivalents in this blog post."
coverImage: "./cover.png"
category: "programming"
tags:
- "csharp"
- "java"

---

If you're transitioning from C# to Java, the task of mapping C# LINQ functions to Java Streams can seem challenging
While the core concepts bear similarities, unravelling the nuances of syntax and functionality is crucial for success.

In this blog post, we will explore the Java equivalents for C# LINQ functions.

## Operations

## Select / map

Transforms each element of a sequence based on a given function.

### C#

```csharp
var numbers = new List<int> { 1, 2, 3, 4, 5 };
var squaredNumbers = numbers.Select(x => x * x).ToList();
```

### Java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
List<Integer> squaredNumbers = numbers.stream()
                                      .map(x -> x * x)
                                      .collect(Collectors.toList());
```

### Output

```
[1, 4, 9, 16, 25]
```

## Where / filter

Filters a sequence based on a specified condition.

### C#

```csharp
var numbers = new List<int> { 1, 2, 3, 4, 5 };
var evenNumbers = numbers.Where(x => x % 2 == 0).ToList();
```

### Java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
List<Integer> evenNumbers = numbers.stream()
                                   .filter(x -> x % 2 == 0)
                                   .collect(Collectors.toList());
```

### Output

```
[2, 4]
```

## OrderBy / sorted

Sorts the elements of a sequence in ascending order based on a specified key.

### C#

```csharp
var numbers = new List<int> { 3, 1, 4, 2, 5 };
var sortedNumbers = numbers.OrderBy(x => x).ToList();
```

### Java

```java
List<Integer> numbers = Arrays.asList(3, 1, 4, 2, 5);
List<Integer> sortedNumbers = numbers.stream()
                                     .sorted()
                                     .collect(Collectors.toList());
```

### Output

```
[1, 2, 3, 4, 5]
```

## OrderByDescending / sorted

Sorts the elements of a sequence in descending order based on a specified key.

### C#

```csharp
var numbers = new List<int> { 5, 2, 9, 1, 7 };
var sortedNumbers = numbers.OrderByDescending(n => n);
```

### Java

```java
List<Integer> numbers = Arrays.asList(5, 2, 9, 1, 7);

List<Integer> sortedNumbers = numbers.stream()
                                     .sorted(Comparator.reverseOrder())
                                     .collect(Collectors.toList());
```

### Output

```
[9, 7, 5, 2, 1]
```

## GroupBy / groupingBy

Groups the elements of a sequence based on a specified key.

### C#

```csharp
var people = new List<Person>
{
    new Person { Name = "Alice", Age = 25 },
    new Person { Name = "Bob", Age = 30 },
    new Person { Name = "Charlie", Age = 25 }
};
var peopleByAge = people.GroupBy(p => p.Age);
```

### Java

```java
List<Person> people = Arrays.asList(
        new Person("Alice", 25),
        new Person("Bob", 30),
        new Person("Charlie", 25)
);
Map<Integer, List<Person>> peopleByAge = people.stream()
                                               .collect(Collectors.groupingBy(Person::getAge));
```

### Output

```
{
    25: [{ Name: "Alice", Age: 25 }, { Name: "Charlie", Age: 25 }],
    30: [{ Name: "Bob", Age: 30 }]
}
```

## Join / join

Combines two sequences based on matching keys.

### C#

```csharp
var persons = new List<Person>
{
    new Person { Id = 1, Name = "John" },
    new Person { Id = 2, Name = "Jane" },
    new Person { Id = 3, Name = "Alice" }
};

var addresses = new List<Address>
{
    new Address { Id = 1, City = "New York" },
    new Address { Id = 2, City = "London" },
    new Address { Id = 3, City = "Paris" }
};

var joinedData = persons.Join(addresses,
                              person => person.Id,
                              address => address.Id,
                              (person, address) => new { PersonName = person.Name, City = address.City });
```

### Java

```java
List<Person> persons = List.of(
        new Person(1, "John"),
        new Person(2, "Jane"),
        new Person(3, "Alice")
);

List<Address> addresses = List.of(
        new Address(1, "New York"),
        new Address(2, "London"),
        new Address(3, "Paris")
);

List<JoinedData> joinedData = persons.stream()
                                     .join(addresses.stream(),
                                           person -> person.getId(),
                                           address -> address.getId(),
                                           (person, address) -> new JoinedData(person.getName(), address.getCity()))
                                     .collect(Collectors.toList());
```

### Output

```
[{ PersonName = "John", City = "New York" },
 { PersonName = "Jane", City = "London" },
 { PersonName = "Alice", City = "Paris" }]
```

## Any / AnyMatch

Checks if any element in the sequence satisfies a specified condition.

### C#

```csharp
var numbers = new List<int> { 1, 2, 3, 4, 5 };
var anyEven = numbers.Any(n => n % 2 == 0);
```

### Java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
boolean anyEven = numbers.stream()
                         .anyMatch(n -> n % 2 == 0);
```

### Output

```
true
```

## All / AllMatch

Checks if all elements in the sequence satisfy a specified condition.

### C#

```csharp
var numbers = new List<int> { 1, 2, 3, 4, 5 };
var allPositive = numbers.All(n => n > 0);
```

### Java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

boolean allPositive = numbers.stream()
                             .allMatch(n -> n > 0);
```

### Output

```
true
```

## Contains / contains

Checks if a sequence contains a specific element.

### C#

```csharp
var fruits = new List<string> { "apple", "banana", "cherry" };
var containsBanana = fruits.Contains("banana");
```

### Java

```java
List<String> fruits = Arrays.asList("apple", "banana", "cherry");
boolean containsBanana = fruits.contains("banana");
```

### Output

```
true
```

## Count / count

Returns the number of elements in a sequence.

### C#

```csharp
var numbers = new List<int> { 1, 2, 3, 4, 5 };
var count = numbers.Count();
```

### Java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
long count = numbers.stream()
                    .count();
```

### Output

```
5
```

## First / findFirst

Returns the first element from a sequence, or throws an exception if the sequence is empty.

### C#

```csharp
var = new List<int> { 1, 2, 3, 4, 5 };
var firstNumber = numbers.First();
```

### Java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
int firstNumber = numbers.stream()
                         .findFirst()
                         .orElseThrow(NoSuchElementException::new);
```

### Output

```
1
```

## FirstOrDefault / findFirst

Returns the first element from a sequence, or returns the default value for the element type if the sequence is empty.

### C#

```csharp
var numbers = new List<int>();
var firstOrDefaultNumber = numbers.FirstOrDefault();
```

### Java

```java
List<Integer> numbers = new ArrayList<>();
int firstOrDefaultNumber = numbers.stream()
                                  .findFirst()
                                  .orElse(0);
```

### Output

```
0
```

## Last / reduce

Returns the last element from a sequence, or throws an exception if the sequence is empty.

### C#

```csharp
List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };

int lastNumber = numbers.Last();
```

### Java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
int lastNumber = numbers.stream()
                .reduce((a, b) -> b)
                .orElseThrow(NoSuchElementException::new);
```

### Output

```
5
```

## LastOrDefault / reduce

Returns the last element from a sequence, or returns the default value for the element type if the sequence is empty.

### C#

```csharp
var = new List<int>();
var lastOrDefaultNumber = numbers.LastOrDefault();
```

### Java

```java
List<Integer> numbers = new ArrayList<>();
int lastOrDefaultNumber = numbers.stream()
                                 .reduce((a, b) -> b)
                                 .orElse(0);
```

### Output

```
0
```

## Skip / skip

Skips a specified number of elements from the start of a sequence.

### C#

```csharp
var numbers = new List<int> { 1, 2, 3, 4, 5 };
var skippedNumbers = numbers.Skip(2);
```

### Java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
List<Integer> skippedNumbers = numbers.stream()
                                      .skip(2)
                                      .collect(Collectors.toList());
```

### Output

```
[3, 4, 5]
```

## SkipWhile / dropWhile

Skips elements in a sequence until a specified condition is no longer satisfied, and includes all the remaining elements.

### C#

```csharp
var numbers = new List<int> { 1, 2, 3, 4, 5 };
var skippedNumbers = numbers.SkipWhile(n => n < 3);
```

### Java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
List<Integer> skippedNumbers = numbers.stream()
                                      .dropWhile(n -> n < 3)
                                      .collect(Collectors.toList());
```

### Output

```
[3, 4, 5]
```

## Take / limit

Returns a specified number of contiguous elements from the start of a sequence.

### C#

```csharp
var numbers = new List<int> { 1, 2, 3, 4, 5 };
var takenNumbers = numbers.Take(3);
```

### Java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
List<Integer> takenNumbers = numbers.stream()
                                    .limit(3)
                                    .collect(Collectors.toList());

```

### Output

```
[1, 2, 3]
```

## TakeWhile / takeWhile

takes elements from a sequence as long as a specified condition is true.

### C#

```csharp
var numbers = new List<int> { 1, 2, 3, 4, 5 };
var takenNumbers = numbers.TakeWhile(n => n < 4);
```

### Java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
List<Integer> takenNumbers = numbers.stream()
                                    .takeWhile(n -> n < 4)
                                    .collect(Collectors.toList());
```

### Output

```
[1, 2, 3]
```

## Sum / Sum

Calculates the sum of a sequence of numeric values.

### C#

```csharp
var numbers = new List<int> { 1, 2, 3, 4, 5 };
var sum = numbers.Sum();
```

### Java

```java
List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
int sum = numbers.Sum();
```

### Output

```
15
```

## Average / average

Calculates the average of a sequence of numeric values.

### C#

```csharp
var numbers = new List<int> { 1, 2, 3, 4, 5 };
var average = numbers.Average();
```

### Java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
double average = numbers.stream()
                        .mapToInt(Integer::intValue)
                        .average()
                        .orElseThrow(NoSuchElementException::new);
```

### Output

```
3
```

## Min / min

Returns the minimum value from a sequence of comparable elements.

### C#

```csharp
var numbers = new List<int> { 5, 2, 9, 1, 7 };
var min = numbers.Min();
```

### Java

```java
List<Integer> numbers = Arrays.asList(5, 2, 9, 1, 7);
int min = numbers.stream()
                 .mapToInt(Integer::intValue)
                 .min()
                 .orElseThrow(NoSuchElementException::new);
```

### Output

```
1
```

## Max / max

Returns the maximum value from a sequence of comparable elements.

### C#

```csharp
var numbers = new List<int> { 5, 2, 9, 1, 7 };
var max = numbers.Max();
```

### Java

```java
List<Integer> numbers = Arrays.asList(5, 2, 9, 1, 7);
int max = numbers.stream()
                 .mapToInt(Integer::intValue)
                 .max()
                 .orElseThrow(NoSuchElementException::new);
```

### Output

```
9
```

## Aggregate / reduce

Performs a custom aggregation operation on the elements of a sequence, combining them iteratively based on a specified lambda expression.

### C#

```csharp
var numbers = new List<int> { 1, 2, 3, 4, 5 };
var sum = numbers.Aggregate((acc, num) => acc + num);
```

### Java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
int sum = numbers.stream()
                 .reduce(0, (acc, num) -> acc + num);
```

### Output

```
15
```

## Distinct / distinct

Returns a sequence with distinct elements.

### C#

```csharp
var numbers = new List<int> { 1, 2, 2, 3, 3, 4, 5 };
var distinctNumbers = numbers.Distinct();
```

### Java

```java
List<Integer> numbers = Arrays.asList(1, 2, 2, 3, 3, 4, 5);
List<Integer> distinctNumbers = numbers.stream()
                                       .distinct()
                                       .collect(Collectors.toList());
```

### Output

```
[1, 2, 3, 4, 5]
```

## Union / concat

Combines two sequences, returning a sequence that contains distinct elements from both sequences.

### C#

```csharp
var numbers1 = new List<int> { 1, 2, 3 };
var numbers2 = new List<int> { 3, 4, 5 };
var unionNumbers = numbers1.Union(numbers2);
```

### Java

```java
List<Integer> numbers1 = Arrays.asList(1, 2, 3);
List<Integer> numbers2 = Arrays.asList(3, 4, 5);
List<Integer> unionNumbers = Stream.concat(numbers1.stream(), numbers2.stream())
                                   .distinct()
                                   .collect(Collectors.toList());
```

### Output

```
[1, 2, 3, 4, 5]
```

## Intersect / filter

Returns the common elements between two sequences.

### C#

```csharp
var numbers1 = new List<int> { 1, 2, 3, 4 };
var numbers2 = new List<int> { 3, 4, 5 };
var intersectNumbers = numbers1.Intersect(numbers2);
```

### Java

```java
List<Integer> numbers1 = Arrays.asList(1, 2, 3, 4);
List<Integer> numbers2 = Arrays.asList(3, 4, 5);
List<Integer> intersectNumbers = numbers1.stream()
                                         .filter(numbers2::contains)
                                         .collect(Collectors.toList());
```

### Output

```
[3, 4]
```

## Except / filter

Returns the elements from the first sequence that are not present in the second sequence.

### C#

```csharp
var numbers1 = new List<int> { 1, 2, 3, 4 };
var numbers2 = new List<int> { 3, 4, 5 };
var exceptNumbers = numbers1.Except(numbers2);
```

### Java

```java
List<Integer> numbers1 = Arrays.asList(1, 2, 3, 4);
List<Integer> numbers2 = Arrays.asList(3, 4, 5);
List<Integer> exceptNumbers = numbers1.stream()
                                      .filter(num -> !numbers2.contains(num))
                                      .collect(Collectors.toList());
```

### Output

```
[1, 2]
```

## Concat / concat

Concatenates two sequences into a single sequence.

### C#

```csharp
var numbers1 = new List<int> { 1, 2, 3 };
var numbers2 = new List<int> { 3, 4, 5 };
var concatenatedNumbers = numbers1.Concat(numbers2).ToList();
```

### Java

```java
List<Integer> numbers1 = Arrays.asList(1, 2, 3);
List<Integer> numbers2 = Arrays.asList(3, 4, 5);
List<Integer> concatenatedNumbers = Stream.concat(numbers1.stream(), numbers2.stream())
                                          .collect(Collectors.toList());
```

### Output

```
[1, 2, 3, 3, 4, 5]
```

## Reverse / reverse

Reverses the order of the elements in a sequence.

### C#

```csharp
var numbers = new List<int> { 1, 2, 3, 4, 5 };
numbers.Reverse();
```

### Java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
Collections.reverse(numbers);
```

### Output

```
[5, 4, 3, 2, 1]
```

## Zip / mapToObj

Combines two sequences by merging corresponding elements into a new sequence of tuples.

### C#

```csharp
var numbers1 = new List<int> { 1, 2, 3, 4 };
var numbers2 = new List<int> { 10, 20, 30 };

var zippedNumbers = numbers1.Zip(numbers2, (x, y) => x + y).ToList();
```

### Java

```java
List<Integer> numbers1 = Arrays.asList(1, 2, 3, 4);
List<Integer> numbers2 = Arrays.asList(10, 20, 30);
List<Integer> zippedNumbers = IntStream.range(0, Math.min(numbers1.size(), numbers2.size()))
                                       .mapToObj(i -> numbers1.get(i) + numbers2.get(i))
                                       .collect(Collectors.toList());
```

### Output

```
[11, 22, 33]
```

## ElementAt / get

Returns the element at a specified index in a sequence.

### C#

```csharp
var fruits = new List<string> { "apple", "banana", "cherry" };
var element = fruits.ElementAt(1);
```

### Java

```java
List<String> fruits = Arrays.asList("apple", "banana", "cherry");
String element = fruits.get(1);
```

### Output

```
banana
```

## Single / reduce

Returns a single element from a sequence and throws an exception if the sequence contains zero or more than one element.

### C#

```csharp
var numbers = new List<int> { 1 };
var singleNumber = numbers.Single();
```

### Java

```java
List<Integer> numbers = Arrays.asList(1);
int singleNumber = numbers.stream()
                          .reduce((a, b) -> {
                              throw new IllegalStateException("More than one element found");
                          })
                          .orElseThrow(NoSuchElementException::new);
```

### Output

```
1
```

## SingleOrDefault / reduce

Returns the single element of a sequence, or the default value if the sequence is empty or contains more than one element.

### C#

```csharp
var numbers = new List<int> { 1, 2, 3 };
var singleOrDefaultNumber = numbers.SingleOrDefault();
```

### Java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3);
int singleOrDefaultNumber = numbers.stream()
                                   .reduce((a, b) -> { 
                                        throw new IllegalStateException("More than one element found");
                                   })
                                   .orElse(0);
```

### Output

```
0
```

## DefaultIfEmpty

Returns a sequence with a default element if the original sequence is empty.

### C#

```csharp
var numbers = new List<int>();
var numbersWithDefault = numbers.DefaultIfEmpty(5);
```

### Java

```java
List<Integer> numbers = new ArrayList<>();
Iterable<Integer> numbersWithDefault = numbers.isEmpty() 
                                        ? Collections.singletonList(5) 
                                        : numbers;
```

### Output

```
[5]
```

## SequenceEqual / sequenceEqual

Checks if two sequences are equal by comparing their elements.

### C#

```csharp
var numbers1 = new List<int> { 1, 2, 3 };
var numbers2 = new List<int> { 1, 2, 3 };
var isEqual = numbers1.SequenceEqual(numbers2);
```

### Java

```java
List<Integer> numbers1 = Arrays.asList(1, 2, 3);
List<Integer> numbers2 = Arrays.asList(1, 2, 3);
boolean isEqual = Objects.equals(numbers1, numbers2);
```

### Output

```
true
```

## Cast / map (with explicit casting)

Converts the elements of a sequence to a specified type or throws an exception if any element in the sequence cannot be cast to that type.

### C#

```csharp
object[] objects = { 1, 2, 3 };
IEnumerable<int> numbers = objects.Cast<int>();
```

### Java

```java
Object[] objects = { 1, 2, 3 };
List<Integer> numbers = Arrays.stream(objects)
                              .map(obj -> (Integer) obj)
                              .collect(Collectors.toList());

```

### Output

```
[1, 2, 3]
```

## OfType / filter (with type check)

Filters the elements of a sequence based on a specified type.

### C#

```csharp
var mixedList = new ArrayList { 1, "hello", 3.14, true };
IEnumerable<string> strings = mixedList.OfType<string>();
```

### Java

```java
List<Object> mixedList = Arrays.asList(1, "hello", 3.14, true);
List<String> strings = mixedList.stream()
                                .filter(obj -> obj instanceof String)
                                .map(obj -> (String) obj)
                                .collect(Collectors.toList());
```

### Output

```
["hello"]
```

## ToArray / toArray

Converts a sequence to an array.

### C#

```csharp
var numbers = new List<int> { 1, 2, 3 };
int[] numberArray = numbers.ToArray();
```

### Java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3);
int[] numberArray = numbers.stream()
                           .mapToInt(Integer::intValue)
                           .toArray();
```

## ToList / asList

Converts a sequence to a list.

### C#

```csharp
int[] numbers = { 1, 2, 3 };
var numberList = numbers.ToList();
```

### Java

```java
int[] numbers = { 1, 2, 3 };
List<Integer> numberList = new ArrayList<>(Arrays.asList(numbers));
```

## ToDictionary / toMap

Converts a sequence to a dictionary based on a specified key and value selector.

### C#

```csharp
var fruits = new List<string> { "apple", "banana", "cherry" };
Dictionary<string, int> fruitLengths = fruits.ToDictionary(fruit => fruit, fruit => fruit.Length);
```

### Java

```java
List<String> fruits = Arrays.asList("apple", "banana", "cherry");
Map<String, Integer> fruitMap = fruits.stream()
                                      .collect(Collectors.toMap(fruit -> fruit, fruit -> fruit.length()));
```

### Output

```
{
    apple: 5,
    banana: 6,
    cherry: 6
}
```

## ToLookup / groupingBy

Converts a sequence to a lookup based on a specified key selector.

### C#

```csharp
var fruits = new List<string> { "apple", "banana", "cherry", "avocado", "blueberry" };
ILookup<char, string> fruitsByFirstLetter = fruits.ToLookup(fruit => fruit[0]);
```

### Java

```java
List<String> fruits = Arrays.asList("apple", "banana", "cherry", "avocado", "blueberry");
Map<Character, List<String>> fruitsByFirstLetter = fruits.stream()
                                                        .collect(Collectors.groupingBy(fruit -> fruit.charAt(0)));
```

### Output

```
{
    a = [apple, avocado],
    b = [banana, blueberry],
    c = [cherry]
}
```

---

## Conclusion

By grasping the mapping of C# LINQ functions to their Java equivalents, we can confidently navigate the transition between these languages. 
