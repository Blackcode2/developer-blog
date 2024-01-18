import 'package:flutter/material.dart';
import 'package:responsive_framework/responsive_framework.dart';

class DefaultTextBox extends StatelessWidget {
  DefaultTextBox({required this.child, super.key});

  late Widget child;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 800.0,
      child: child,
    );
  }
}

class DefaultContentsBox extends StatelessWidget {
  DefaultContentsBox({required this.child, super.key});

  late Widget child;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: SizedBox(
        width:
            ResponsiveValue(context, defaultValue: 1200.0, conditionalValues: [
          const Condition.equals(name: 'DESKTOP2', value: 1050.0),
          const Condition.equals(name: 'DESKTOP3', value: 950.0),
          const Condition.equals(name: TABLET, value: 760.0),
          const Condition.equals(name: 'TABLET2', value: 540.0),
          const Condition.equals(name: MOBILE, value: 440.0),
        ]).value!,
        child: child,
      ),
    );
  }
}

//unuse
// class TitleBox extends StatelessWidget {
//   TitleBox({required title, required date, super.key});

//   late String title;
//   late String date;

//   @override
//   Widget build(BuildContext context) {
//     return Padding(
//       padding: EdgeInsets.fromLTRB(
//           0,
//           ResponsiveValue(context, defaultValue: 80.0, conditionalValues: [
//             const Condition.smallerThan(name: 'DESKTOP3', value: 30.0)
//           ]).value!,
//           0,
//           100),
//       child: Column(
//         children: [
//           // padding between title&description and text
//           // this is wrapper for title & description
//           Padding(
//             padding: const EdgeInsets.only(bottom: 50),
//             child: SizedBox(
//               width: ResponsiveValue(context,
//                   defaultValue: 440.0,
//                   conditionalValues: [
//                     const Condition.smallerThan(name: TABLET, value: 240.0)
//                   ]).value,
//               child: Column(
//                 crossAxisAlignment: CrossAxisAlignment.center,
//                 children: [
//                   HeadTilteText(text: title),
//                   const SizedBox(
//                     height: 38,
//                   ),
//                   BodySmallText(
//                     text: date,
//                     textAlign: TextAlign.center,
//                   )
//                 ],
//               ),
//             ),
//           ),
//         ],
//       ),
//     );
//   }
// }
