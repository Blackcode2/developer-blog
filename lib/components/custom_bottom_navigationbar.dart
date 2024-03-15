import 'package:flutter/material.dart';
import 'package:portfolio_blog/pages/about_page.dart';
import 'package:portfolio_blog/pages/blog_page.dart';
import 'package:portfolio_blog/pages/home_page.dart';
import 'package:responsive_framework/responsive_framework.dart';
import '../pages/projects_page.dart';
import 'package:url_launcher/url_launcher.dart';

class CustomBottomNavigationbar extends StatelessWidget {
  CustomBottomNavigationbar({super.key});

  final Uri _url = Uri.parse('https://github.com/Blackcode2');

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 80),
      child: Container(
        height: ResponsiveValue(context,
            defaultValue: 300.0,
            conditionalValues: [
              Condition.smallerThan(name: "TABLET2", value: 240.0)
            ]).value,
        width: MediaQuery.of(context).size.width * 1,
        // padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 10),
        decoration: const BoxDecoration(
          borderRadius: BorderRadius.only(
            topLeft: Radius.circular(14),
            topRight: Radius.circular(14),
          ),
          gradient: LinearGradient(
            begin: Alignment.topRight,
            end: Alignment.bottomLeft,
            colors: [
              Color.fromARGB(220, 0, 3, 104),
              Color.fromARGB(223, 20, 150, 167),
            ],
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                CircularButton(
                  url: _url,
                ),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                BottomTextButton(
                  text: 'Home',
                  onPressed: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => HomePage()));
                  },
                ),
                BottomTextButton(
                  text: 'Projects',
                  onPressed: () {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => ProjectsPage()));
                  },
                ),
                BottomTextButton(
                  text: 'Blog',
                  onPressed: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => BlogPage()));
                  },
                ),
                BottomTextButton(
                  text: 'About',
                  onPressed: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => AboutPage()));
                  },
                ),
              ],
            ),
            const SizedBox(
              height: 10,
            ),
            const Text(
              'Referenced by 2021 © Vonge. Template by CloudCannon.',
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: 16,
                color: Colors.white,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class CircularButton extends StatelessWidget {
  CircularButton({required this.url, super.key});

  late Uri url;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(10, 0, 10, 15),
      child: ElevatedButton(
        onPressed: () async {
          await launchUrl(url);
        },
        style: ElevatedButton.styleFrom(
          padding: EdgeInsets.zero,
          fixedSize: const Size(50, 50),
          shape: const CircleBorder(),
        ),
        child: const ImageIcon(
          AssetImage('assets/images/github-mark.png'),
          size: 30,
        ),
      ),
    );
  }
}

class BottomTextButton extends StatelessWidget {
  BottomTextButton({required this.text, required this.onPressed, super.key});

  late String text;
  late void Function() onPressed;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(0, 0, 0, 0),
      child: TextButton(
        onPressed: () {
          onPressed();
        },
        child: Text(
          text,
          style: const TextStyle(fontSize: 16, color: Colors.white),
        ),
      ),
    );
  }
}
