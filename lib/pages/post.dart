import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:portfolio_blog/components/code_element_builder.dart';
import 'package:portfolio_blog/components/custom_bottom_navigationbar.dart';
import 'package:portfolio_blog/components/custom_drawer.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import '../components/top_navigationbar.dart';
import 'package:responsive_framework/responsive_framework.dart';
import 'package:portfolio_blog/components/custom_text.dart';
import 'package:portfolio_blog/components/default_contents_box.dart';

class Post extends StatelessWidget {
  Post({required this.fileRoot, required this.metaData, super.key});

  late String fileRoot;
  late Map<String, dynamic> metaData;

  // Fucntion to load markdown file from assets
  Future<String> loadAsset(String path) async {
    return await rootBundle.loadString(path);
  }

  final GlobalKey<ScaffoldState> scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      endDrawer: CustomDrawer(),
      key: scaffoldKey,
      body: SingleChildScrollView(
        child: Column(
          children: [
            TopNavigationbar(
              scaffoldKey: scaffoldKey,
            ),
            DefaultContentsBox(
              child: Column(
                children: [
                  //padiing between top navigation bar and title
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
                        // padding between title&description and text
                        // this is wrapper for title & description
                        Padding(
                          padding: const EdgeInsets.only(bottom: 50),
                          child: SizedBox(
                            width: ResponsiveValue(context,
                                defaultValue: 800.0,
                                conditionalValues: [
                                  Condition.equals(name: TABLET, value: 760.0)
                                ]).value,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.center,
                              children: [
                                HeadTilteText(text: metaData['title']),
                                const SizedBox(
                                  height: 38,
                                ),
                                BodySmallText(
                                  text: metaData['date'],
                                  textAlign: TextAlign.center,
                                )
                              ],
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  DefaultTextBox(
                    child: FutureBuilder(
                        future: loadAsset(fileRoot),
                        builder: (context, snapshot) {
                          if (snapshot.connectionState ==
                              ConnectionState.waiting) {
                            return const Center(
                              child: CircularProgressIndicator(),
                            );
                          } else if (snapshot.hasData) {
                            return Markdown(
                                selectable: true,
                                shrinkWrap: true,
                                data: snapshot.data!.toString(),
                                builders: {
                                  'code': CodeElementBuilder(),
                                },
                                styleSheet: MarkdownStyleSheet(
                                    p: TextStyle(
                                        color: const Color.fromARGB(
                                            255, 17, 14, 56),
                                        fontSize: ResponsiveValue(context,
                                                defaultValue: 18.0,
                                                conditionalValues: [Condition.equals(name: "PHONE", value: 14.0)])
                                            .value,
                                        fontFamily: "Inter"),
                                    a: TextStyle(
                                      fontSize: ResponsiveValue(context,
                                          defaultValue: 18.0,
                                          conditionalValues: [
                                            Condition.equals(
                                                name: "PHONE", value: 14.0)
                                          ]).value,
                                    ),
                                    h1: TextStyle(
                                        color: const Color.fromARGB(
                                            255, 17, 14, 56),
                                        fontSize: ResponsiveValue(context,
                                            defaultValue: 34.0,
                                            conditionalValues: [
                                              Condition.equals(
                                                  name: "PHONE", value: 26.0)
                                            ]).value,
                                        fontWeight: FontWeight.bold,
                                        fontFamily: "Inter"),
                                    h2: TextStyle(
                                        color: const Color.fromARGB(255, 17, 14, 56),
                                        fontSize: ResponsiveValue(context, defaultValue: 28.0, conditionalValues: [Condition.equals(name: "PHONE", value: 24.0)]).value,
                                        fontWeight: FontWeight.bold,
                                        fontFamily: "Inter"),
                                    h3: TextStyle(color: const Color.fromARGB(255, 17, 14, 56), fontSize: ResponsiveValue(context, defaultValue: 25.0, conditionalValues: [Condition.equals(name: "PHONE", value: 20.0)]).value, fontWeight: FontWeight.bold, fontFamily: "Inter"),
                                    h4: TextStyle(color: const Color.fromARGB(255, 17, 14, 56), fontSize: ResponsiveValue(context, defaultValue: 22.0, conditionalValues: [Condition.equals(name: "PHONE", value: 18.0)]).value, fontWeight: FontWeight.bold, fontFamily: "Inter"),
                                    codeblockDecoration: const BoxDecoration(color: Colors.black),
                                    blockSpacing: 20.0));
                          }

                          return const Center();
                        }),
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
