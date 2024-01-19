<!-- # <center>Portfolio Bolg</center> -->

&nbsp;

![](assets/assets/posts/portfolio_blog/images/home-page.jpg)

# Introduction

Ever since embarking on my Flutter learning journey, I have delved into the creation of several captivating Flutter projects. However, as time has passed, I've noticed a challenge arising—I began to forget some of the essential concepts and cods I had utilized in those projects. Realizing the importance of preserving my knowledge, I came to a profound realization: the necessity of documentation.

In the midst of my quest for improvement, I stumbled upon an intriguing Instagram post that emphasized the significance of IT developers having a portfolio blog. It became clear to me that such a blog would not only aid in showcasing my work but also serve as a valuable resource for future interviews and personal growth.

Initially, I experimented with GitHub Pages and a Jekyll theme to create my portfolio blog. However, driven by my unwavering enthusiasm for Flutter and my ongoing journey to master it, I made a bold decision to develop my own blog using Flutter itself. This choice not only enabled me to showcase my expanding proficiency in Flutter but also provided a unique opportunity for hands-on learning as I honed my skills.

GitHub link: https://github.com/Blackcode2/portfolio_blog

----

&nbsp;

# Release Note for Flutter Portfolio Blog

<!-- New, Feature, Changed, Fixed, Deprecated -->

----
#### v1.2.0
2024.01.18

**UI**  
* Feature: add UI for phone size screen <br> Fixed: fix pixel overflow on the bottom * menu when screen is phone size 

----
#### v1.1.0
2024.01.18

**UI** 
* Changed: adjust the responsive break points
* Changed: smooth responsive translation
* Changed: adjust padding for home page and mardown contents
* Fiexed: fix pixel overflow in thumbnail card

**Coding Management** 
* Changed: delete repeated code and make it into one widget
* Deprecated: delete unuse packages
* Changed: chaged order of posts by recent

**Markdown**
* Feature: set the block space, codeblock highlight, and font size 
  
**Assets**
* Changed: delete 'blogs' and 'projects' folders and unite them in one folder 'posts'
----

#### v1.0.0
2023.07.30

**Release**
* New: First release of blog |

----

&nbsp;

# Goal
* Build Flutter web
* Learn how to make responsive web
* Host on GitHub Pages

&nbsp;

# Where did I get reference for blog?
The blog that became the reference of my blog referred to vonge theme in Jekyll theme. While initially drawing inspiration from a specific theme, I envision gradually infusing my portfolio blog with a touch of creative flair as I progress.

![](assets/assets/posts/portfolio_blog/images/vonge-theme.jpg)
https://jazzed-kale.cloudvent.net/

&nbsp;

# Responsive Web
----

One of the most challenging aspects of my project was implementing responsive web design for my blog. It was my first time venturing into this territory, and I encountered several hurdles along the way. Initially, I explored using the **LayoutBuilder** class and the **MediaQuery.of()** method to handle different screen sizes and orientations. However, I soon realized that manually creating layouts and designs for each breakpoint would be inefficient and time-consuming.

Thankfully, I found a helpful package called **"responsive_framework"** that simplified the process. It provided tools and utilities specifically designed for creating responsive web designs in Flutter. With this package, I could automatically adapt my blog's layout and design based on the user's screen size and device orientation. It saved me time and ensured a seamless experience for users across different devices. Thanks to "responsive_framework," I successfully overcame the challenges of responsive web design and achieved a polished and user-friendly blog that works well on any device.

![](assets/assets/posts/portfolio_blog/images/responsive_framework.jpg)
https://pub.dev/packages/responsive_framework

&nbsp;

## ResponsiveBreakpoints.builder

To use this package, ResponsiveBreakpoints.builder widget should be added to MaterialApp. Then, I need to define my own breakpoints and labels. I customized two more breakpoints and labes for this project. The screen can be designed differently at every breakpoint now.

```dart
import 'package:flutter/material.dart';
import 'package:responsive_framework/responsive_framework.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Porfolio Blog',
      theme: ThemeData(
      darkTheme: ThemeData(
      builder: (context, child) => ResponsiveBreakpoints.builder(
        child: child!,
        breakpoints: [
          const Breakpoint(start: 0, end: 450, name: MOBILE),
          const Breakpoint(start: 451, end: 925, name: TABLET),
          const Breakpoint(start: 926, end: 1050, name: 'DESKTOP3'),
          const Breakpoint(start: 1051, end: 1200, name: 'DESKTOP2'),
          const Breakpoint(start: 1201, end: 1920, name: DESKTOP),
          const Breakpoint(start: 1921, end: double.infinity, name: '4K'),
        ],
      ),
      home: HomePage(),
    );
  }
}

```

&nbsp;

## ResponsiveValue

This widget assigns a value that corresponds to the active breakpoint determined by the conditions specified in the conditional values. You must put **.value** method the end of the widget so that the values are vaild.

```dart
ResponsiveValue(context, defaultValue: 520.0, 
  conditionalValues: [
    ResponsiveBreakpoints.of(context).equals(name: DESKTOP, value: ),
    ResponsiveBreakpoints.of(context).largerThan(name: MOBILE, value: ),
    ResponsiveBreakpoints.of(context).smallerThan(name: TABLET, value: ),
    ResponsiveBreakpoints.of(context).between(start: MOBILE, end: TABLET, value: ),
  ]).value,
```

Example

```dart
class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Container(
          width:
              ResponsiveValue(context, defaultValue: 520.0, conditionalValues: [
            Condition.smallerThan(name: DESKTOP, value: 400.0),
            Condition.smallerThan(name: 'DESKTOP2', value: 300.0),
            Condition.smallerThan(name: 'DESKTOP3', value: 200.0),
            Condition.smallerThan(name: TABLET, value: 100.0)
          ]).value,
          height: 400,
          color: Colors.blueAccent,
        ),
      ),
    );
  }
}
```
Desktop:
![](assets/assets/posts/portfolio_blog/images/desktop.jpg)

Desktop3:
![](assets/assets/posts/portfolio_blog/images/desktop3.jpg)

Tablet:

![](assets/assets/posts/portfolio_blog/images/tablet.jpg)

&nbsp;

## ResponsiveRowColumn

ResponsiveRowColumn is a convenient widget that combines responsiveness features for organizing rows and columns. The layout, whether it's a row or a column, is determined by passing a ResponsiveRowColumnType. All the responsive widgets should be wrapped by ResponsiveRowColumnItem widget and ResponsiveRowColumnItem widget should be wrapped by ResponsiveRowColumn widget. Also, by using ternary operator, you can switch from Column to Row or Row to Colunm.

```dart
ResponsiveRowColumn(
  layout: ResponsiveRowColumnType.COLUMN,
  children: [
    ResponsiveRowColumnItem(child: Container()),
  ]
)
```
```dart
class Introduction extends StatelessWidget {
  const Introduction({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(0, 120, 0, 110),
      child: ResponsiveRowColumn(
        layout: ResponsiveBreakpoints.of(context).smallerThan('DESKTOP3')
            ? ResponsiveRowColumnType.COLUMN
            : ResponsiveRowColumnType.ROW,
        rowMainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          ...
        ]
      )
    )
  }
```

&nbsp;

## ResponsiveRowColumnItem
All the responsive widgets are wrapped by thist widget. Also, you can hide or show specific widget corresponds to th conditions

* ### ResponsiveVisibility
  This code hides Drawer widget until the screen size is smller than "DESKTOP2". In other word, Drawer is visible when the screen size is smaller then "DESKTOP2" size.

  ```dart
  ResponsiveRowColumnItem(
    child: ResponsiveVisibility(
      visible: false,
      visibleConditions: const [
        Condition.smallerThan(name: 'DESKTOP2')
      ],
      child: EndDrawerButton(
        onPressed: () {
          scaffoldKey.currentState!.openEndDrawer();
        },
      ),
    ),
  ),
  ```
This package actually contains several other useful widgets that are both convenient and surprising. Although I only covered the ones I used, I will explore this package more thoroughly and take notes when I use this package again

&nbsp;

# Pages
----

I have created individual page files for each page, ensuring organized structure. All the components utilized on these pages are located within the 'components' folder. Moreover, essential project fonts and images are stored in the 'assets' folder. Additionally, the 'assets' folder also houses separate folders containing posts for projects and posts, promoting efficient management and accessibility.

![](assets/assets/posts/portfolio_blog/images/libFolder.jpg)

![](assets/assets/posts/portfolio_blog/images/assets.jpg)

&nbsp;

## Home Page

The home page consists of five components: the top navigation bar, introduction section, project section, blog section and the bottom navigation bar. During the design process, I dedicated considerable time to identifying suitable breakpoints for a responsive web layout. However, I believe there is room for further enhancements and fine-tuning to ensure optimal responsiveness and attention to detail.

&nbsp;

### Top navigation bar

The main logo button and page buttons are created using the Text button component. Since these buttons are frequently used, I have implemented custom buttons to ensure consistency and ease of use.

![](assets/assets/posts/portfolio_blog/images/top-navigation-bar.jpg)

The page button is enclosed within a ResponsiveVisibility widget, allowing it to be hidden when the screen size becomes smaller, and instead displaying a Drawer widget. Additionally, this custom button accepts a function parameter for defining the page route, ensuring dynamic and seamless navigation within the application.

```dart
ResponsiveRowColumnItem(
  child: NavigationbarButton(
    label: 'Home',
    onPressed: () {
      Navigator.push(context,
          MaterialPageRoute(builder: (context) => HomePage()));
    },
  ),
),

class NavigationbarButton extends StatelessWidget {
  NavigationbarButton(
      {required this.label, required this.onPressed, super.key});

  late String label;
  late void Function() onPressed;

  @override
  Widget build(BuildContext context) {
    return ResponsiveVisibility(
      hiddenConditions: const [Condition.smallerThan(name: 'DESKTOP2')],
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 15),
        child: TextButton(
            onPressed: () {
              onPressed();
            },
            child: Text(
              label,
              style: Theme.of(context).textTheme.labelMedium,
            )),
      ),
    );
  }
}
```
&nbsp;

The button, which redirects to another website, is implemented using the url_launcher package. It offers a straightforward integration process. To utilize it, I created a new Uri object by parsing a URI string, which was then passed as a parameter to the launchUrl function. Additionally, for asynchronous operation, the await keyword should be added before invoking the function.

![](assets/assets/posts/portfolio_blog/images/github-button.jpg)

![](assets/assets/posts/portfolio_blog/images/launchUrl.jpg)

```dart
final Uri _url = Uri.parse('https://github.com/Blackcode2');


ResponsiveRowColumnItem(
  child: ResponsiveVisibility(
    hiddenConditions: const [Condition.smallerThan(name: 'DESKTOP2')],
    child: MouseRegion(
      cursor: SystemMouseCursors.click,
      child: GestureDetector(
          onTap: () async {
            await launchUrl(_url);
          },
          child: const ImageIcon(
            AssetImage('assets/images/github-mark.png'),
          )),
    ),
  ),
),
```

&nbsp;

### Drawer

The implementation of the Drawer widget posed a minor challenge during this project. I was initially unsure about creating a Drawer widget that could be utilized across all pages. However, after some exploration, I discovered that I could develop a custom drawer widget using GlobalKey or Builder. For this project, I opted to use GlobalKey. From my understanding, a key assigns uniqueness to widgets of the same type, allowing them to be differentiated. I plan to delve deeper into this concept and share my findings in a future post.

![](assets/assets/posts/portfolio_blog/images/drawer.jpg)

Once I created the custom Drawer widget, I established variable for GlobalKey\<ScaffoldState\>. Subsequently, I assigned this key to the key parameter of the Scaffold. This approach enables me to globally control the state of the Scaffold widget through the key. Furthermore, I passed this key as a parameter to the TopNavigationBar widget. As a result, I can now open the Drawer by simply clicking the button within the TopNavigationBar widget.

```dart
class HomePage extends StatelessWidget {
  HomePage({super.key});
  //declare key variable
  final GlobalKey<ScaffoldState> scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: scaffoldKey,
      endDrawer: CustomDrawer(),
```
```dart
// pass key to TopNavigationbar
TopNavigationbar(scaffoldKey: scaffoldKey,)
```
```dart
// you can open Drawer by this code
EndDrawerButton(
  onPressed: () {
    scaffoldKey.currentState!.openEndDrawer();
    // Scaffold.of(context).openDrawer(); when you use Builder instead of Globalkey, this can open it.
  },
),
```

&nbsp;

### Project and blog section

![](assets/assets/posts/portfolio_blog/images/project-section.jpg)
![](assets/assets/posts/portfolio_blog/images/blog-section.jpg)

These sections serve as previews for the projects page and blog page, respectively. Each section includes buttons that redirect users to their respective pages. The content is displayed within cards, showcasing the title and other relevant details. When clicked, the cards open the corresponding post content. To handle this functionality, custom widgets called BlogCardGridView and ProjectCardGridView have been developed. These widgets accept a boolean type parameter to differentiate their usage on the home page or other pages.The purpose behind this distinction is that while the projects and blog pages can display an unlimited number of thumbnail cards, the home page has a constraint that limits the number of cards to be shown.

```dart
class IntroWork extends StatelessWidget {
  const IntroWork({super.key});

  @override
  Widget build(BuildContext context) {
    return ResponsiveRowColumn(
      layout: ResponsiveRowColumnType.COLUMN,
      children: [
        ResponsiveRowColumnItem(
          child: Padding(
            padding: const EdgeInsets.only(bottom: 30),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  "Latest works",
                  style: Theme.of(context).textTheme.bodyLarge,
                ),
                TextButton(
                    onPressed: () {
                      Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => ProjectsPage()));
                    },
                    child: const Row(
                      children: [
                        Text(
                          "View all",
                          style: TextStyle(fontSize: 16),
                        ),
                        Icon(Icons.arrow_forward),
                      ],
                    )),
              ],
            ),
          ),
        ),
        ResponsiveRowColumnItem(
          child: Padding(
            padding: const EdgeInsets.only(bottom: 50),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                SizedBox(
                  width: ResponsiveValue(context,
                      defaultValue: 500.0,
                      conditionalValues: [
                        const Condition.smallerThan(
                            name: 'DESKTOP2', value: 350.0),
                      ]).value,
                  child: BodySmallText(
                      text:
                          'I show only my best works built completely with passion, simplicity, and creativity!',
                      textAlign: TextAlign.left),
                ),
              ],
            ),
          ),
        ),
        ResponsiveRowColumnItem(
          child: ProjectCardGridView(
            isHome: true,
          ),
        ),
      ],
    );
  }
}
```
&nbsp;

## Projects page
----

![](assets/assets/posts/portfolio_blog/images/projects-page.jpg)

The Projects page showcases thumbnail cards for each content. To accomplish this, I employed the GridView.builder widget. The GridView widget offers a gridDelegate property, which can be configured with two different types of delegates.

This gridDelegate property enables me to define the layout of the grid. Specifically, I can choose between two delegate types: SliverGridDelegateWithFixedCrossAxisCount and SliverGridDelegateWithMaxCrossAxisExtent.

&nbsp;

### SliverGridDelegateWithFixedCrossAxisCount

This delegate creates grid layouts with a fixed number of tiles in the cross axis. It does not care how big or small screen size is. It shows a fixed number of items.

Example:
![](assets/assets/posts/portfolio_blog/images/grid-fixed.jpg)
```dart
GridView.builder(
  itemCount: 10,
  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
    crossAxisCount: 4, //fixed number
    childAspectRatio: 1 / 2,
    mainAxisSpacing: 10,
    crossAxisSpacing: 10,
  ),
  itemBuilder: (context, index) {
    return Container(
      color: Colors.amber,
    );
  },
),
```
&nbsp;

### SliverGridDelegateWithMaxCrossAxisExtent

This delegate creates grid layouts with tiles that each have a maximum cross-axis extent.

This delegate will select a cross-axis extent for the tiles that is as large as possible subject to the following conditions:

* The extent evenly divides the cross-axis extent of the grid.
* The extent is at most maxCrossAxisExtent.

This is the description from official document.
https://api.flutter.dev/flutter/rendering/SliverGridDelegateWithMaxCrossAxisExtent-class.html

Example:
![](assets/assets/posts/portfolio_blog/images/grid-max.jpg)
```dart
GridView.builder(
  itemCount: 10,
  gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
    maxCrossAxisExtent: 150, 
    childAspectRatio: 1 / 2,
    mainAxisSpacing: 10,
    crossAxisSpacing: 10,
  ),
  itemBuilder: (context, index) {
    return Container(
      color: Colors.amber,
    );
  },
),
```

For this project, I utilized the SliverGridDelegateWithMaxCrossAxisExtent delegate within the GridView.builder widget. The reason behind this choice was to ensure consistent card sizes across various screen dimensions.

By using SliverGridDelegateWithMaxCrossAxisExtent, I was able to specify the maximum extent (width) of each card within the grid. This approach enabled me to maintain uniformity and present the same card size regardless of the screen size.

&nbsp;

## Markdown and Metadata
----

During the planning phase of this web project, I decided to utilize markdown files for the posts. Thankfully, I discovered a Flutter package specifically designed for handling markdown. However, the most significant challenge I faced was twofold: firstly, how to showcase the metadata for each thumbnail card, and secondly, how to efficiently load the markdown files.

As a first step, I created separate folders for project and blog within the assets directory. Each of these folders further contained individual subfolders for respective posts. However, a challenge arose when it came to loading the file paths dynamically.

![](assets/assets/posts/portfolio_blog/images/assets.jpg)
![](assets/assets/posts/portfolio_blog/images/assets-blog.jpg)

To tackle this issue, I discovered that implementing a solution required the utilization of the FutureBuilder widget and the AssetBundle object. By leveraging the FutureBuilder widget, I was able to asynchronously load and retrieve the file paths. Additionally, the AssetBundle object played a crucial role in accessing and managing the assets within the application.

**rootBundle** refers to an instance of the **AssetBundle** class that represents the bundle of assets available to the application at runtime. The **rootBundle** is automatically created and initialized by the Flutter framework, and it allows you to load and access assets using their relative paths within the app's asset directory. 
```dart
rootBundle.loadString('path for file'),
```

However, I encountered a second challenge during the development process. I needed to load the list of subfolders within the projects and posts directories. Initially, I assumed that by loading the top-level folder, I would be able to retrieve the names of all the subfolders. Unfortunately, this approach did not yield the desired results.

```dart
FutureBuilder(
      future: rootBundle.loadString('assets/projects/'),
// I tought I can load list of subfolder in this way, but It was not.
```

In search of a solution, I attempted to use the getDirectoryPath() function from the file_picker package. Regrettably, I encountered an obstacle as this particular API did not function correctly in the web environment. As a result, I had to explore alternative approaches to overcome this limitation and achieve the desired functionality.

Despite the setback with the getDirectoryPath() function, I persisted in finding an effective solution for retrieving the list of subfolders. Through thorough research and experimentation, I identified a workaround that enabled me to access and obtain the names of the subfolders.

To overcome the challenge, I devised a solution by creating a JSON file that contained information about the subfolders and corresponding markdown file names within the top folder. In this JSON file, each subfolder name served as the key, and the associated markdown file name acted as the value.

![](assets/assets/posts/portfolio_blog/images/projects-folder.jpg)

![](assets/assets/posts/portfolio_blog/images/projects-list.jpg)

Upon loading this JSON file, I decoded the snapshot data and organized it into a two-dimensional list. This list structure allowed for easy handling and processing of the data. Subsequently, each element from the list was passed as a parameter to a custom card widget.

```dart
class ProjectCardGridView extends StatelessWidget {
  ProjectCardGridView({required this.isHome, super.key});

  late bool isHome;
  int fileCount = 0;
  List jsonList = [];
  late Map<String, dynamic> jsonData;

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: rootBundle.loadString('assets/projects/projects_list.json'),
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const Center(
            child: CircularProgressIndicator(),
          );
        } else if (snapshot.hasData) {
          jsonData = jsonDecode(snapshot.data!);
          jsonData.forEach((key, value) {
            jsonList.add([key, value]);
            // jsonList[n][0] is project folder name
            // jsonList[n][1] is markdown file name
          });

          fileCount = jsonData.length;
          if (fileCount < 6) {
            isHome = false;
          }
          return GridView.builder(
              shrinkWrap: true,
              gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
                maxCrossAxisExtent: 480,
                mainAxisSpacing: 14,
                crossAxisSpacing: 14,
                childAspectRatio: 3.8 / 4,
              ),
              itemCount: isHome ? 6 : fileCount,
              itemBuilder: (context, index) {
                return ProjectCard(dataList: jsonList[index]); // pass to card widget
              });
        }
        return const Center(
          child: Text('Can not laod data'),
        );
      },
    );
  }
}
```

Within each post folder, several essential components are present, including a markdown file, an images folder, and a metadata JSON file. The markdown file contains the main content of the post, while the images folder stores any associated images used within the post. The metadata JSON file holds crucial information that will be displayed on the thumbnail card for each post.

The metadata file contains key items that contribute to the thumbnail card's presentation. This includes details such as the post's title, description, author, date, or any other relevant information to provide a concise overview of the post's content.

![](assets/assets/posts/portfolio_blog/images/metadata.jpg)

Within the application, I have implemented custom thumbnail card widgets dedicated to both projects and blog posts. These widgets receive a data list, containing the necessary information about subfolders and corresponding markdown file names, from their parent widget.

Leveraging the provided data list, the custom thumbnail card widgets can accurately determine the appropriate paths for the metadata file and content file associated with each post. This enables them to extract essential details from the metadata file, such as post title, description, author, and other relevant information.

```dart
class ProjectCard extends StatelessWidget {
  ProjectCard({required this.dataList, super.key});

  late List dataList;
  // dataList[0] is project folder name
  // dataList[1] is markdown file name

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future:
          rootBundle.loadString("assets/projects/${dataList[0]}/metadata.json"),
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return Card(
            shape:
                RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
            elevation: 0.0,
            child: const Center(
              child: CircularProgressIndicator(),
            ),
          );
        } else if (snapshot.hasData) {
          Map<String, dynamic> jsonData = jsonDecode(snapshot.data!);
          return MouseRegion(
            cursor: SystemMouseCursors.click,
            child: GestureDetector(
              onTap: () {
                Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (context) => ProjectPostPage(
                              fileRoot:
                                  "assets/projects/${dataList[0]}/${dataList[1]}",
                            )));
              },
              child: Card(
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(14)),
                elevation: 1.0,
                clipBehavior: Clip
                    .antiAliasWithSaveLayer, // what is this method for? Look it up later
                child: Container(
                  decoration: const BoxDecoration(
                    gradient: LinearGradient(
                      begin: Alignment.bottomCenter,
                      end: Alignment.topCenter,
                      colors: [
                        Color.fromARGB(232, 20, 150, 167),
                        Color.fromARGB(0, 20, 150, 167),
                      ],
                    ),
                    image: DecorationImage(
                        image: AssetImage("assets/images/3d_character.png"),
                        fit: BoxFit.cover,
                        alignment: Alignment.topCenter),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.only(bottom: 30),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.end,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        Text(
                          jsonData["title"],
                          style: const TextStyle(
                            fontSize: 28,
                            fontWeight: FontWeight.bold,
                            color: Colors.white,
                          ),
                        ),
                        Text(
                          jsonData["tag"][0],
                          style: TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: ResponsiveValue(context,
                                defaultValue: 18.0,
                                conditionalValues: [
                                  const Condition.smallerThan(
                                      name: 'DESKTOP2', value: 16.0),
                                ]).value,
                            color: Colors.white,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          );
        }

        return const Center();
      },
    );
  }
}
```

![](assets/assets/posts/portfolio_blog/images/project-card.jpg)
![](assets/assets/posts/portfolio_blog/images/bolg-card.jpg)

Now, when a user clicks on a card, the post page opens, seamlessly connecting the users to the desired content. The thumbnail card efficiently passes the path for the markdown file, which is then loaded using a FutureBuilder. This effective approach allows for smooth data retrieval.

Once the file data is available, the flutter_markdown package effortlessly presents the post's content in a readable and user-friendly format. 

![](assets/assets/posts/portfolio_blog/images/post-page.jpg)
```dart
FutureBuilder(
  future: loadAsset(fileRoot),
  builder: (context, snapshot) {
    if (snapshot.connectionState == ConnectionState.waiting) {
      return const Center(
        child: CircularProgressIndicator(),
      );
    } else if (snapshot.hasData) {
      return Markdown(
        shrinkWrap: true,
        data: snapshot.data!.toString(),
      );
  
    return const Center();
  }
  }),
```

&nbsp;

# Web Hosting
----

Looks like it's almost done. I've put in a tremendous effort into creating this blog, and now it's time to showcase it to the world by hosting it on the web. There are various ways to accomplish this, but after careful consideration, I've decided to host it on Github Pages. This platform not only offers the advantage of being free but also provides a high degree of freedom in managing and customizing your website.

In addition to the benefits of free hosting and flexibility, Github Pages allows you to prominently display your coding contributions through commits. These contributions serve as a clear testament to your hard work and dedication as a programmer. By leveraging Github Pages, you can make continuous contributions and further enhance your web presence, solidifying your position as an industrious developer.

&nbsp;

## Create a Repository

As far as I know, there are two ways to host on GitHub Pages, and I've chosen to upload the entire project to a repository and host it from there. The first step is to create a repository on GitHub specifically for this project. You have the flexibility to choose any name for the repository; it's entirely up to you. However, it's essential to ensure that the repository is set to "public" to enable hosting on GitHub Pages.

![](assets/assets/posts/portfolio_blog/images/create-repository.jpg)

&nbsp;

## Build Web

The official document explains well about this.
https://docs.flutter.dev/platform-integration/web/building

run the following commands on project terminal.
These commands are to use the latest version of the Flutter SDK.

```ps
flutter channel stable
flutter upgrade
```

Run the following command and if you see Chrome (web), it's ready!

```ps
flutter devices
1 connected device:

Chrome (web) • chrome • web-javascript • Google Chrome 88.0.4324.150
```

Run the following command to generate a release build
```ps
flutter build web
```
```ps
flutter build web --web-renderer html
```
You can also include --web-renderer html or --web-renderer canvaskit to select between the HTML or CanvasKit renderers, respectively. I prefer to render in HTML because it shows better quailty of images. According to site, the difference between these two are like this.

* **HTML renderer**: Uses a combination of HTML elements, CSS, Canvas elements, and SVG elements. This renderer has a smaller download size.

* **CanvasKit renderer**: This renderer is fully consistent with Flutter mobile and desktop, has faster performance with higher widget density, but adds about 2MB in download size.

https://medium.com/flutter/flutter-web-support-hits-the-stable-milestone-d6b84e83b425

After run the above command, you will see a build/web directory with built files, including an assets directory, which need to be served together.

![](assets/assets/posts/portfolio_blog/images/build-web.jpg)

One crucial aspect to be mindful of is the nested assets folder structure. In this setup, an assets folder is created under another assets folder. Consequently, when loading files from the assets directory, it's important to include an additional "assets" segment in the file path to access the correct files.

For instance, when referring to an asset file within the nested assets folder, the path should be specified as "assets/assets/your_file_name". This ensures that the correct assets are located and properly utilized within the application

![](assets/assets/posts/portfolio_blog/images/build-web-assets.jpg)

```dart
// this is noraml
rootBundle.loadString('projects/projects_list.json'),
// when assets folder is under anoter assets folder
rootBundle.loadString('assets/projects/projects_list.json'), 
```

Upon opening the index.html file, you will notice the following line: `<base href="/">`. To ensure proper hosting and correct page rendering, the href value in this line should be adjusted.

In the context of GitHub Pages, the web page address will take the form of `https://\${Owner}.github.io/${Repository}`
For seamless hosting, the name of the repository should be used as the href value in the **<base>** tag. Thus, the updated line should read: `<base href="/${Repository}/">`

By making this adjustment, your web page will be hosted correctly, and users will be able to access it with the address `https://${Owner}.github.io/${Repository}` This ensures a smooth and seamless hosting experience for your project on GitHub Pages.

```html
<!DOCTYPE html>
<html>
<head>
  <!--
    If you are serving your web app in a path other than the root, change the
    href value below to reflect the base path you are serving from.

    The path provided below has to start and end with a slash "/" in order for
    it to work correctly.

    For more details:
    * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base

    This is a placeholder for base href that will be replaced by the value of
    the `--base-href` argument provided to `flutter build`.
  -->
  <base href="/">
```
```html
<base href="/your_repository_name/">
<!-- example -->
<base href="/protfolio_blog/">
```

After all push the project to the repository

```ps
git add .
git commit -m "first push"
git branch -M main
git push -u origin main
```

Then, go to Settings -> Pages in the repository and activate GitHub Pages. Choose Deply from a branch for Source. Choose master, /(root) for Branch and then save this setting. 

![](assets/assets/posts/portfolio_blog/images/settings-pages.jpg)

&nbsp;

## Actions and Workflows

Waiting for just a second, and the web page is now hosted. Nevertheless, a persistent issue arises – I have to repeat this manual process each time I update or make adjustments to the project. This inefficiency becomes both frustrating and time-consuming.

However, there's a solution: GitHub Actions. Think of it as an automatic macro that handles this process seamlessly. By leveraging GitHub Actions, you can automate the hosting and deployment process. This means you no longer have to manually handle it every time you make changes. GitHub Actions streamlines the workflow, allowing you to focus on your project without the hassle of repetitive tasks.

First, you need to create .github/wrkflows folder structure. Then, create workflow.yml file.

![](assets/assets/posts/portfolio_blog/images/workflow-folder.jpg)

The content of workflow.yml file is like following:

```yml
name: Build and deploy flutter web app

on:
  push:
    branches: ['main']

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - uses: subosito/flutter-action@v2
        with:
          channel: 'stable'
      - run: flutter pub get
      - run: flutter config --enable-web
      - run: flutter build web --web-renderer html --base-href "/${{ github.event.repository.name }}/"

      - run: git config user.name github-actions
      - run: git config user.email github-actions@github.com
      - run: git --work-tree build/web add --all
      - run: git commit -m "Automatic deployment by github-actions"
      - run: git push origin HEAD:gh_pages --force
```

I push to gh_pages branch at this time, not main branch. Therefore, the settings for the repository is also changed.

Once you push this new file, you can monitor the ongoing processes in the Actions tab. There, you'll be able to track the progress of various tasks. Once the actions are completed, your web page will be automatically updated with the changes you made.

![](assets/assets/posts/portfolio_blog/images/actions.jpg)

&nbsp;

# Conclusion

This project has been an eye-opening experience for me, showcasing the power of Flutter for multi-platform development. Initially, I heard that Flutter Web had its limitations, but recent updates have made it perform exceptionally well. Throughout this project, I gained the valuable skill of creating responsive web layouts, ensuring a seamless user experience across devices. Additionally, I honed my logical thinking abilities while crafting a structure to load markdown files independently.

Using GitHub Pages to host my blog was a fresh and rewarding challenge. Although the blog might not be as detailed or feature-rich as I envisioned, I'm committed to continuously managing and updating it to perfection. I understand there might be some bugs and issues, but I'm determined to overcome them with time and dedication.

This project has been a significant learning journey for me, and I'm excited to enhance the blog's features and content further. With each update, I aim to create a polished and engaging platform, offering valuable insights and enjoyable experiences for visitors.