import 'package:flutter/material.dart';
import 'package:portfolio_blog/components/content.dart';
import 'package:portfolio_blog/components/custom_bottom_navigationbar.dart';
import 'package:portfolio_blog/components/custom_drawer.dart';
import 'package:portfolio_blog/components/custom_text.dart';
import '../components/top_navigationbar.dart';
import 'package:responsive_framework/responsive_framework.dart';
import 'package:flutter/services.dart';
import 'dart:convert';
import '../components/thumbnail_card.dart';
import 'package:portfolio_blog/components/default_contents_box.dart';

class BlogPage extends StatelessWidget {
  BlogPage({super.key});

  final GlobalKey<ScaffoldState> scaffoldKey = GlobalKey<ScaffoldState>();

  String header = 'Blog';

  String description =
      'This is where I document my creative and exploratory pursuits. Come and witness my passionate drive for personal growth. Join me on this exciting journey of self-discovery and endless possibilities.';

  // Future<String> loadAsset(String path) async {
  //   return await rootBundle.loadString(path);
  // }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromARGB(54, 184, 204, 252),
      key: scaffoldKey,
      endDrawer: CustomDrawer(),
      body: SingleChildScrollView(
        child: Column(
          children: [
            TopNavigationbar(
              scaffoldKey: scaffoldKey,
            ),
            DefaultContentsBox(
              child: Column(
                children: [
                  // padiing between top navigation bar and title
                  Padding(
                    padding: EdgeInsets.fromLTRB(
                        0,
                        ResponsiveValue(context,
                            defaultValue: 80.0,
                            conditionalValues: [
                              Condition.smallerThan(
                                  name: 'DESKTOP3', value: 30.0)
                            ]).value!,
                        0,
                        100),
                    child: Column(
                      children: [
                        // padding between title&description and BlogCard
                        // this is wrapper for title & description
                        Padding(
                          padding: const EdgeInsets.only(bottom: 50),
                          child: SizedBox(
                            width: ResponsiveValue(context,
                                defaultValue: 440.0,
                                conditionalValues: [
                                  Condition.smallerThan(
                                      name: TABLET, value: 240.0)
                                ]).value,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.center,
                              children: [
                                HeadTilteText(text: header),
                                const SizedBox(
                                  height: 38,
                                ),
                                BodySmallText(
                                  text: description,
                                  textAlign: TextAlign.center,
                                )
                              ],
                            ),
                          ),
                        ),
                        BlogCardGridView(
                          isHome: false,
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            CustomBottomNavigationbar(),
          ],
        ),
      ),
    );
  }
}

class BlogCardGridView extends StatelessWidget {
  BlogCardGridView({required this.isHome, super.key});

  late bool isHome;
  int fileCount = 0;
  List jsonList = [];
  late Map<String, dynamic> jsonData;

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: rootBundle.loadString('assets/posts/blogs_list.json'),
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
          if (fileCount < 3) {
            isHome = false;
          }
          return GridView.builder(
              shrinkWrap: true,
              gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
                maxCrossAxisExtent: 480,
                mainAxisExtent: 600,
                mainAxisSpacing: 14,
                crossAxisSpacing: 14,
                // childAspectRatio: 3 / 4.5,
              ),
              itemCount: isHome ? 3 : fileCount,
              itemBuilder: (context, index) {
                return BlogCard(dataList: jsonList[index]);
              });
        }
        return const Center(
          child: Text('Can not laod data'),
        );
      },
    );
  }
}
