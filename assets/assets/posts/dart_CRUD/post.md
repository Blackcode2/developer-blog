# Introduction


Before diving into Flutter, I embarked on a mini project to acquaint myself with the Dart language. The project involved creating a basic CRUD (Create, Read, Update, Delete) program that runs on the terminal. The main purpose was to manage a customer list in a shop setting.

For this project, I developed two versions of the CRUD implementation. The first version is the normal version, which provides standard CRUD functionalities to manipulate the customer list. The second version utilizes a linked list structure, offering an alternative approach to accomplish the same tasks.

By working on this mini project, I gained valuable insights into the Dart language and honed my skills in problem-solving and data structure manipulation. It was a rewarding experience that set a solid foundation for my journey into Flutter and more advanced programming endeavors.

&nbsp; 

General Version CRUD GitHub:

https://github.com/Blackcode2/Dart_Practice/tree/main/CRUD_dart/CRUD

Linked list versin CRUD GitHub:

https://github.com/Blackcode2/Dart_Practice/tree/main/CRUD_dart/CRUD_linked%20list

----

&nbsp;

# Goal
* learn Dart language
* use data structure knowelage
----

&nbsp;

# General Version
----

## Menu
In this project, I have created a user-friendly terminal interface with 5 selectable options for managing the customer list:

1. Add new: This option allows you to add new customers to the list.
2. View list: You can view the existing list of customers using this menu.
3. Update list: Easily update or make adjustments to the customer details through this option.
4. Delete: This menu enables you to remove a customer from the list.
5. Exit: When you are done, you can exit the program using this option.

This menu system is designed with a while loop, ensuring a user-friendly experience. If the user mistakenly selects a number that does not correspond to any option on the menu, the while loop will prompt the user to choose again until a valid option is selected.

![](assets/assets/posts/dart_CRUD/images/menu.jpg)

```dart
import 'dart:async';
import 'dart:convert';
import 'dart:io';

void main() async {
    while (true) {
        print('====Customer Managment System====');
        print('1. Add new');
        print('2. View list');
        print('3. Update list');
        print('4. Delete');
        print('5. Exit\n');
        stdout.write('Choose menu by number: ');
		
		String? pick = stdin.readLineSync();
		print(''); /// just for line break
		.
		.
		if(...){
		.
		.
		.
		} else {
		print('Error, try again');
          	continue;
        }
    }
}
```

&nbsp;

### dart:io

**dart:io** is a library support File, socket, HTTP, and other I/O support for non-web applications. Since our project primarily runs on the terminal, the dart:io library becomes a fundamental component.

You see these two lines that dart:io is used.
```dart
stdout.write('Choose menu by number: '); 
String? pick = stdin.readLineSync();  
```

&nbsp;

#### stdout
In Dart, the **stdout.write** method, available in the **dart:io** library, serves a similar purpose as **print()**, but with a notable distinction. While **print()** automatically adds a line break and moves to the next line after displaying the message, **stdout.write** keeps the output on the same line.

&nbsp;

#### stdin
**stdin** represents the standard input stream of the process. Utilizing the **readLineSync** method provided by **stdin**, you can easily read input lines entered by the user.

By using **stdin.readLineSync**, the program can get user's selection. After that, the program figures out what number the user selected with conditional statement.

&nbsp;

#### File
The official document explains deeply about this class.
File class create a new  **File**  object with a pathname to access the specified file on the file system from your program.

```dart
var myFile = File('file.txt');
```

The  **File**  class contains methods for manipulating files and their contents. Using methods in this class, you can open and close files, read to and write from them, create and delete them, and check for their existence.

&nbsp;

##  1. Add new

When the user enters "1" as input, the program's conditional statement recognizes this choice, and the user is prompted to add new customer information. In this process, the user is required to provide three pieces of information: customer ID, name, and age.


![](assets/assets/posts/dart_CRUD/images/addNew1.jpg)


During data entry, the while loop ensures that the program does not move to the next input until valid values are provided. If the user does not leave any input field blank, the while loop halts, and the program prompts for the next input.


Specifically, when entering the age value, there is an additional validation step to confirm that the input is of type "int" since age must be represented as an integer. The **tryParse** method plays a vital role here by converting the **String** value to an **int**, returning null for invalid inputs so that it allows for verification and ensuring that only valid integer age values are accepted.


![](assets/assets/posts/dart_CRUD/images/addNew2.jpg)


Once all the required values are gathered, the program proceeds to create a **File** object instance. Using the **writeAsString** method, the gathered information is then written to the file. It's crucial to note two important factors here: firstly, the mode should be set to append mode, as there might already be an existing file with data. Secondly, the **writeAsString** method is an asynchronous operation, so I use the **await** keyword to ensure the program waits until the writing process is completed before proceeding further.

```dart
if (pick == '1') {
            String? id;
            while (true) {
                stdout.write('ID: ');
                id = stdin.readLineSync();
                if(id != '') break;
                print('Try again.');
            }

            String? name;
            while (true) {
                stdout.write('Name: ');
                name = stdin.readLineSync();
                if (name != '') break;
                print('Try again.');
            }

            String? age;
            while (true) {
                stdout.write('Age: ');
                age = stdin.readLineSync();
                if (age != '' && int.tryParse(age!) != null) break;
                print('Try again.');
            }


            final filename = 'file.txt';
            var file = await File(filename).writeAsString('${id} ${name} ${age}\n', mode: FileMode.append);

            print('\nInformation added!\n');

        }
```

----

&nbsp;

##  2. View list

![](assets/assets/posts/dart_CRUD/images/viewlist.jpg)

When the user inputs "2", the program displays the list of customer information. To achieve this, the program first creates a File object with the path to the text file. It then loads the local text file using the **openRead** method, available from the **dart:io** library. This method reads data from the file asynchronously, returning a **Stream<List<int>>** representing the data as a series of byte lists.


To make the stream readable, I convert the byte lists to UTF-8 and decode them using the **transform()** and utf8.decoder method. **utf8.decoder** method, from the **dart:convert** library, efficiently processes to convert bytes to UTF-8 and then convert it again to String. Additionally, I utilize the LineSplitter utility class, also from dart:convert, to split the multiline string into individual lines for easier handling.


With the help of a for loop, the program awaits each line in the stream, splits it into a list of strings using whitespace as the delimiter, and then prints each line in a properly formatted manner.


To ensure smooth execution, I include a try-catch block to handle any potential errors that may arise during the process, ensuring that the program continues running without disruption.

```dart
else if (pick == '2') {
      //View List

      final file = File('file.txt');
      Stream<String> lines = file
          .openRead()
          .transform(utf8.decoder) // Decode bytes to UTF-8.
          .transform(LineSplitter()); // Convert stream to individual lines.
      try {
        print("ID     Name          Age");
        print("= = = = = = = = = = = = = ");
        await for (var line in lines) {
          List<String> info = line.split(' ');
          print('${info[0]}      ${info[1]}           ${info[2]}');
        }
      } catch (e) {
        print('Error: $e');
      }
      print('');
    }
```

----

&nbsp;

##  3. Update list

![](assets/assets/posts/dart_CRUD/images/update1.jpg)
![](assets/assets/posts/dart_CRUD/images/update2.jpg)


This menu handles customer information updates and changes. To manage this process, I utilize a 2D array, which initially presented a challenge in Dart. Unlike C or C++, Dart requires using the generate constructor to create a 2D array. After some research on Stack Overflow, I successfully implemented the appropriate 2D array structure.

```dart
List.generate(int length, E generator(int index),
    {bool growable = true});

List list = List.generate(3, (_) => 'i'); /// [i, i, i]
```

The program proceeds by opening the local text file and storing its lines in a list. The user then selects the information to be updated based on the customer ID. The program locates and removes the selected information from the 2D list, and the new information is inserted into its place in the list.


To maintain data integrity, when writing to the text file, the program avoids overwriting the original file. Instead, it creates a new file to store the updated information. Although this method may not be the most efficient, it simplifies the process and ensures that specific lines are replaced without complex line deletion.

```dart
List twoDList = List.generate(10, (_) => [], growable: true); // create 10 [] in the list.
      final file = File('file.txt');
      Stream<String> lines = file
          .openRead()
          .transform(utf8.decoder) // Decode bytes to UTF-8.
          .transform(LineSplitter()); // Convert stream to individual lines.

      int count = 0;
      try {
        print("ID     Name          Age");
        print("= = = = = = = = = = = = = ");

        await for (var line in lines) {
          print('\n$line\n');
          twoDList[count] = line.split(' '); // put into 2d list
          count++;
        }
      } catch (e) {
        print('Error: $e');
      }
      //print(twoDList); for debug
      String? pick;
      while (true) {
        stdout.write('Pick by ID: ');
        pick = stdin.readLineSync();
        if (pick != '') break;
        print('Try again.');
      }

      for (int i = 0; i < count; i++) {
        if (pick == twoDList[i][0]) {
          twoDList[i].removeRange(0, 3);

          // update new information
          String? id;
          while (true) {
            stdout.write('ID: ');
            id = stdin.readLineSync();
            if (id != '') break;
            print('Try again.');
          }

          String? name;
          while (true) {
            stdout.write('Name: ');
            name = stdin.readLineSync();
            if (name != '') break;
            print('Try again.');
          }

          String? age;
          while (true) {
            stdout.write('Age: ');
            age = stdin.readLineSync();
            if (age != '' && int.tryParse(age!) != null) break;
            print('Try again.');
          }

          // another way to add in the list
          // twoDList.removeAt(i);
          // twoDList[i].addAll([id, name, age]);

          twoDList[i].add(id);
          twoDList[i].add(name);
          twoDList[i].add(age);

          final filename = 'file.txt';
          int inputCount = 0;
          while (twoDList[inputCount].isNotEmpty) {
            if (inputCount == 0) {
              var file = await File(filename).writeAsString(
                  '${twoDList[inputCount][0]} ${twoDList[inputCount][1]} ${twoDList[inputCount][2]}\n');
              inputCount++; // First line in new file;
            } else {
              var file = await File(filename).writeAsString(
                  '${twoDList[inputCount][0]} ${twoDList[inputCount][1]} ${twoDList[inputCount][2]}\n',
                  mode: FileMode.append);
              inputCount++; // Rest lines are appended.
            }
          }

          print("List is updated!");
          break;
        }
      }
```

----

&nbsp;

##  4. Delete

The deletion logic is similar to the process of updating the list. Firstly, the user selects whether to delete a specific piece of information or all information. If the user chooses to delete a specific piece of information, the program creates a 2D list and loads the text file. Each line from the text file is split into the 2D list using the **split** method. The user then selects the information to be deleted based on its ID, and the corresponding information is removed from the list. Finally, the program rewrites the text file based on the updated information in the list.


![](assets/assets/posts/dart_CRUD/images/delete1.jpg)


On the other hand, if the user chooses to delete all information, the process is straightforward. The program simply rewrites the text file with an empty content, effectively removing all previous data.


![](assets/assets/posts/dart_CRUD/images/delete2.jpg)

```dart
int count = 0;
      String? pick;
      while (true) {
        stdout.write(
            'Delete one person\'s information -> press 1.\nDelete all information -> press 2: ');
        pick = stdin.readLineSync();
        if (pick != '') break;
        print('Try again.');
      }
      if (pick == '1') {
        var twoDList = List.generate(10, (_) => []); //2d list
        final file = File('file.txt');
        Stream<String> lines = file
            .openRead()
            .transform(utf8.decoder) // Decode bytes to UTF-8.
            .transform(LineSplitter()); // Convert stream to individual lines.
        try {
          print("ID     Name          Age");
          print("= = = = = = = = = = = = = ");
          await for (var line in lines) {
            List<String> info = line.split(' ');
            print('${info[0]}      ${info[1]}           ${info[2]}');
            twoDList[count] = line.split(' '); // put into 2d list
            count++;
          }
        } catch (e) {
          print('Error: $e');
        }
        //print(twoDList); for debug
        String? pick;
        while (true) {
          stdout.write('Pick by ID: ');
          pick = stdin.readLineSync();
          if (pick != null) break;
          print('Try again.');
        }
        for (int i = 0; i < 10; i++) {
          if (pick == twoDList[i][0]) {
            twoDList[i].removeRange(0, 3);
            //print(twoDList); for debug
            break;
          }
        }

        final filename = 'file.txt';
        int inputCount = 0;
        for (int i = 0; i < count; i++) {
          if (twoDList[i].isNotEmpty) {
            if (inputCount == 0) {
              var file = await File(filename).writeAsString(
                  '${twoDList[i][0]} ${twoDList[i][1]} ${twoDList[i][2]}\n'); // First line in new file
              inputCount++;
            } else {
              var file = await File(filename).writeAsString(
                  '${twoDList[i][0]} ${twoDList[i][1]} ${twoDList[i][2]}\n',
                  mode: FileMode.append);
              // Rest lines are appended.
            }
          } else {
            continue;
          }
        }
        print("List is updated!");
      } else if (pick == '2') {
        final filename = 'file.txt';
        var file = await File(filename).writeAsString('');
        print('Deleted all information');
      } else {
        print('Try again!');
      }
```

----

&nbsp;

##  5. Exit

Exit program

![](assets/assets/posts/dart_CRUD/images/exit.jpg)

```dart
exit(0);
```
----

&nbsp;

# Linked List CRUD

Upon completing the initial version of CRUD, I recognized a need for enhancement. The code structure of the first version appeared somewhat convoluted, prompting me to pursue a more streamlined approach and code reuse. To achieve these objectives, I ventured into the realm of Object-Oriented Programming (OOP). Concurrently, I adopted the concept of a linked list, a topic I had learned from a lecture. This combination aimed to imbue the project with a simpler, more organized structure, thereby aligning with best coding practices and enabling greater code efficiency.

&nbsp;

# What is Linked List?


A linked list comprises a sequence of nodes, each composed of two essential components. The first is a storage area that holds the data, while the second is a pointer that indicates either the preceding or succeeding node. 

## Single linked list

In a single linked list, the pointer exclusively points to the next node. 

![](assets/assets/posts/dart_CRUD/images/Singlelinkedlist.png)
Sorce: https://www.geeksforgeeks.org/what-is-linked-list/


## Double linked list

In contast, a double linked list introduces an additional pointer space to connect both the previous and next nodes.

![](assets/assets/posts/dart_CRUD/images/Doublylinkedlist.png)
Sorce: https://www.geeksforgeeks.org/what-is-linked-list/

## Circular linked list

 A circular linked list shares similarities with the single linked list, but distinctively, the final node directs back to the initial node.

 &nbsp;

![](assets/assets/posts/dart_CRUD/images/Circularlinkedlist.png)
Sorce: https://www.geeksforgeeks.org/what-is-linked-list/


The notable advantage of using linked lists lies in their variable size. Moreover, their capacity for seamless data addition and removal contributes to their selection. This very flexibility and ease of manipulation aligns perfectly with my decision to adopt linked lists. Given that users of this CRUD program frequently insert or delete customer information, linked lists significantly enhance the efficiency of such operations.

&nbsp;

## Intro

```dart
void main() async{
    final Set<String> idSet = {};
    int globalCount = 0;
    final customerList = new LinkedList<Customer>(); //create linked list that is going to have customers information
    globalCount = await readFile(new File('file.txt'), idSet, globalCount, customerList);  
```

First and foremost, this program operates asynchronously for saving and loading data, as indicated by the placement of the **async** keyword after **main**.

Set collection serves a similar purpose to an array; however, it introduces a distinct characteristic – it disallows the presence of duplicate data. Leveraging a Set variable is pivotal in ensuring the prevention of duplicate IDs for users.

The variable **globalCount** serves the purpose of tallying the total number of entries present within the file or list.

**customerList** functions as a linked list that accommodates instances of the **Customer** class as its elements. The convenience of the **dart:collection** library lies in its provision of a doubly linked list structure, negating the necessity of constructing the linked list from scratch. A crucial detail is that the `Customer` class extends **LinkedListEntry<EntryItem>** because the library's **LinkedList** mandates elements that inherit from the **LinkedListEntry** class.

The **Customer** class encompasses three fields: **id**, **name**, and **age**. It also encompasses a method that returns these fields.

```dart
import 'dart:collection';

final class Customer extends LinkedListEntry<Customer> {
  String id;
  String name;
  String age;

  Customer(this.id, this.name, this.age);

  String toString() {
    return '$id\t\t$name\t\t$age';
  }
}
```

Upon program initiation, the **readFile** function is invoked. If a file already exists, this function is responsible for loading the file's content, subsequently splitting each line and placing it into a temporary list. Simultaneously, the **globalCount** variable increments for each information entry within the file. In parallel, instances of the **Customer** class are generated using the loaded data from the file, subsequently incorporated into the **customerList**. As part of this process, each **id** field is added to a **Set** collection variable, thus ensuring avoidance of duplicate entries.

Conversely, in the absence of an existing file, the function's role involves the creation of a new file.

```dart
Future<int> readFile(
    final file, Set<String> idSet, int globalCount, final customerList) async {
  try {
    if (await file.exists()) {
      Stream<String> lines = file
          .openRead()
          .transform(utf8.decoder) // Decode bytes to UTF-8.
          .transform(LineSplitter()); // Convert stream to individual lines.
      try {
        await for (var line in lines) {
          List<String> lineSplit = line.split(' ');

          globalCount++;
          customerList.add(Customer(lineSplit[1], lineSplit[2], lineSplit[3]));
          idSet.add(lineSplit[1]);
        }
      } catch (e) {
        print('Error: $e');
        exit(0);
      }
    }
    await file.create();
  } on IOException catch (e) {
    print('Error: $e');
    exit(0);
  }

  return globalCount;
}
```
----

&nbsp;

##  1. Add new

![](assets/assets/posts/dart_CRUD/images/addNew_linked.jpg)

When a user opts to add new information, the **writeFile** function comes into play. This function is designed to compile data and subsequently save it onto a file. 

```dart
globalCount = await writeFile(
          'file.txt', getInput(idSet, "new"), globalCount, customerList);
```

A pivotal aspect is that this function receives a callback function, **getInput**, as a parameter. The role of **getInput** revolves around acquiring user input for customer information. Notably, this function accepts a **String** parameter named **mode**. This parameter is decisive in determining whether the user is inputting new customer information or updating existing information. 

The rationale behind this distinction is that an ID, once generated, remains unchanged until it's deleted. As a means of ID generation, the **Random** class from the **dart:math** library is employed. Newly created IDs are incorporated into a **Set** variable. Subsequently, a comparison is conducted between the previous and current lengths of the **Set** variable, ensuring the absence of duplicate IDs. Ultimately, the **getInput** function yields inputs in the form of a list.


```dart
// mode is to identify if it is for adding new informatin or updating information.
// If this funtion is called for update, there is no need to generate new ID.
List<String> getInput(Set<String> idSet, String mode) {
  if (mode == "new") {
    // this mode is form new information
    // create random num for ID
    int id = 0;
    final random = new Random();
    int preIdSetLength = idSet.length;

    // Set does not allow same value so comparing the previous and current length is way to check duplicate.
    while (true) {
      id = random.nextInt(1000) +
          1; // assume that this program can save 1000 customers' information.
      idSet.add(id.toString());
      if (preIdSetLength < idSet.length) break;
    }

    String? name;
    while (true) {
      stdout.write('Name: ');
      name = stdin.readLineSync();
      if (name != '') break;
      print('Try again.');
    }
    String? age;
    while (true) {
      stdout.write('Age: ');
      age = stdin.readLineSync();
      if (age != '' && int.tryParse(age!) != null) break;
      print('Try again.');
    }

    return [id.toString(), name!, age];
  } else if (mode == "update") {
    // when user selects '3. Update list'. There is no new ID input because ID should be same.
    String? name;
    while (true) {
      stdout.write('Name: ');
      name = stdin.readLineSync();
      if (name != '') break;
      print('Try again.');
    }
    String? age;
    while (true) {
      stdout.write('Age: ');
      age = stdin.readLineSync();
      if (age != '' && int.tryParse(age!) != null) break;
      print('Try again.');
    }

    return ['0', name!, age];
  }

  return ['Error'];
}
```

Following this, the **writeFile** function harnesses the returned values from the **getInput** function, saving them both onto a file and incorporating them into the linked list. Then, this function returns **globalCount**.

```dart
Future<int> writeFile(final filename, List<String> inputs, int globalCount,
    final customerList) async {
  var file = await File(filename).writeAsString(
      '${++globalCount} ${inputs[0]} ${inputs[1]} ${inputs[2]}\n',
      mode: FileMode.append);
  customerList.add(Customer(inputs[0], inputs[1], inputs[2]));
  return globalCount;
}
```
----

&nbsp;

##  2. View list

![](assets/assets/posts/dart_CRUD/images/viewlist_linked.jpg)

To present the current customer information, I've established a function that takes a linked list as its parameter.

In this program, the linked list plays a pivotal role. When users seek to view information, the program draws data from the linked list, thus eliminating the need to reload the file repeatedly. This stands in stark contrast to the initial version.

The showFile function relies on a for-in loop statement. This loop method iterates through the linked list, effectively extracting and displaying the fields of each individual Customer instance via the toString method. 

```dart
void showFile(LinkedList<Customer> customerList) {
  int count = 1;
  print('No.\t ID\t\tName\t\tAge');
  print('-----------------------------------------------------');
  for (var customer in customerList) {
    print('${count++}\t|${customer}');
  }
  print('');
}
```
----

&nbsp;

##  3. Update list

![](assets/assets/posts/dart_CRUD/images/delete_linked1.jpg)

When a user seeks to update or modify the file, the program initiates a check on the length of the linked list. In case of absence of any elements, the program issues a notification of zero information availability. However, if elements do exist, the **updateFile** function is engaged.

```dart
else if (pick == '3') {
    if (customerList.length == 0) {
      print('There is no information to update.\n');
      continue;
    }
    await updateFile('file.txt', customerList, idSet, globalCount);
}
```

Within the **updateFile** function, user engagement involves the selection of the entry to be modified via a designated number. Initially, I contemplated an ID-based approach similar to a Map for specific information extraction. However, upon recognizing its associated inefficiencies, I pivoted towards using user-selected numbers as index identifiers.

The **getInput** function, operating in update mode, empowers users to provide revised name and age inputs—excluding the ID, as it remains constant from creation until deletion. Subsequently, user-driven updates are seamlessly integrated into the linked list. This updated list is then preserved through the activation of the **rewriteFile** function, ensuring that the user-induced changes are effectively stored.

```dart
Future<void> updateFile(final filename, LinkedList<Customer> customerList,
    Set<String> idSet, int globalCount) async {
  showFile(customerList);
  String? pick;
  while (true) {
    print('0: back to Menu');
    stdout.write('Choose No. which you want to change information: ');
    pick = stdin.readLineSync();

    if (pick != null && int.parse(pick) <= globalCount) {
      print('');
      break;
    }
    print('Pick No. or 0!');
  }
  if (pick == '0') {
    return null;
  }

  List<String> updateInput = getInput(idSet, "update");
  customerList.elementAt(int.parse(pick) - 1).name = updateInput[1];
  customerList.elementAt(int.parse(pick) - 1).age = updateInput[2];
  await rewriteFile(filename, customerList);

  print('File is updated!');
  showFile(customerList);
}
```

The **rewriteFile** function is tailored for the update functionality. This distinct function diverges slightly from **writeFile**. While **writeFile** exclusively functions in append mode, **rewriteFile** is designed to overwrite a specific line within the file and subsequently append the remaining lines.

```dart
Future<void> rewriteFile(
    final filename, LinkedList<Customer> customerList) async {
  int count = 0;
  int countForFile = 1;
  for (int i = 0; i < customerList.length; i++) {
    if (count == 0) {
      var file = await File(filename).writeAsString(
          '${countForFile++} ${customerList.elementAt(i).id} ${customerList.elementAt(i).name} ${customerList.elementAt(i).age}\n');
      count++;
    } else {
      var file = await File(filename).writeAsString(
          '${countForFile++} ${customerList.elementAt(i).id} ${customerList.elementAt(i).name} ${customerList.elementAt(i).age}\n',
          mode: FileMode.append);
    }
  }
}
```

While reviewing this code, an epiphany dawned upon me: the possibility of merging the **rewriteFile** function into the existing **writeFile** function. This can be accomplished by introducing a parameter that serves as a key to discern between the various operational modes.

&nbsp;

##  4. Delete


Users are afforded the choice to either delete a single piece of information or the entire dataset. In the event of a single-entry deletion, users select the specific piece via its ordinal number. Once validated, this chosen index becomes the basis for element removal through the utilization of the **remove** method. Consequently, the **rewriteFile** function is triggered to ensure the updated list is saved.

![](assets/assets/posts/dart_CRUD/images/delete_linked1.jpg)

![](assets/assets/posts/dart_CRUD/images/delete_linked2.jpg)

In the case of an entire dataset deletion, simplicity prevails. The **remove** method efficiently clears every entry within the linked list. For file deletion, the **File** class is equipped with its own **delete** method, facilitating the removal of the entire file.

```dart
Future<void> deleteFile(
    final filename, LinkedList<Customer> customerList, int globalCount) async {
  String? pick;
  while (true) {
    print('0: Back to menu');
    print('1: delete one line of information.');
    print('2: delete whole lines of information witn the file');
    stdout.write('Pick: ');
    pick = stdin.readLineSync();

    if (pick == '1') {
      if (customerList.length == 0) {
        print('\nThere is no information to delete.\n');
        continue;
      }
      showFile(customerList);
      String? deletePick;
      while (true) {
        stdout.write('Choose No. which you want to delete: ');
        deletePick = stdin.readLineSync();

        if (deletePick != '' &&
            int.tryParse(deletePick!) != null &&
            int.parse(deletePick) <= globalCount) {
          print('');
          break;
        }
        print('Pick No.!');
      }
      customerList.remove(customerList.elementAt(int.parse(deletePick) - 1));
      await rewriteFile(filename, customerList);
      print('The information is deleted!');
      showFile(customerList);
      break;
    } else if (pick == '2') {
      customerList.clear();
      await File(filename).delete();
      break;
    } else if (pick == '0') {
      break;
    }
    print('Wrong! Pick No.!');
  }
}
```
----

&nbsp;

#  Conclusion

During the execution of this mini project, I underwent a significant familiarization process with the Dart language. This experience enabled me to proficiently manage File I/O operations using Dart. Moreover, it bestowed upon me the capability to devise logical structures for enhanced efficiency.

One of the most invaluable takeaways from this endeavor is the skill of refactoring. Upon the completion of the initial version of CRUD, I sensed a need for reorganization and proceeded accordingly. Surprisingly, even as I embarked on this project review, I recognized that the **globalCount** variable and the **rewriteFile** function could be omitted. **globalCount** could be seamlessly substituted with the linked list's length, and the **rewriteFile** function could be integrated into **writeFile**. This revelation underscores the importance of periodic code review, reinforcing the notion that constant reevaluation is crucial to the evolution of coding skills.

