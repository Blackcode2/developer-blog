import 'package:flutter/material.dart';
import 'package:portfolio_blog/components/custom_bottom_navigationbar.dart';
import 'package:portfolio_blog/components/custom_drawer.dart';
import 'package:portfolio_blog/components/custom_text.dart';
import 'package:portfolio_blog/components/default_contents_box.dart';
import '../components/top_navigationbar.dart';
import 'package:responsive_framework/responsive_framework.dart';
import 'package:flutter/services.dart';
import 'dart:convert';
import '../components/thumbnail_card.dart';

class ProjectsPage extends StatelessWidget {
  ProjectsPage({super.key});

  final GlobalKey<ScaffoldState> scaffoldKey = GlobalKey<ScaffoldState>();

  String header = 'My works';

  String description =
      'I show only my best works built completely with passion, simplicity, and creativity!';

  Future<String> loadAsset(String path) async {
    return await rootBundle.loadString(path);
  }

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
                              const Condition.smallerThan(
                                  name: 'DESKTOP3', value: 30.0)
                            ]).value!,
                        0,
                        100),
                    child: Column(
                      children: [
                        // padding between title&description and ProjectCard
                        // this is wrapper for title & description
                        Padding(
                          padding: const EdgeInsets.only(bottom: 50),
                          child: SizedBox(
                            width: ResponsiveValue(context,
                                defaultValue: 440.0,
                                conditionalValues: [
                                  const Condition.smallerThan(
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
                        ProjectCardGridView(
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

class ProjectCardGridView extends StatelessWidget {
  ProjectCardGridView({required this.isHome, super.key});

  late bool isHome;
  int fileCount = 0;
  List jsonList = [];
  late Map<String, dynamic> jsonData;

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: rootBundle.loadString('assets/posts/projects_list.json'),
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
                return ProjectCard(dataList: jsonList[index]);
              });
        }
        return const Center(
          child: Text('Can not laod data'),
        );
      },
    );
  }
}
