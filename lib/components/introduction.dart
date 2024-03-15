import 'package:flutter/material.dart';
import 'package:portfolio_blog/pages/blog_page.dart';
import 'package:portfolio_blog/pages/projects_page.dart';
import 'package:responsive_framework/responsive_framework.dart';
import 'button_widget.dart';
import 'custom_text.dart';

class Introduction extends StatelessWidget {
  const Introduction({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.fromLTRB(
          0,
          ResponsiveBreakpoints.of(context).largerThan(MOBILE) ? 110 : 40,
          0,
          110),
      child: ResponsiveRowColumn(
        layout: ResponsiveBreakpoints.of(context).smallerThan(TABLET)
            ? ResponsiveRowColumnType.COLUMN
            : ResponsiveRowColumnType.ROW,
        rowMainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          // Box for introduction texts
          ResponsiveRowColumnItem(
            rowFlex: 1,
            child: SizedBox(
              width: ResponsiveValue(context,
                  defaultValue: 450.0,
                  conditionalValues: [
                    Condition.equals(name: TABLET, value: 370.0),
                    Condition.equals(
                        name: 'TABLET2',
                        value: MediaQuery.of(context).size.width),
                    Condition.equals(
                        name: MOBILE, value: MediaQuery.of(context).size.width),
                  ]).value,
              height: ResponsiveBreakpoints.of(context).largerThan(MOBILE)
                  ? 400
                  : 300,
              child: ResponsiveRowColumn(
                layout: ResponsiveRowColumnType.COLUMN,
                columnCrossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  ResponsiveRowColumnItem(
                    rowFlex: 1,
                    columnFlex: 1,
                    child: Padding(
                      padding: const EdgeInsets.only(top: 20),
                      child: HeadTilteText(
                        text: 'Hi there, I am Blackcode2',
                      ),
                    ),
                  ),
                  const ResponsiveRowColumnItem(
                    child: SizedBox(height: 15),
                  ),
                  ResponsiveRowColumnItem(
                      child: BodySmallText(
                    text:
                        'Hello there! I\'m Blackcode2, a Computer Science and Engineering major pursuing my Bachelor\'s degree',
                    textAlign: TextAlign.left,
                  )),
                  const ResponsiveRowColumnItem(
                    child: SizedBox(
                      height: 30,
                    ),
                  ),
                  ResponsiveRowColumnItem(
                    child: ButtonWidget(
                      buttonText: 'Get in touch',
                      onTap: () {},
                    ),
                  ),
                ],
              ),
            ),
          ),
          // profile image
          ResponsiveRowColumnItem(
            child: ClipRRect(
                borderRadius: BorderRadius.circular(30.0),
                child: Container(
                  color: const Color.fromARGB(255, 167, 202, 223),
                  height: ResponsiveValue(context,
                      defaultValue: 520.0,
                      conditionalValues: [
                        Condition.equals(name: 'DESKTOP3', value: 420.0),
                        Condition.equals(name: TABLET, value: 360.0),
                        Condition.equals(name: "TABLET2", value: 380.0),
                        Condition.equals(name: MOBILE, value: 280.0),
                        Condition.equals(name: "PHONE", value: 200.0)
                      ]).value,
                  width: ResponsiveValue(context,
                      defaultValue: 480.0,
                      conditionalValues: [
                        Condition.equals(name: 'DESKTOP3', value: 400.0),
                        Condition.equals(name: TABLET, value: 340.0),
                        Condition.equals(name: "TABLET2", value: 540.0),
                        Condition.equals(name: MOBILE, value: 440.0),
                        Condition.equals(name: "PHONE", value: 290.0)
                      ]).value,
                  child: Image.asset(
                    'assets/images/profile-image.png',
                  ),
                )),
          ),
        ],
      ),
    );
  }
}

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
                HeadTilteText(
                  text: "Latest works",
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
                        Condition.smallerThan(name: 'DESKTOP2', value: 350.0),
                        Condition.equals(name: 'PHONE', value: 290.0),
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

class IntroBlog extends StatelessWidget {
  const IntroBlog({super.key});

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
                HeadTilteText(
                  text: "Recent Posts",
                ),
                TextButton(
                    onPressed: () {
                      Navigator.push(context,
                          MaterialPageRoute(builder: (context) => BlogPage()));
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
                        Condition.smallerThan(name: 'DESKTOP2', value: 350.0),
                        Condition.equals(name: 'PHONE', value: 290.0),
                      ]).value,
                  child: BodySmallText(
                      text:
                          'This is where I document my creative and exploratory pursuits. Come and witness my passionate drive for personal growth. Join me on this exciting journey of self-discovery and endless possibilities.',
                      textAlign: TextAlign.left),
                ),
              ],
            ),
          ),
        ),
        ResponsiveRowColumnItem(
          child: BlogCardGridView(
            isHome: true,
          ),
        ),
      ],
    );
  }
}
