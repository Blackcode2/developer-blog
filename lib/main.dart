import 'pages/home_page.dart';
import 'package:flutter/material.dart';
import 'package:responsive_framework/responsive_framework.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Blackcode2 Blog',
      theme: ThemeData(
        // colorScheme: lightColorScheme,
        scaffoldBackgroundColor: const Color.fromARGB(54, 177, 196, 241),
        fontFamily: "Inter",
        useMaterial3: true,
      ),
      // darkTheme: ThemeData(
      //   colorScheme: darkColorScheme,
      //   useMaterial3: true,
      // ),
      builder: (context, child) => ResponsiveBreakpoints.builder(
        child: child!,
        breakpoints: [
          const Breakpoint(start: 0, end: 450, name: "PHONE"),
          const Breakpoint(start: 451, end: 576, name: MOBILE),
          const Breakpoint(start: 577, end: 768, name: "TABLET2"),
          const Breakpoint(start: 769, end: 1024, name: TABLET),
          const Breakpoint(start: 1025, end: 1130, name: 'DESKTOP3'),
          const Breakpoint(start: 1131, end: 1300, name: 'DESKTOP2'),
          const Breakpoint(start: 1301, end: 1920, name: DESKTOP),
          const Breakpoint(start: 1921, end: double.infinity, name: '4K'),
        ],
      ),
      home: HomePage(),
    );
  }
}
