import 'package:flutter/material.dart';
import 'package:portfolio_blog/components/default_contents_box.dart';
import 'package:portfolio_blog/pages/about_page.dart';
import 'package:portfolio_blog/pages/blog_page.dart';
import 'package:portfolio_blog/pages/home_page.dart';
import 'package:portfolio_blog/pages/post.dart';
import 'package:portfolio_blog/pages/projects_page.dart';
import 'package:responsive_framework/responsive_framework.dart';
import 'package:url_launcher/url_launcher.dart';

class TopNavigationbar extends StatelessWidget {
  TopNavigationbar({required this.scaffoldKey, super.key});

  late GlobalKey<ScaffoldState> scaffoldKey;
  final Uri _url = Uri.parse('https://github.com/Blackcode2');

  @override
  Widget build(BuildContext context) {
    if (ResponsiveBreakpoints.of(context).largerThan("PHONE")) {
      return DefaultContentsBox(
          // padding for the top
          child: MenuList(
        scaffoldKey: scaffoldKey,
      ));
    } else {
      return MenuList(scaffoldKey: scaffoldKey);
    }
  }
}

class MenuList extends StatelessWidget {
  MenuList({required this.scaffoldKey, super.key});

  late GlobalKey<ScaffoldState> scaffoldKey;
  final Uri _url = Uri.parse('https://github.com/Blackcode2');

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(
        vertical: ResponsiveValue(context,
            defaultValue: 52.0,
            conditionalValues: [
              Condition.smallerThan(name: 'DESKTOP3', value: 20.0)
            ]).value!,
      ),
      child: ResponsiveRowColumn(
        rowMainAxisAlignment: MainAxisAlignment.spaceBetween,
        layout: ResponsiveRowColumnType.ROW,
        children: [
          const ResponsiveRowColumnItem(child: MainLogo()),
          const ResponsiveRowColumnItem(
            child: SizedBox(
              width: 70,
            ),
          ),
          ResponsiveRowColumnItem(
            child: NavigationbarButton(
              label: 'Home',
              onPressed: () {
                Navigator.push(context,
                    MaterialPageRoute(builder: (context) => HomePage()));
              },
            ),
          ),
          ResponsiveRowColumnItem(
            child: NavigationbarButton(
              label: 'Projects',
              onPressed: () {
                Navigator.push(context,
                    MaterialPageRoute(builder: (context) => ProjectsPage()));
              },
            ),
          ),
          ResponsiveRowColumnItem(
            child: NavigationbarButton(
              label: 'Blog',
              onPressed: () {
                Navigator.push(context,
                    MaterialPageRoute(builder: (context) => BlogPage()));
              },
            ),
          ),
          ResponsiveRowColumnItem(
            child: NavigationbarButton(
              label: 'About',
              onPressed: () {
                Navigator.push(context,
                    MaterialPageRoute(builder: (context) => AboutPage()));
              },
            ),
          ),
          // ResponsiveRowColumnItem(
          //   child: NavigationbarButton(
          //     label: 'Test',
          //     onPressed: () {
          //       Navigator.push(
          //           context, MaterialPageRoute(builder: (context) => Post()));
          //Condition.smallerThan(name: 'DESKTOP2')
          //     },
          //   ),
          // ),
          const ResponsiveRowColumnItem(
            child: Expanded(
              child: SizedBox(),
            ),
          ),
          ResponsiveRowColumnItem(
            child: ResponsiveVisibility(
              hiddenConditions: [
                Condition.smallerThan(name: 'DESKTOP2', value: false)
              ],
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
          ResponsiveRowColumnItem(
            child: ResponsiveVisibility(
              visible: false,
              visibleConditions: [
                Condition.smallerThan(name: 'DESKTOP2', value: true)
              ],
              child: EndDrawerButton(
                onPressed: () {
                  scaffoldKey.currentState!.openEndDrawer();
                },
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class MainLogo extends StatelessWidget {
  const MainLogo({super.key});

  @override
  Widget build(BuildContext context) {
    return TextButton(
        onPressed: () {
          Navigator.push(
              context, MaterialPageRoute(builder: (context) => HomePage()));
        },
        child: Text('Blackcode2',
            style: TextStyle(
              color: const Color.fromARGB(255, 17, 14, 56),
              fontWeight: FontWeight.w800,
              fontSize: ResponsiveValue(context,
                  defaultValue: 18.0,
                  conditionalValues: [
                    Condition.smallerThan(name: 'DESKTOP3', value: 14.0)
                  ]).value!,
            )));
  }
}

class NavigationbarButton extends StatelessWidget {
  NavigationbarButton(
      {required this.label, required this.onPressed, super.key});

  late String label;
  late void Function() onPressed;

  @override
  Widget build(BuildContext context) {
    return ResponsiveVisibility(
      hiddenConditions: [Condition.smallerThan(name: 'DESKTOP2', value: false)],
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 15),
        child: TextButton(
            onPressed: () {
              onPressed();
            },
            child: Text(
              label,
              style: const TextStyle(
                  fontFamily: "Inter",
                  fontSize: 16,
                  fontWeight: FontWeight.w600,
                  color: Color.fromARGB(255, 17, 14, 56)),
            )),
      ),
    );
  }
}
