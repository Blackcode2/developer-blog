import 'package:flutter/material.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:portfolio_blog/components/custom_bottom_navigationbar.dart';
import 'package:portfolio_blog/components/custom_drawer.dart';
import 'package:portfolio_blog/components/custom_text.dart';
import 'package:portfolio_blog/components/default_contents_box.dart';
import '../components/top_navigationbar.dart';
import 'package:responsive_framework/responsive_framework.dart';
import 'package:flutter/services.dart';

class AboutPage extends StatelessWidget {
  AboutPage({super.key});

  final GlobalKey<ScaffoldState> scaffoldKey = GlobalKey<ScaffoldState>();

  Future<String> loadAsset(String path) async {
    return await rootBundle.loadString(path);
  }

  String description =
      "Hello there! I'm Blackcode2, a Computer Science and Engineering major pursuing my Bachelor's degree. Welcome to my blog, where I showcase creative and passion-driven projects and document my journey towards becoming a proficient developer. Feel free to explore my projects and experiences, and I hope you enjoy the content!\n\n As a junior developer, my primary focus is on Flutter, and interestingly, this blog is also built using Flutter. Along my learning journey, I've delved into programming languages like C, C++, Python, and Java. Additionally, I have a modest grasp of HTML, CSS, and Javascript. I'm currently exploring various paths, from web development to game development, AI, and more, to discover which area resonates best with me.\n\n One thing I'm certain about is my dream and goal of starting my own business in the future. This aspiration fuels my determination to learn and grow as a developer, making steady progress towards achieving my ambitions. Thank you for visiting my blog, and I hope you find inspiration and enjoyment in exploring my projects and experiences.";

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
                        // padding between title and picture
                        // this is wrapper for title
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
                                HeadTilteText(text: "About"),
                                const SizedBox(
                                  height: 38,
                                ),
                              ],
                            ),
                          ),
                        ),
                        SizedBox(
                          height: 400,
                          width: 300,
                          child: Image.asset("assets/images/profile-image.png"),
                        ),
                        SizedBox(
                          width: 800.0,
                          child: BodySmallText(
                            text: description,
                            textAlign: TextAlign.left,
                          ),
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
