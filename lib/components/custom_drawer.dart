import 'package:flutter/material.dart';
import 'package:portfolio_blog/pages/about_page.dart';
import 'package:portfolio_blog/pages/blog_page.dart';
import 'package:portfolio_blog/pages/home_page.dart';
import 'package:portfolio_blog/pages/projects_page.dart';
import 'package:url_launcher/url_launcher.dart';

class CustomDrawer extends StatelessWidget {
  CustomDrawer({super.key});

  final Uri _url = Uri.parse('https://github.com/Blackcode2');

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        children: [
          DrawerHeader(
              child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              DrawerText(
                text: 'Menu',
              ),
              IconButton(
                  onPressed: () {
                    Navigator.pop(context);
                  },
                  icon: const Icon(Icons.close)),
            ],
          )),
          ListTile(
            title: DrawerText(
              text: 'Home',
            ),
            onTap: () {
              Navigator.push(
                  context, MaterialPageRoute(builder: (context) => HomePage()));
            },
          ),
          ListTile(
            title: DrawerText(
              text: 'Projects',
            ),
            onTap: () {
              Navigator.push(context,
                  MaterialPageRoute(builder: (context) => ProjectsPage()));
            },
          ),
          ListTile(
            title: DrawerText(
              text: 'Blog',
            ),
            onTap: () {
              Navigator.push(
                  context, MaterialPageRoute(builder: (context) => BlogPage()));
            },
          ),
          ListTile(
            title: DrawerText(
              text: 'About',
            ),
            onTap: () {
              Navigator.push(context,
                  MaterialPageRoute(builder: (context) => AboutPage()));
            },
          ),
          ListTile(
            title: DrawerText(
              text: 'Github',
            ),
            onTap: () async {
              await launchUrl(_url);
            },
          ),
        ],
      ),
    );
  }
}

class DrawerText extends StatelessWidget {
  DrawerText({required this.text, super.key});

  late String text;

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: const TextStyle(
          fontFamily: "Inter",
          fontSize: 16,
          fontWeight: FontWeight.w600,
          color: Color.fromARGB(255, 17, 14, 56)),
    );
  }
}
