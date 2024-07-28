In Flutter, **state** refers to data that leads to changes in the UI. These changes can be categorized into two types: application-level data and widget-level data.

<!-- ![](assets/assets/blogs/flutter-state/images/widget-tree.jpg) -->
![](assets/assets/posts/flutter_state/images/widget-tree.jpg)

&nbsp; 

**Stateless Widget:**

A stateless widget represents a UI component whose state remains constant. Once attributes like color, size, or text are defined for a widget, they remain unaltered until the widget is rebuilt. In Flutter, the UI is represented through three distinct structures that form separate trees.

&nbsp; 

**Widget Tree:**

The widget tree is constructed based on the code written. It serves as a blueprint or instruction set. For instance, if the widget tree specifies "Create a green container with a size of 10", an instance is generated based on this directive. The widget tree is immutable and maintains a one-to-one correspondence with the element tree.

&nbsp; 

**Element Tree:**

The element tree is mutable and functions as an object. It performs two key tasks: monitoring the state of the widget tree and managing the lifecycle of the render object tree. Similar to a pointer in languages like C, the element tree references the widget tree. It also stores information about attributes such as location, size, and color. The element tree observes changes in the widget tree's state, as the widget tree itself is immutable. In essence, the element tree acts as a bridge connecting the widget tree and the render tree.

&nbsp; 

**Render Tree:**

The render tree's primary role is to render and draw the screen. Unlike the previous two trees, the render tree is mutable. When Flutter renders the screen, it consults the render object tree rather than the widget tree.

&nbsp; 

**Performence in Flutter**

Flutter ensures high performance by avoiding a complete rebuild of every tree when the widget tree's state changes. Instead, if a widget changes while retaining its position and type, a new link is established with the existing element tree. The element tree then communicates the altered information to the render tree, which subsequently redraws only the modified components.

<!-- ![](assets/assets/blogs/flutter-state/images/reload.jpg) -->
![](assets/assets/posts/flutter_state/images/reload.jpg)

&nbsp; 

**Stateful Widget:**
A stateful widget comprises two classes: the stateful widget class itself and the state class. This division exists because the stateful widget extends the immutable widget class. However, the stateful widget needs to manage mutable data. To address this, the state class is introduced, allowing for the management of mutable attributes. 

**State** class employs generics to establish a connection with the **StatefulWidget**. On the other hand, **StatefulWidget** utilizes the **createState** method to return **State** and establish a connection with the **State** class.


```dart
import 'package:flutter/material.dart';

class name extends StatefulWidget {
  const name({super.key});

  @override
  State<name> createState() => _nameState();
}

class _nameState extends State<name> {
  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
```