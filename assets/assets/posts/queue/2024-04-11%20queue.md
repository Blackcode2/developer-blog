# What is a Queue?

A Queue is a fundamental data structure characterized by its FIFO (First-In, First-Out) nature. Essentially, it operates as a reversed version of a stack. The first data item to be added is the first one to be removed. Visualize it as a line at a busy restaurant: the person who arrived first is served first, while those who joined later must wait in line until their turn comes. Similarly, a queue mirrors real-life scenarios where order matters.

&nbsp;

# Understanding Queue Operations

In a queue, the data at the front is referred to as the "front," while the data at the rear is termed the "rear." The primary operations in a queue are "enqueue" and "dequeue."

- **Enqueue:** This operation involves adding new data to the queue. The first data added becomes both the "front" and "rear" of the queue. Subsequent data additions shift the "rear" position to the newly added item.

- **Dequeue:** In this operation, the data at the front of the queue is removed first. The next data in line then becomes the new "front." If only one data item remains in the queue after a dequeue operation, it occupies both the "front" and "rear" positions.

![](assets/assets/posts/queue/images/queue.png)

<!-- ![](images/queue.png) -->

&nbsp;

# Implementing a Queue: Three Approaches

According to the book I'm referring to, there are three methods for implementing a queue: array queue, circular array queue, and linked queue. Let's delve into each method:

### 1. Array Queue

In an array queue, the queue elements are stored in a fixed-size array. Elements are added to the rear end and removed from the front end of the array.

### 2. Circular Array Queue

Similar to the array queue, a circular array queue also stores elements in an array. However, it uses a circular arrangement, allowing efficient space utilization and continuous operation.

### 3. Linked Queue

In a linked queue, the queue elements are stored as nodes in a linked list. Each node contains the data and a pointer to the next node, forming a linear sequence. This method offers dynamic memory allocation and efficient insertion and deletion operations.

These three approaches offer different trade-offs in terms of memory usage, performance, and ease of implementation, catering to various application requirements.

&nbsp;

# Array Queue

### Node

Node is a basic unit that stores data. There is no need a poniter variable for link.

```cpp
template <typename T>
struct ArraryQueueNode {
	T data = NULL;
};
```

&nbsp;

### Arrary Queue Class

The crucial aspect here lies in initializing the variables 'front' and 'rear' with -1. This initialization plays a pivotal role in the 'enqueue' and 'dequeue' methods. These initializations are essential because they signify that the queue is empty. When 'front' and 'rear' are both -1, it indicates that there are no elements in the queue. Subsequently, during the 'enqueue' and 'dequeue' operations, these variables are updated accordingly to manage the queue's state.

```cpp
template <typename T>
class ArrayQueue {
private:
	int maxCount;
	int currentCount = 0;
	int front = -1;
	int rear = -1;
	ArraryQueueNode<T>* pData; // array pointer

public:
...
}
```

&nbsp;

### Constructor

This class need a constructor to iniialize a dynamic array.

```cpp
ArrayQueue(int size)
	:maxCount{ size } {
	pData = new ArraryQueueNode<T>[size];
}
```

&nbsp;

### Enqueue

The 'rear' variable always denotes the index of the last node in the queue. Consequently, when you add new data, its position should be the index immediately following the rear, which is `rear + 1`. But what if there's no data in the queue and you attempt to add new data? In this scenario, the value of 'rear' is -1, causing `rear + 1` to evaluate to 0. This is precisely why we initialize the 'rear' variable as -1.

```cpp
void enqueue(T data) {

	if (!isFull()) {
		this->rear++;  // Move 'rear' to the next index
		this->pData[this->rear].data = data;  // Add data at the new 'rear' position
		this->currentCount++;  // Update the count of elements
	}
	else {
		std::cout << "Queue is full!\n";
	}
}
```

&nbsp;

### isFull

Then until when can we keep adding new data? It is when the arrary is full. We can know this if...

```cpp
currentCount == maxCount
// or
rear == maxCount - 1
```

```cpp
bool isFull() {
	int ret = false;

	if (this->currentCount == this->maxCount || this->rear == this->maxCount - 1) {
		ret = true;
	}
	return ret;
}
```

&nbsp;

### Dequeue

The dequeue method manipulates the 'front' variable, which does not directly indicate the first data in the queue; rather, it points to the position before the first data. Initialized with -1, the 'front' variable needs to be incremented to dequeue the first data. While I followed the description from a book, I guess there is no problem with initializing it to 0 and incrementing it after each dequeue operation would achieve the same result.

```cpp
void dequeue() {
	if (!isEmpty()) {
		this->front++;
		this->pData[this->front].data = NULL;
		this->currentCount--;
	}
	else {
		std::cout << "queue is empty\n";
	}
}
```

&nbsp;

### isEmpty

```cpp
bool isEmpty() {
	int ret = false;
	if (this->currentCount == 0) {
		ret = true;
	}
	return ret;
}
```

&nbsp;

### peek

The index should be 'front + 1'.

```cpp
T peek() {
	if (!isEmpty()) {
		return this->pData[this->front+1].data;
	}
	else {
		std::cout << "queue is empty\n";
	}
}
```

&nbsp;

### Print

```cpp
void print() {
	std::cout << "size: " << this->maxCount << " Number of nodes: " << this->currentCount << std::endl;
	for (int i = 0; i < this->maxCount; i++) {
		std::cout << "[" << i << "] - " << this->pData[i].data << std::endl;
	}
}
```

&nbsp;

### Destructor

```cpp
~ArrayQueue() {
	delete []this->pData;
}
```

&nbsp;

# Circular Array Queue

The problem with the array queue is that it leaves empty spaces in the queue after the dequeue process, preventing new data from being added even when there are available slots. This inefficiency prompted the development of the circular queue. While it still employs an array, it establishes a logical connection between the front and rear indices. This connection is achieved through the use of the modulo operator.

```cpp
rear = (rear + 1) % maxCount;
```

Look at the picture below. There is a queue with a size of four. The index of the front is 3, and the rear is 4. In a regular queue, adding new data would be cumbersome and inefficient. However, by utilizing the modulo operator, the process becomes streamlined. The modulo operation for the rear index divided by the maximum count (4) yields 0. This allows new data to be added easily to the empty slots in the queue.

![](assets/assets/posts/queue/images/circular-queue.png)

<!-- ![](images/circular-queue.png) -->

&nbsp;

For the node and class member variables, the circular array queue doesn't differ significantly from the array queue. I've simply renamed the struct and class to 'CircularArrayQueueNode' and 'CircularArrayQueue'.

### enqueue

The only thing changed here is to set the 'rear' with yields.

```cpp
void enqueue(T data) {
	if (!isFull()) {
		this->rear = (this->rear + 1) % this->maxCount;
		this->pData[this->rear].data = data;
		this->currentCount++;
	}
	else {
		std::cout << "queue is full!\n";
	}
}
```

&nbsp;

### isFull

Previously, we used two conditions to determine if a queue was full. However, in a circular queue, simply comparing the 'rear' value to 'maxCount' may not accurately reflect the fullness of the queue, as there could still be empty spots between 'rear' and 'front'. Therefore, in the circular queue, we only need to check one condition.

```cpp
// conditions for a array queue
this->currentCount == this->maxCount || this->rear == this->maxCount - 1
```

```cpp
bool isFull() {
	int ret = false;
	if (this->currentCount == this->maxCount) {
		ret = true;
	}
	return ret;
}
```

&nbsp;

### dequeue

This is same as the enqueue process. The only thing changed here is to set the 'front' with yields.

```cpp
void dequeue() {
	if (!isEmpty()) {
		this->front = (this->front + 1) % this->maxCount;
		this->pData[this->front].data = NULL;
		this->currentCount--;
	}
	else {
		std::cout << "queue is empty\n";
	}
}
```

&nbsp;

### peek

When peeking at the front element of the queue in a circular queue, we still need to use the modulo operator to ensure we're accessing the correct index. However, instead of modifying the value of 'front', we assign the index to another variable to avoid altering 'front' itself.

```cpp
T peek() {
	int forntForpeek = (this->front + 1) / this->maxCount;
	if (!isEmpty()) {
		return this->pData[forntForpeek].data;
	}
	else {
		std::cout << "queue is empty\n";
	}
}
```

&nbsp;

# Linked Queue

Although circular queues offer efficiency, their size is fixed, limiting the number of elements they can hold. To address this constraint, linked queues utilize pointers. The key distinction lies in the use of pointer variables for both front and rear elements, allowing for dynamic memory allocation and flexible resizing.

&nbsp;

### Linked Queue Node

There is a variable can store data and a pointer variable for link to the next node.

```cpp
template <typename T>
struct LinkedQueueNode {
	T data;
	LinkedQueueNode<T>* pLink = nullptr;
};
```

&nbsp;

### Linked Queue Class

```cpp
template <typename T>
class LinkedQueue {
private:
	int currentCount = 0;
	LinkedQueueNode<T>* pFront;
	LinkedQueueNode<T>* pRear;
public:
// method...
}
```

&nbsp;

### Enqueue

The process of adding new data to a linked queue involves an additional step that varies depending on whether the queue is empty or already contains data. If the queue is empty, the process is straightforward: the new node becomes both the front and the rear of the queue. However, if data already exists in the queue, the rear variable should points the new node.

```cpp
void enqueue(T data) {
	LinkedQueueNode<T>* pNode = new LinkedQueueNode<T>;
	pNode->data = data;

	if (!isEmpty()) {
		this->pRear->pLink = pNode;
		this->pRear = pNode;
	}
	else {
		this->pFront = pNode;
		this->pRear = pNode;
	}
	this->currentCount++;
}
```

&nbsp;

### isEmpty

```cpp
bool isEmpty() {
	bool ret = false;
	if (this->currentCount == 0) {
		ret = true;
	}
	return ret;
}
```

&nbsp;

### Dequeue

The dequeue method in a linked queue involves several steps compared to other queue types:

1. Create a pointer node variable.
2. Store the address of the current front node in the pointer node variable.
3. Set the 'front' variable to point to the link of the current front node.
4. Free the memory allocated to the pointer node variable.

It's important to note that if the number of current nodes becomes zero, you must set the rear variable to 'NULL' or 'nullptr'. This prevents the rear pointer from becoming a dangling pointer.

```cpp
void dequeue() {
	LinkedQueueNode<T>* pNode;
	if (!isEmpty()) {
		pNode = this->pFront;
		this->pFront = pNode->pLink;
		delete pNode;
		this->currentCount--;
		if (this->currentCount == 0) {
			this->pRear = nullptr;
		}
	}
	else {
		std::cout << "queue is empty\n";
	}
}
```

&nbsp;

### peek

```cpp
T peek() {
	if (!isEmpty()) {
		return this->pFront->data;
	}
}
```

&nbsp;

### print

```cpp
void print() {
	std::cout << "Number of nodes: " << this->currentCount << "\n";
	LinkedQueueNode<T>* pNode = this->pFront;
	if (!isEmpty()) {
		while (pNode != nullptr) {
			std::cout << pNode->data << " ";
			pNode = pNode->pLink;
		}
		std::cout << "\n";
	}
}
```

&nbsp;

### Destructor

```cpp
~LinkedQueue() {
	LinkedQueueNode<T>* pNode = this->pFront;
	LinkedQueueNode<T>* pDelNode;
	if (!isEmpty()) {
		while (pNode != nullptr) {
			pDelNode = pNode;
			pNode = pNode->pLink;
			delete pDelNode;
		}
	}
}
```
