import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:portfolio_blog/components/content.dart';
import 'package:portfolio_blog/pages/post.dart';
import 'dart:convert';
import 'package:responsive_framework/responsive_framework.dart';

class ProjectCard extends StatelessWidget {
  ProjectCard({required this.dataList, super.key});

  late List dataList;
  // dataList[0] is project folder name
  // dataList[1] is markdown file name

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future:
          rootBundle.loadString("assets/posts/${dataList[0]}/metadata.json"),
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
                        builder: (context) => Post(
                              fileRoot:
                                  "assets/posts/${dataList[0]}/${dataList[1]}",
                              metaData: jsonData,
                            )));
              },
              child: Card(
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(14)),
                elevation: 0.5,
                clipBehavior: Clip
                    .antiAliasWithSaveLayer, // what is this method for? Look it up later
                child: Container(
                  decoration: BoxDecoration(
                    // gradient: const LinearGradient(
                    //   begin: Alignment.bottomCenter,
                    //   end: Alignment.topCenter,
                    //   colors: [
                    //     Color.fromARGB(232, 20, 150, 167),
                    //     Color.fromARGB(0, 255, 255, 255),
                    //   ],
                    // ),
                    image: DecorationImage(
                        image: AssetImage(
                            "assets/posts/${dataList[0]}/images/${jsonData["image"]}"),
                        fit: BoxFit.cover,
                        alignment: Alignment.topCenter),
                  ),
                  child: Stack(children: [
                    Positioned.fill(
                      child: Align(
                        alignment: Alignment.bottomCenter,
                        child: Container(
                          decoration: const BoxDecoration(
                            borderRadius: BorderRadius.only(
                                topLeft: Radius.circular(8),
                                topRight: Radius.circular(8)),
                            color: Color.fromARGB(190, 20, 150, 167),
                          ),
                          height: MediaQuery.of(context).size.height * 0.18,
                        ),
                      ),
                    ),
                    Positioned.fill(
                      child: Align(
                        alignment: Alignment.center,
                        child: Padding(
                          padding: const EdgeInsets.only(bottom: 24),
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
                  ]),
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

class BlogCard extends StatelessWidget {
  BlogCard({required this.dataList, super.key});

  late List dataList;
  // dataList[0] is project folder name
  // dataList[1] is markdown file name

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future:
          rootBundle.loadString("assets/posts/${dataList[0]}/metadata.json"),
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
                        builder: (context) => Post(
                              fileRoot:
                                  "assets/posts/${dataList[0]}/${dataList[1]}",
                              metaData: jsonData,
                            )));
              },
              child: Card(
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(14)),
                elevation: 0.5,
                child: Column(
                  children: [
                    ClipRRect(
                      borderRadius: const BorderRadius.only(
                          topLeft: Radius.circular(14),
                          topRight: Radius.circular(14)),
                      child: SizedBox(
                        height: MediaQuery.of(context).size.height * 0.3,
                        child: Image.asset(
                          "assets/posts/${dataList[0]}/images/${jsonData["image"]}",
                          fit: BoxFit.fill,
                        ),
                      ),
                    ),
                    Expanded(
                      flex: 1,
                      child: Container(
                        width: MediaQuery.of(context).size.width,
                        // height: MediaQuery.of(context).size.height * 0.5,
                        decoration: const BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.only(
                                bottomLeft: Radius.circular(14),
                                bottomRight: Radius.circular(14))),
                        child: Padding(
                          padding:
                              const EdgeInsets.fromLTRB(24.0, 60.0, 24.0, 18.0),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: [
                                  ElevatedButton(
                                    onPressed: () {},
                                    style: ElevatedButton.styleFrom(
                                      elevation: 0.0,
                                      padding: const EdgeInsets.all(6),
                                      backgroundColor: const Color.fromARGB(
                                          223, 20, 150, 167),
                                      shape: RoundedRectangleBorder(
                                        borderRadius: BorderRadius.circular(10),
                                      ),
                                    ),
                                    child: Text(
                                      jsonData["tag"][0],
                                      style: const TextStyle(
                                          color: Colors.white,
                                          fontWeight: FontWeight.bold,
                                          fontSize: 12),
                                    ),
                                  ),
                                  Padding(
                                    padding: const EdgeInsets.only(left: 10),
                                    child: ElevatedButton(
                                      onPressed: () {},
                                      style: ElevatedButton.styleFrom(
                                        elevation: 0.0,
                                        padding: const EdgeInsets.all(6),
                                        backgroundColor: const Color.fromARGB(
                                            223, 20, 150, 167),
                                        shape: RoundedRectangleBorder(
                                          borderRadius:
                                              BorderRadius.circular(10),
                                        ),
                                      ),
                                      child: Text(
                                        jsonData["tag"][1],
                                        style: const TextStyle(
                                            color: Colors.white,
                                            fontWeight: FontWeight.bold,
                                            fontSize: 12),
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                              const SizedBox(
                                height: 16,
                              ),
                              Text(
                                jsonData["title"],
                                style: TextStyle(
                                  fontSize: ResponsiveValue(context,
                                      defaultValue: 24.0,
                                      conditionalValues: [
                                        const Condition.equals(
                                            name: TABLET, value: 18.0)
                                      ]).value,
                                  fontWeight: FontWeight.bold,
                                  color: const Color.fromARGB(255, 17, 14, 56),
                                ),
                              ),
                              const SizedBox(
                                height: 16,
                              ),
                              Text(
                                jsonData["description"],
                                style: TextStyle(
                                  fontWeight: FontWeight.normal,
                                  fontSize: ResponsiveValue(context,
                                      defaultValue: 16.0,
                                      conditionalValues: [
                                        const Condition.equals(
                                            name: TABLET, value: 14.0)
                                      ]).value,
                                  color: const Color.fromARGB(255, 17, 14, 56),
                                ),
                              ),
                              const SizedBox(
                                height: 12,
                              ),
                              ListTile(
                                contentPadding: const EdgeInsets.all(0),
                                horizontalTitleGap: 16,
                                minVerticalPadding: 0,
                                minLeadingWidth: 0,
                                leading: const CircleAvatar(
                                    radius: 26,
                                    backgroundImage: AssetImage(
                                      'assets/images/profile-image.png',
                                    )),
                                title: const Text(
                                  "Blackcode2",
                                  style: TextStyle(
                                    fontWeight: FontWeight.bold,
                                    fontSize: 16,
                                    color: Color.fromARGB(255, 17, 14, 56),
                                  ),
                                ),
                                subtitle: Text(
                                  jsonData["date"],
                                  style: const TextStyle(
                                    fontWeight: FontWeight.normal,
                                    fontSize: 12,
                                    color: Color.fromARGB(255, 17, 14, 56),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ],
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
