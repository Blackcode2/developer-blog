import 'package:flutter/material.dart';

class Content extends StatelessWidget {
  Content(
      {required this.title,
      required this.date,
      required this.description,
      required this.image,
      required this.tag,
      required this.content,
      super.key});

  String title, date, description, image;
  List<String> tag;
  String author = "Blackcode2";
  Widget content;

  @override
  Widget build(BuildContext context) {
    return content;
  }
}
