import 'package:flutter/material.dart';
import 'package:portfolio_blog/provider/post_provider.dart';
import 'package:provider/provider.dart';

class TagList extends StatelessWidget {
  TagList({super.key});

  @override
  Widget build(BuildContext context) {
    PostProvider postProvider = context.watch();

    return FutureBuilder(
        future: postProvider.getTagList(),
        builder: ((context, snapshot) {
          if (snapshot.hasData) {
            return Wrap(
                direction: Axis.horizontal,
                spacing: 5,
                runSpacing: 5,
                children: snapshot.data);
          } else {
            return CircularProgressIndicator();
          }
        }));
  }
}
