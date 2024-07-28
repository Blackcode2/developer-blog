import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:portfolio_blog/components/button_widget.dart';

class PostProvider with ChangeNotifier {
  // bolg folder name list
  List blogList = [];
  // project folder name list
  List projectList = [];

  // 처음 사이트 들어가면 loadTags를 통해 모든 포스트의 태그와 그에 맞는 파일명이 담기는 map
  Map<String, List> tagMap = {};

  // TagButton 위젯을 담는 리스트
  List<TagButton> tagButtonList = [];
  Set<String> selectedTags = {};
  Map selectedTagsMap = {};
  Set selectedFolder = {};
  // 최종 [[]] 리스트
  // List folderFileList = [];

  int _tagButtonCount = 0;

  get tagButtonCount => _tagButtonCount;

  void increaseTagButtonCount() {
    _tagButtonCount += 1;
    notifyListeners();
  }

  void decreaseTagButtonCount() {
    _tagButtonCount -= 1;
    notifyListeners();
  }

  Future loadPost() async {
    Map<String, dynamic> jsonData;

    await Future(() => rootBundle.loadString('assets/posts/post_list.json'))
        .then((value) {
      jsonData = jsonDecode(value);
      blogList = jsonData["blog_list"];
      projectList = jsonData["project_list"];
      loadTags();
    });
    notifyListeners();
  }

  // 웹 사이트 들어가면 비동기로 실행됨
  // 모든 포스트의 메타데이터에 저장된 태그를 불러옴
  Future loadTags() async {
    Set<String> tags = {};
    Map<String, dynamic> metaDataMap = {};

    // get tags for each post and put them into a Set
    for (var folder in blogList) {
      await Future(
        () => rootBundle.loadString("assets/posts/${folder}/metadata.json"),
      ).then((value) {
        // create Map for tag and folder name
        metaDataMap = jsonDecode(value);
        for (String tag in metaDataMap['tag']) {
          tags.add(tag);

          // tagMap = {tag: [folder name, folder name], };
          if (!tagMap.containsKey(tag)) {
            tagMap[tag] = [];
            tagMap[tag]!.add(folder);
          } else {
            tagMap[tag]!.add(folder);
          }
        }
      });
    }

    return;
  }

  Future getTagList() async {
    List tempKeyList = tagMap.keys.toList();
    tagButtonList = tempKeyList
        .map<TagButton>((value) => TagButton(
              text: value,
            ))
        .toList();

    return tagButtonList;
  }

  // 선택된 태그 버튼들로 [[folder name, file name]....] 리스트를 만든다
  // 태그 버튼이 선택 될때마다 실행
  addSelectedTagsMap() {
    for (var tag in selectedTags) {
      for (var folder in tagMap[tag]!) {
        selectedFolder.add(folder);
      }
      selectedTagsMap[tag] = tagMap[tag];
    }

    notifyListeners();
  }

  // 태그 버튼이 재선택 될때마다 지운다.
  removeSelectedTagsMap(String key) {
    List temp = selectedTagsMap[key];
    for (var folder in temp) {
      selectedFolder.remove(folder);
    }
    selectedTagsMap.remove(key);
    notifyListeners();
  }
}
