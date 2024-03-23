<!-- # Data Structure & Time Complexity -->

# What is data structure?

Data structure is a collection of

- data values
- relationships among data values
- operations that can be applied to the data

&nbsp;

What I understand is...

**Data structure refers to the organization and arrangement of data within a computer system to optimize storage and accessibility.**

&nbsp;

# Why Should We Learn About Data Structures?

1. **Efficient Memory Usage**: Instead of reserving excess memory, data structures help optimize memory usage, akin to allocating just enough rooms for a certain number of people, thereby reducing space complexity.

2. **Improved Execution Time**: Utilizing appropriate data structures enhances program execution speed, as efficient algorithms built upon these structures can run seamlessly, leading to time savings in processing tasks.

3. **Simplified Programming**: Comparable to the skeletal framework of the human body, well-designed data structures provide a foundation for easier program development. Conversely, incorrect choices in data structures can result in increased time and resource expenditure during programming endeavors.

&nbsp;

# Type of Data Structures

The key concept to remember is the distinction between linear and non-linear data structures. Linear data structures organize data in a sequential manner, resembling a line: data → data → data. Conversely, non-linear data structures feature relationships between data elements that are not strictly one-to-one.

![](assets/assets/posts/data_structure&time_complexity/images/typeOfDataStructure.png)

<!-- ![](images/typeOfDataStructure.png) -->

&nbsp;

# Algorithm

- An algorithm a sequence of computational steps that transform the input into the output
- An instance of a problem consists of the input needed to compute a solution to the problem
- **An efficient problem-solving process.**

&nbsp;

# Time Complexity

Time complexity serves as a metric for evaluating algorithmic performance, quantifying the execution time relative to input size. In essence, it measures the number of operations executed by an algorithm.

The computational complexity of a function that sums integers from 1 to \( n \) can be expressed as follows:

```cpp
CalcSum(n) {
    int i = 0; // 1 operation
    int sum = 0; // 1 operation

    for(i, i <= n; i++) { // 1 comparison and 1 increment operation per iteration
        sum += sum + i; // 1 operation
    }
    return sum;
}

// Total operations executed: 2 + (n x 3) = 3n + 2
```

This breakdown illustrates that the total number of operations executed is \( 3n + 2 \).

&nbsp;

## Big O Notation

In the analysis above, we derived the time complexity function as \(3n + 2\). However, when expressing the time complexity of a program, we use Big O notation. In Big O notation, only the term with the highest impact on time complexity, denoted by \(n\), is considered. Coefficients in front of \(n\) are simplified to 1, and constant terms are removed. Therefore, the expression simplifies to \(O(n)\).

Here are some representative functions:

![](assets/assets/posts/data_structure&time_complexity/images/bigO.png)

<!-- ![](images/bigO.png) -->

As evident, the time taken by the \( O(N!) \) function increases drastically with larger input datasets. On the other hand, \( O(1) \) represents constant time complexity, meaning it remains unaffected by variations in input size.

### O(1)

Regardless of how big input data are, the funtion always returns result at constant speed.

```cpp
F(int[] n){
    return (n[0] == 0) ? true : false;
}
```

### O(n)

```cpp
F(int[] n){
    for(int i = 0; i < n.length; i++){
        cout << n;
    }
}
```

### O(n^2)

```cpp
F(int[] n){
    for(int i = 0; i < n.length; i++){
        for(int j = 0; j < n.length; j++){
            cout << i + j;
        }
    }
}
```

### O(nm)

```cpp
F(int[] n, int[] m){
    for(int i = 0; i < n.length; i++){
        for(int j = 0; j < m; j++){
            cout << i + j;
        }
    }
}
```

### O(n^3)

```cpp
F(int[] n){
    for(int i = 0; i < n.length; i++){
        for(int j = 0; j < n.length; j++){
            for(int k = 0; k < n.length; k++){
                cout << i + j + k;
            }
        }
    }
}
```

### O(2^n)

```cpp
// Fibonacci Numbers
F(n, r){
    if(n <= 0) return 0;
    else if(n == 1) return r[n] = 1;
    return r[n] = F(n - 1, r) + F(n -2, r);
}
```

### O(log n)

An O(log n) algorithm is a process wherein, each time it is executed, it halves the amount of data.

```cpp
// binary search
F(k, arr, s, e){
    if(s > e) return -1;
    m = (s + s) / 2;
    if(arr[m] == k) return m;
    else if (arr[m] > k) return F(k, arr, s, m-1);
    else return F(k, arr, m+1, e);
}
```
