import 'package:flutter/material.dart';
import 'package:portfolio_blog/components/custom_drawer.dart';
import 'package:portfolio_blog/components/introduction.dart';
import 'package:portfolio_blog/components/default_contents_box.dart';
import 'package:portfolio_blog/provider/post_provider.dart';
import 'package:provider/provider.dart';
import 'package:responsive_framework/responsive_framework.dart';
import '../components/top_navigationbar.dart';
import '../components/custom_bottom_navigationbar.dart';

class HomePage extends StatelessWidget {
  HomePage({super.key});
  final GlobalKey<ScaffoldState> scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  Widget build(BuildContext context) {
    PostProvider postProvider = context.read<PostProvider>();
    postProvider.loadPost();

    return Scaffold(
      key: scaffoldKey,
      endDrawer: CustomDrawer(),
      body: SingleChildScrollView(
        child: Column(
          children: [
            TopNavigationbar(
              scaffoldKey: scaffoldKey,
            ),
            DefaultContentsBox(
              child: const ResponsiveRowColumn(
                layout: ResponsiveRowColumnType.COLUMN,
                children: [
                  ResponsiveRowColumnItem(child: Introduction()),
                  ResponsiveRowColumnItem(
                      child: Padding(
                    padding: EdgeInsets.only(top: 80),
                    child: IntroWork(),
                  )),
                  ResponsiveRowColumnItem(
                      child: Padding(
                    padding: EdgeInsets.only(top: 180),
                    child: IntroBlog(),
                  )),
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
