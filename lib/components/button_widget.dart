import 'package:flutter/material.dart';
import 'package:portfolio_blog/provider/post_provider.dart';
import 'package:provider/provider.dart';

class ButtonWidget extends StatelessWidget {
  ButtonWidget(
      {
      // required this.onPressed,
      required this.buttonText,
      required this.onTap,
      super.key});

  // late Function onPressed;
  late String buttonText;
  late void Function() onTap;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      cursor: SystemMouseCursors.click,
      child: GestureDetector(
        onTap: onTap,
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 10),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(14),
            gradient: const LinearGradient(
              begin: Alignment.topRight,
              end: Alignment.bottomLeft,
              colors: [
                Color.fromARGB(220, 0, 3, 104),
                Color.fromARGB(223, 20, 150, 167),
              ],
            ),
          ),
          child: Text(
            buttonText,
            style: const TextStyle(
                fontSize: 16, fontWeight: FontWeight.bold, color: Colors.white),
          ),
        ),
      ),
    );
  }
}

class TagButton extends StatefulWidget {
  TagButton({required this.text, super.key});
  late String text;

  @override
  State<TagButton> createState() => _TagButtonState();
}

class _TagButtonState extends State<TagButton> {
  bool isPressed = false;

  @override
  Widget build(BuildContext context) {
    PostProvider postProvider = context.read<PostProvider>();
    return ElevatedButton(
        style: ElevatedButton.styleFrom(
          splashFactory: NoSplash.splashFactory,
          backgroundColor: isPressed
              ? Color.fromARGB(220, 0, 3, 104)
              : Color.fromARGB(223, 20, 150, 167),
          foregroundColor: Colors.white,
        ),
        onPressed: () {
          setState(() {
            if (isPressed) {
              print(widget.text);
              isPressed = false;
              postProvider.selectedTags.remove(widget.text);
              postProvider.removeSelectedTagsMap(widget.text);
              postProvider.decreaseTagButtonCount();
            } else {
              isPressed = true;
              postProvider.selectedTags.add(widget.text);
              postProvider.addSelectedTagsMap();
              postProvider.increaseTagButtonCount();
            }
          });
        },
        child: Text(
          widget.text,
          style: TextStyle(fontSize: 12),
        ));
  }
}
