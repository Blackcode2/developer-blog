# Synchronous Vs Asynchronous

Synchronous execution involves completing tasks one by one in a sequential order. For instance, consider a household chore list that includes vacuuming, which takes 1 hour, and doing laundry, which takes 2 hours. When performed synchronously, you would begin with laundry and only move on to vacuuming once laundry is completed. This method would consume a total of 3 hours, which is an inefficient use of time.

On the other hand, asynchronous execution allows you to proceed with other tasks even if a previous task is not yet finished. For example, as soon as you start the laundry machine, you can commence vacuuming your house without waiting for the laundry to complete. This way, you can finish all the tasks in just 2 hours, making more efficient use of your time.

&nbsp;

# Future

A "Future" in Dart and Flutter is essentially a representation of an asynchronous operation's result. It acts as a container that can hold either data or an error, depending on what's requested from the future.

Here's an example that illustrates how a **Future** works. Imagine you have a **Future<String>** box that will eventually return either a string or an error. You need to handle both scenarios. When the data (string) is available, you can use the **then** method, and the parameter **value** will contain the data for further processing. Conversely, if the **box** encounters an error, you can handle it using the **catchError** method.

```dart
import 'dart:async';

Future<String> lundryStart() {
  // assume that lundry takes 2 hours to finish.
  return Future<String>.delayed(Duration(seconds: 2), () {
    return 'Lundry is finished.';
  });
}

void main() {
  // lundry variable will have String in the future(after 3 seconds).
  Future<String> lundry = lundryStart();

  lundry.then((value) {
    // the lundry is completed successfully.
    print(value);
  }).catchError((error) {
    // there is some problem.
    print('error: $error');
  });

  print('Vacuuming starts!');
  print('Vacuuming is done.');
}
```
```
Vacuuming starts!
Vacuuming is done.
Lundry is finished.
```

If there is no future for asynchronous and the program works in synchronous, vacuuming can start after laundry is done.

```
Lundry is finished.
Vacuuming starts!
Vacuuming is done.
```

&nbsp;

# async / await

Functions that use the **await** keyword must be marked as **async**, and they should return a **Future**.

```dart
Future functionName() async {
  ...
  await futureFunction();
  ...
}
```
## Why using these?

1. In asynchronous operations, there are situations where the program needs to pause until a specific task is completed. This is where the **await** keyword comes into play, allowing the program to pause execution until the asynchronous function is finished.

2. They help improve code readability, especially in situations where the **then** method might become nested and less clear. 

```dart
Future<SomeClass> futureFunction() {
  return firstFunction().then((firstValue){
    return secondFunction(firstValue);
  }).then((secondValue){
    return SomeClass(secondValue);
  })
}
```

```dart
Future<SomeClass> futureFunction() async {
  final firstValue = await firstFunction();
  final secondValue = await secondFunction(firstValue);
  return SomeClass(secondValue);
}
```