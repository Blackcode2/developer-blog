'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "927c941ebeac9228591fa241b62763e8",
"/": "927c941ebeac9228591fa241b62763e8",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "8fac3349b566e73005b1fcc307cde714",
"assets/fonts/MaterialIcons-Regular.otf": "74b99f0a1e9caadcad9381d412a30de0",
"assets/AssetManifest.bin.json": "ef996895a901c7bbffaa7e6b51ff5689",
"assets/assets/images/default.jpg": "835eaaa1997fa78211cb91482513a9e8",
"assets/assets/images/profile-image.png": "1a24a6b7e011cd33238e8ebb6a3031fc",
"assets/assets/images/github-mark.png": "43ce87609eb221d09d4832a9c0e709d0",
"assets/assets/posts/flutter_state/images/reload.jpg": "eb4515b8114ea43fa1c73a9d0acd3fbd",
"assets/assets/posts/flutter_state/images/widget-tree.jpg": "c3d64f265abd30d148fa3ac30d35b621",
"assets/assets/posts/flutter_state/metadata.json": "f7e8939c63c9a17973ce47dbba324178",
"assets/assets/posts/flutter_state/2023-08-28-flutter%2520state.md": "8615ab27a9f5b4f2ccc2381f29421617",
"assets/assets/posts/simple_market_app/images/modalBottomGif.gif": "5cd07a944cca45e2ab26483a8f9d6109",
"assets/assets/posts/simple_market_app/images/creationOfchat2.png": "c95106f670327ae4949fef5ba81b8928",
"assets/assets/posts/simple_market_app/images/chattingButtonCode1.png": "abb1272b11ad000e7393691cd4f091ef",
"assets/assets/posts/simple_market_app/images/firestoreStreamCode2.png": "602d9bae161fb6f616964fdde90b1267",
"assets/assets/posts/simple_market_app/images/collectionChats.png": "520946b9bd9f4d4da96ceba995fd104a",
"assets/assets/posts/simple_market_app/images/itemCode.png": "ca59d7f396730d9df964e18b7b2aa2ec",
"assets/assets/posts/simple_market_app/images/firebaseCLILogIN.jpg": "aea0c2d54d8c88260b61157e64382d30",
"assets/assets/posts/simple_market_app/images/showModalCode.png": "c0ce04231509c1084ea943752deae767",
"assets/assets/posts/simple_market_app/images/updatePageCompareCode.jpg": "4827cb2766cc6c03fa95c8527acfdd48",
"assets/assets/posts/simple_market_app/images/chattingButtonCode2.png": "24b95b42bc8b997cdfd0d6fc6fb64f34",
"assets/assets/posts/simple_market_app/images/cliCommand3.jpg": "6351780ea7ca862395277ebb9bbe703b",
"assets/assets/posts/simple_market_app/images/firebaseDoc.jpg": "5f483a8c5984d190655fa1a06d178c94",
"assets/assets/posts/simple_market_app/images/chattingDemo3.png": "a1debf5e63df10dbca1dc9d71dcdef47",
"assets/assets/posts/simple_market_app/images/dotsProviderCode.png": "6798f22b416100bfbba4f6d9f5a7a890",
"assets/assets/posts/simple_market_app/images/deleteCode.png": "fc1780c12988a3d01dd0e322f3911623",
"assets/assets/posts/simple_market_app/images/postProductFormCode.png": "9d24f245c224cfdb162404f512145711",
"assets/assets/posts/simple_market_app/images/collectionField.jpg": "82364e9cbc569b795b00abcb01f517d7",
"assets/assets/posts/simple_market_app/images/homePageProfileCode.png": "21662082131fe7df3492275a899f80f5",
"assets/assets/posts/simple_market_app/images/addFirebasetoFlutter.jpg": "42ca98c55d96eee71031c20f4783d3ef",
"assets/assets/posts/simple_market_app/images/userChat.png": "d7cd52b2df40048a62773bf45c87c22d",
"assets/assets/posts/simple_market_app/images/chatRoomCode.png": "ee0fa637cf9e1dcbb34873727a2a7bb5",
"assets/assets/posts/simple_market_app/images/firebaseTools.png": "013f3de7b2e374a601a171cb30be5086",
"assets/assets/posts/simple_market_app/images/updateButtonCode.png": "530e60b38397a68356dc62ac22032691",
"assets/assets/posts/simple_market_app/images/mainPageCode2.png": "4045252c10881639324e2fbf0666d086",
"assets/assets/posts/simple_market_app/images/itemCarouselGif.gif": "2e997581138c5e01d605473d23b2ee37",
"assets/assets/posts/simple_market_app/images/chattingPost.PNG": "66f44ceb0219624558c97fd477aef721",
"assets/assets/posts/simple_market_app/images/chatPageCode.png": "8ec8b00864b99b637e682eda8ffaf76b",
"assets/assets/posts/simple_market_app/images/profileNameExist.jpg": "9c4f8a27c4417e22504405252be6ff9a",
"assets/assets/posts/simple_market_app/images/item.jpg": "e0d4897cf407629d436b59cc5c453a90",
"assets/assets/posts/simple_market_app/images/sendingChat.png": "a7c260d2f7b2f2df2a2297b7b7513163",
"assets/assets/posts/simple_market_app/images/messageCode.png": "c170b065a80eadb121c7cc609b5aa059",
"assets/assets/posts/simple_market_app/images/firestoreDataItems.jpg": "784efcf86d0b683743441f758855b194",
"assets/assets/posts/simple_market_app/images/postProductOkCode.png": "e8bebfc983ee59b97fef38219f2b0a5a",
"assets/assets/posts/simple_market_app/images/signinMethod.jpg": "3ee9e3e5e956a9da5b42ca0af62c48c9",
"assets/assets/posts/simple_market_app/images/cloud_firestore.jpg": "be33db8c935f95e3539f42046a3d9032",
"assets/assets/posts/simple_market_app/images/itemCarouselCode.png": "7f034c34e7e4156a4b2f0214f4f663d7",
"assets/assets/posts/simple_market_app/images/profileImageGif.gif": "e9e3039df985d7650f7534c9bf6dff07",
"assets/assets/posts/simple_market_app/images/findingPassword.jpg": "21b894ac3d75b20fdf4931474f1ed01c",
"assets/assets/posts/simple_market_app/images/creationOfchat3.png": "d04eca4250c3083eee6c70e40cd0f5a9",
"assets/assets/posts/simple_market_app/images/validationButton.png": "0ff11d02e10d1a73d2745f19e64c6cbb",
"assets/assets/posts/simple_market_app/images/cliCommand2.jpg": "e8eece5a62e3a906cf178b9f15a55b1b",
"assets/assets/posts/simple_market_app/images/loginPageCode.png": "45ced42e1ee63d0201eb05c51308974a",
"assets/assets/posts/simple_market_app/images/chatPreviewCode.png": "36eab6cd17b0ff10246ac74fc016952d",
"assets/assets/posts/simple_market_app/images/postProductImagesCode2.png": "c0ae9d64d58d9d2717ab3bd7d119fbdc",
"assets/assets/posts/simple_market_app/images/modalBottomNotMine.jpg": "03b486e2e385bc895c3c4650d748356f",
"assets/assets/posts/simple_market_app/images/profileCode.png": "d3d6a00859ae5ec6d51e2ff4c251ffeb",
"assets/assets/posts/simple_market_app/images/firebaseLogIn.jpg": "b2522b6b1f660518b21dd3b1d7e76e14",
"assets/assets/posts/simple_market_app/images/form.png": "bff9cf4390b703b8a814e048006f10aa",
"assets/assets/posts/simple_market_app/images/firebaseAddNew.jpg": "4c50e60dd28960ba85a6daed096f4852",
"assets/assets/posts/simple_market_app/images/chatRoom.png": "c3e3c655ecd1cc8e5f6f49681185ac57",
"assets/assets/posts/simple_market_app/images/chattingDemo2.png": "11f2cf729c75b30a1cec2ad1878ec17c",
"assets/assets/posts/simple_market_app/images/firebaseLogInSu.jpg": "309e28e37ef3f85277e7aa5d72496126",
"assets/assets/posts/simple_market_app/images/addFirebaseToFlutter2.jpg": "306527a0d25e548574a7c5dd94dcb3c0",
"assets/assets/posts/simple_market_app/images/mainPageCode.png": "e163eab4161cf0a58d220bcd1748cba6",
"assets/assets/posts/simple_market_app/images/logoutCode.png": "56fb8ced771842122753926448a890d6",
"assets/assets/posts/simple_market_app/images/loginPage.jpg": "a224d9424aec170372d1bbbc2b630562",
"assets/assets/posts/simple_market_app/images/updatePageCompareCode2.jpg": "dc85267efb336458751053c76d6876ab",
"assets/assets/posts/simple_market_app/images/messageTextFieldCode.png": "cccd16ab3eab75fd33fe4ed1573b5715",
"assets/assets/posts/simple_market_app/images/logout.gif": "815cabea82389cc183ae3adcb1f26e8b",
"assets/assets/posts/simple_market_app/images/register.jpg": "520a75d5eb58509439e8f8c94bc3ed82",
"assets/assets/posts/simple_market_app/images/uploadImage.png": "899c044f29e3c093f2470e861a170e61",
"assets/assets/posts/simple_market_app/images/loginPageCode2.png": "255215287a88d98111f427dd716657b3",
"assets/assets/posts/simple_market_app/images/firebaseUiAuth.jpg": "291fdd8746ef9c2acbb492f33f8c9a90",
"assets/assets/posts/simple_market_app/images/itemDetailFirestore.jpg": "abd70a890596e2b317a16c9aef8efb4e",
"assets/assets/posts/simple_market_app/images/firestoreDatabase.jpg": "1a16cc9475648f4ad51835f99e1c7f57",
"assets/assets/posts/simple_market_app/images/mainPage.jpg": "d745d8e9490b1e4dada6672edadb388c",
"assets/assets/posts/simple_market_app/images/creationOfchat.png": "5baea2cf919067edbd97a76ae8c035f5",
"assets/assets/posts/simple_market_app/images/chatPageGif.gif": "75e1f7d53fad6ac911de0211709f346d",
"assets/assets/posts/simple_market_app/images/addFirebaseToFlutter3.jpg": "b76f0845fd142a7d279dd62fc0b61e41",
"assets/assets/posts/simple_market_app/images/login.jpg": "73c20dd46a1512b0da023fced6994a25",
"assets/assets/posts/simple_market_app/images/profile.jpg": "61d804ff0cfa98970811c9e50cacf1e6",
"assets/assets/posts/simple_market_app/images/installCLI.jpg": "25a9098cef7908803031b289bced1617",
"assets/assets/posts/simple_market_app/images/postProductImagesCode.png": "0f34e42c1c2c79d802310e941fe80dcc",
"assets/assets/posts/simple_market_app/images/firebaseRules2.png": "1777b27823e004725ed230fad7f7c709",
"assets/assets/posts/simple_market_app/images/updateTestGif.gif": "ac768290ba6547ba0a7e1f093e3a639e",
"assets/assets/posts/simple_market_app/images/chattingDemo3Gif.gif": "167d3baafdfcf329e1d8e1c09b49ffcd",
"assets/assets/posts/simple_market_app/images/path.jpg": "227ef62d0807dbaf0e5730e17fd1c3bf",
"assets/assets/posts/simple_market_app/images/firebaseAuth.jpg": "8d189245bf5cb19f99972b6bd9a4a0ca",
"assets/assets/posts/simple_market_app/images/postProductImagesGif.gif": "fb41bb54507b9dfde4fa276edfecbb7e",
"assets/assets/posts/simple_market_app/images/deletingGif.gif": "de79cc265f2be76a7273a378bfb80b47",
"assets/assets/posts/simple_market_app/images/deleteCodeWrong.png": "66e8ae278909fb68ee9ee50cb4a54f8c",
"assets/assets/posts/simple_market_app/images/imagePicker.jpg": "ccb380517b1225bf09619d99095511e1",
"assets/assets/posts/simple_market_app/images/imageProvider1.png": "655eb2b8b603c2171e8d7558f6b4f0bd",
"assets/assets/posts/simple_market_app/images/cliCommand4.jpg": "87cd48a888b6bd38e77c874189e5bd8f",
"assets/assets/posts/simple_market_app/images/homePageCode.png": "f50d4f2285bfbfb026d4fc59ad3aec11",
"assets/assets/posts/simple_market_app/images/createDatabase.jpg": "bda88354fd05a70c3a2b9b0abd4e696b",
"assets/assets/posts/simple_market_app/images/loginPageStream.png": "814c0aa2c32935d376a311aeaad4234a",
"assets/assets/posts/simple_market_app/images/firestoreStreamCode.png": "75866bba4b680d77cfa2d202a19d6a3a",
"assets/assets/posts/simple_market_app/images/storage2.jpg": "c3a7736e6fa31817ce7630be8fa48e03",
"assets/assets/posts/simple_market_app/images/updateTextFormCode.png": "747aed2fdf551d61e0fc553d7b2efcbd",
"assets/assets/posts/simple_market_app/images/updatePage.jpg": "81be60731e72f7ca7253ec2b05f9745e",
"assets/assets/posts/simple_market_app/images/itemDetailCode1.png": "6e8d1582b224babc0abaca6e368da457",
"assets/assets/posts/simple_market_app/images/mainPageGif.gif": "f3ee843a0e7b3415d2aa1a13d39acdb9",
"assets/assets/posts/simple_market_app/images/postPage.jpg": "7e965d589cfa56145a302bc530eead66",
"assets/assets/posts/simple_market_app/images/loginPageCus.png": "42322241985464f7237a54e1a286ba90",
"assets/assets/posts/simple_market_app/images/createDatabase2.jpg": "a618492cdaef48fe6eae3dd993ab30c1",
"assets/assets/posts/simple_market_app/images/chatsCollection.png": "a71f47e200b9fb52726d53dd0306447b",
"assets/assets/posts/simple_market_app/images/profileImagePicker.png": "1af60f1df5cc59ea67f91f99d1461029",
"assets/assets/posts/simple_market_app/images/myTestProject.jpg": "a4e8f9625dfaaaa3e894579022d183eb",
"assets/assets/posts/simple_market_app/images/imgListCode.png": "e1436dad47dc2708f7f3d69e0dd37648",
"assets/assets/posts/simple_market_app/images/cliCommand1.jpg": "63b056e80becfd95d328131d4f2d5bbf",
"assets/assets/posts/simple_market_app/images/firebaseRules.png": "32eedda5351386113aa121bbf343d971",
"assets/assets/posts/simple_market_app/images/setName.png": "7fc8d579b4e1d78407a96d30f8be6a42",
"assets/assets/posts/simple_market_app/images/initializeFirebase.jpg": "2fc192cd36e5ab00cda941679f19ebca",
"assets/assets/posts/simple_market_app/images/storage1.jpg": "e544a0a5a33462058eaebcf7b4c2d9f0",
"assets/assets/posts/simple_market_app/images/chattingDemo.png": "6a88262d62b0e6d76987ab8b97f4cef7",
"assets/assets/posts/simple_market_app/images/itemDetail.jpg": "be62a4b8fa75bbd55e05d9956acb8811",
"assets/assets/posts/simple_market_app/metadata.json": "f72359ded637b53d894ac57d410c6990",
"assets/assets/posts/simple_market_app/2023-10-23-simple%2520market.md": "6d162efa7328d63d0b30fbdb9a58334f",
"assets/assets/posts/circular_linked_list/images/circularlyLinkedList.png": "1418a1c85dc30441b4b45c06d8e7d549",
"assets/assets/posts/circular_linked_list/2024-03-22-circular%2520linked%2520list.md": "efee7e3f3785791a0febcd5dd4318178",
"assets/assets/posts/circular_linked_list/metadata.json": "8b62ff16d710e864880ea21fd8fc78c2",
"assets/assets/posts/portfolio_blog/2023-07-09-flutter%2520portfolio%2520blog.md": "d86464d8711a8852c453bf65869c64f0",
"assets/assets/posts/portfolio_blog/images/metadata.jpg": "94ec8c1c580c5714ec8ca4741293b6c1",
"assets/assets/posts/portfolio_blog/images/settings-pages.jpg": "8f49324254d85a305936f1f14c54433f",
"assets/assets/posts/portfolio_blog/images/tablet.jpg": "67a2a9bfdd26fc068f5436fead6ae2bc",
"assets/assets/posts/portfolio_blog/images/responsive_framework.jpg": "3530e631209013fe92a703ec15c922e7",
"assets/assets/posts/portfolio_blog/images/assets-blog.jpg": "bf88b7a1a0036435d617ceb2cdf9a511",
"assets/assets/posts/portfolio_blog/images/libFolder.jpg": "2be98652630da81276cfae88430a10ae",
"assets/assets/posts/portfolio_blog/images/projects-folder.jpg": "66258eaeebdade3da50ba283fc4338cb",
"assets/assets/posts/portfolio_blog/images/home-page.jpg": "16b66fb0babc1188ff2f8ab7842fbb23",
"assets/assets/posts/portfolio_blog/images/launchUrl.jpg": "ad6f7b997e8924a7610fefa9dbda4de7",
"assets/assets/posts/portfolio_blog/images/drawer.jpg": "8c0a5b4d598060a5c4bde980fe0fb5a1",
"assets/assets/posts/portfolio_blog/images/desktop3.jpg": "2b4ae1fab3a37982b7a4296d4e49db91",
"assets/assets/posts/portfolio_blog/images/actions.jpg": "662e1fa36e4fea91d54038f03b88e071",
"assets/assets/posts/portfolio_blog/images/create-repository.jpg": "d6ce6de69606b0c1aa527f57a9114d90",
"assets/assets/posts/portfolio_blog/images/post-page.jpg": "7f8a6d467446c5d3bb6eb2d53b95fd7c",
"assets/assets/posts/portfolio_blog/images/grid-max.jpg": "4311f5f366dc395793cd90e076991846",
"assets/assets/posts/portfolio_blog/images/blog-card.jpg": "5874b3c29d710121f7bbf5691446dfed",
"assets/assets/posts/portfolio_blog/images/breakpoint.jpg": "4bcdc370f7ca23820d9f9170ca49b421",
"assets/assets/posts/portfolio_blog/images/project-card.jpg": "5108c96379991b628aac5626455da6a0",
"assets/assets/posts/portfolio_blog/images/github-button.jpg": "bd9141fb7ad53d931078f664cdc6db5b",
"assets/assets/posts/portfolio_blog/images/grid-fixed.jpg": "69dfa8d1d6a6a28b40b2e3b549bfedd0",
"assets/assets/posts/portfolio_blog/images/projects-page.jpg": "519f1aa7b4f47d7a69dd03f13286e135",
"assets/assets/posts/portfolio_blog/images/project-section.jpg": "1b2f9e8eb18e1bf23749ba4268049edb",
"assets/assets/posts/portfolio_blog/images/portfolio-blog.jpg": "9197b65f08bc5ec09f592e23dacc5e8b",
"assets/assets/posts/portfolio_blog/images/build-web-assets.jpg": "7521c5625b024b768e20e5b6e951110b",
"assets/assets/posts/portfolio_blog/images/desktop.jpg": "9db6793548d5f368081828623cf79dd3",
"assets/assets/posts/portfolio_blog/images/assets.jpg": "2df270c9a23c5c477f800c9964f893a4",
"assets/assets/posts/portfolio_blog/images/top-navigation-bar.jpg": "719454ca02a8b0343a17f43baecc73eb",
"assets/assets/posts/portfolio_blog/images/projects-list.jpg": "f2fd9568916d16a582b61cbfcc6249f5",
"assets/assets/posts/portfolio_blog/images/workflow-folder.jpg": "ef6c37b2007351281c2e0b36b9ef9d7c",
"assets/assets/posts/portfolio_blog/images/vonge-theme.jpg": "ba1038129bc2f19aff2def50863495bb",
"assets/assets/posts/portfolio_blog/images/blog-section.jpg": "fefa517b69d839509be63db614befbc4",
"assets/assets/posts/portfolio_blog/images/build-web.jpg": "9b882ab4214b1569da9ba763fb3a1723",
"assets/assets/posts/portfolio_blog/metadata.json": "6eb7a690756d58266d0a5755e1d40fb1",
"assets/assets/posts/simple_movie_app/images/json-data.jpg": "64054ca1902fa90270fb8eb39ae178c1",
"assets/assets/posts/simple_movie_app/images/tmdb.jpg": "9ec11e0cd180edfc9f77436ba57c3706",
"assets/assets/posts/simple_movie_app/images/buildSuggestionsS.png": "46c1b1fa7dfd319a78e880cd8b3acc5d",
"assets/assets/posts/simple_movie_app/images/buildSuggestionsS2.png": "c5fd632b06b41131e74c6d520df65b5e",
"assets/assets/posts/simple_movie_app/images/file-structure.jpg": "f523a6bf5d4e32e8869b97aa1cc74bc5",
"assets/assets/posts/simple_movie_app/images/simpleMovie-home.jpg": "daa6a46cf204fcd812821d1fe7c54a66",
"assets/assets/posts/simple_movie_app/images/tmdb-api.jpg": "0e13f87e1959cb6ebf349777f7ce2a1d",
"assets/assets/posts/simple_movie_app/images/loadSuggestion.png": "8479f6cc71166853e5e69ea4f340d11f",
"assets/assets/posts/simple_movie_app/images/buildLeadingGif.gif": "717bd787a2badb7e7a25c970f72ad744",
"assets/assets/posts/simple_movie_app/images/searchProvider.png": "666624ad5f352ec69789bb0d426086be",
"assets/assets/posts/simple_movie_app/images/buildSuggestionsGif.gif": "ec523360521a5814abf38c7aa140e5f4",
"assets/assets/posts/simple_movie_app/images/moviePosterGif.gif": "5cc63c16a29cd972ed7381276a69b96e",
"assets/assets/posts/simple_movie_app/images/buildActionsGif.gif": "65cb045e75e66bd27c13b91d3da047f8",
"assets/assets/posts/simple_movie_app/images/searchDelegate.png": "c714620a0675b49cb0c946db228fc6f0",
"assets/assets/posts/simple_movie_app/images/model-generator.jpg": "81e979de10a64d6a1c4ef11bf03459b7",
"assets/assets/posts/simple_movie_app/images/buildActions.png": "5ddf5815af17aa04acecb3144e826fbc",
"assets/assets/posts/simple_movie_app/images/detail-page.jpg": "34a9124581fc9541e2553f908b581371",
"assets/assets/posts/simple_movie_app/images/generator-result.jpg": "82346005f4fa1586fc4d8f21e1fec077",
"assets/assets/posts/simple_movie_app/images/now-playing.jpg": "29908a90dd8a704e3efb1c1d12369550",
"assets/assets/posts/simple_movie_app/images/searchWidget.png": "12c60bf84d3a3cd6747cab951b3e0f7a",
"assets/assets/posts/simple_movie_app/images/queryChange.png": "1d6661e4ada700ddc4ff67e8b2f4171d",
"assets/assets/posts/simple_movie_app/images/buildResults.png": "188b4a76050e52b6a983227b7c0c379d",
"assets/assets/posts/simple_movie_app/images/mvvm.png": "bbaa557b3921e6c81628ebfc87c907fa",
"assets/assets/posts/simple_movie_app/images/buildResultsGif.gif": "8bba7e76900fc595c82a0310ffc49dad",
"assets/assets/posts/simple_movie_app/images/searchRepository.png": "5a205aec6209b3cf81d98c5a1f754fc2",
"assets/assets/posts/simple_movie_app/images/tmdb-api-doc.jpg": "92809e0a2ac51395ee29dfa7f597c67f",
"assets/assets/posts/simple_movie_app/images/carousellGif.gif": "927236b7bcd3b9d5ba8520cf1e21f880",
"assets/assets/posts/simple_movie_app/images/searchProviderS.png": "aa8c6362b195e00e8c0593c771d80f7f",
"assets/assets/posts/simple_movie_app/images/buildLeading.png": "70ed42845744efc571dbabc25f4ceea4",
"assets/assets/posts/simple_movie_app/metadata.json": "b7bf50531d1319a023f30262402dd521",
"assets/assets/posts/simple_movie_app/2023-10-23-simple%2520movie.md": "ca7d48f47258306ea8acff4e56737ac2",
"assets/assets/posts/data_structure&time_complexity/images/typeOfDataStructure.png": "f29baf445d5659503d6ba37cec5c3602",
"assets/assets/posts/data_structure&time_complexity/images/bigO.png": "f23c0fe0a31e0b5ba8259d990b5573da",
"assets/assets/posts/data_structure&time_complexity/2024-03-15-data%2520structure1.md": "718d06d0104ace1929dee5dd0abd3630",
"assets/assets/posts/data_structure&time_complexity/metadata.json": "43ff153c720a2e5db753e6a6f5a72161",
"assets/assets/posts/dart_CRUD/images/menu.jpg": "0f848cf644877282531029375374c0f6",
"assets/assets/posts/dart_CRUD/images/update1.jpg": "68b190e5ee7356580acbdd10450d167b",
"assets/assets/posts/dart_CRUD/images/modalBottomGif.gif": "5cd07a944cca45e2ab26483a8f9d6109",
"assets/assets/posts/dart_CRUD/images/viewlist_linked.jpg": "0da17fe5f93fd87b4a7fb6c6c0421e7d",
"assets/assets/posts/dart_CRUD/images/delete_linked2.jpg": "f13aaff79617fb246740037f2e3ca9d4",
"assets/assets/posts/dart_CRUD/images/update_linked.jpg": "baf857c4325988f70eefe0b8ada6740d",
"assets/assets/posts/dart_CRUD/images/delete1.jpg": "73be6d653954389c85cccaae557a1bb8",
"assets/assets/posts/dart_CRUD/images/Circularlinkedlist.png": "c8b59e75bc5f74f9097a9863857e51a0",
"assets/assets/posts/dart_CRUD/images/Singlelinkedlist.png": "c45991bf5863c0112069848a025e298b",
"assets/assets/posts/dart_CRUD/images/addNew2.jpg": "fff0200f2963aea87404d318c4f0aa54",
"assets/assets/posts/dart_CRUD/images/addNew_linked.jpg": "5d85c9850066faa3e9f007660860e1ed",
"assets/assets/posts/dart_CRUD/images/update2.jpg": "68d01e339222ed8d436e63769279a119",
"assets/assets/posts/dart_CRUD/images/delete_linked1.jpg": "bfbc85f07e17f0ca584717dbce3bf3ef",
"assets/assets/posts/dart_CRUD/images/addNew1.jpg": "34babebc0db00aa1dd78159ff2f968d7",
"assets/assets/posts/dart_CRUD/images/viewlist.jpg": "617d60c32b1ffee83268e69f17245882",
"assets/assets/posts/dart_CRUD/images/Doublylinkedlist.png": "705a9d41d0879b28f5071fbc79dc1d00",
"assets/assets/posts/dart_CRUD/images/exit.jpg": "8048c64aa6230f2d389f724492262f13",
"assets/assets/posts/dart_CRUD/images/delete2.jpg": "24d68ca5d119de319e45b28bbd645b52",
"assets/assets/posts/dart_CRUD/metadata.json": "3abc695fc2615a000e1e0bfa4e4cff13",
"assets/assets/posts/dart_CRUD/2023-08-19-crud%2520dart.md": "d21c08ded681aaa4194e969e4c153c6b",
"assets/assets/posts/singly_linked_list/images/singlyLinkedList.png": "aacea58a5b5706ac021bbee6e33762bc",
"assets/assets/posts/singly_linked_list/images/addData.gif": "bfdb8c10a7e844f1ded4a5252d11f444",
"assets/assets/posts/singly_linked_list/images/linkedListClass.png": "a84aea1d391d0361e41ca2f5caff6a07",
"assets/assets/posts/singly_linked_list/metadata.json": "7409b746b49cbc62f7d54425f35cb92e",
"assets/assets/posts/singly_linked_list/2024-03-21-singly%2520linked%2520list.md": "6aa7e66eb1677086ecf6a47873b92d0d",
"assets/assets/posts/projects_list.json": "b6b236d7317cd9a1b212bef226e5cba5",
"assets/assets/posts/simple_weather_app/images/main_section.jpg": "fe639b875a361752abd5b6d3e183e89d",
"assets/assets/posts/simple_weather_app/images/half_gradi.jpg": "cccf65ea99743fdadcede3a17729ee46",
"assets/assets/posts/simple_weather_app/images/default_gradi.jpg": "4d752fb8920141c7583af186d1c1c402",
"assets/assets/posts/simple_weather_app/images/statusbar-tran.jpg": "ce8691dd05b60f0deb8e5ac430ca87e5",
"assets/assets/posts/simple_weather_app/images/hourly.jpg": "f8c7560ce4aa12206d8dd3ac8a46eb5a",
"assets/assets/posts/simple_weather_app/images/listView.jpg": "6de2c52707bf4b27147c25846621f0fb",
"assets/assets/posts/simple_weather_app/images/listViewSized.jpg": "c58f9a006df49fe66c6841e068586755",
"assets/assets/posts/simple_weather_app/images/listViewExpand.jpg": "20c9da32c6a15b8dc61ea169d656e925",
"assets/assets/posts/simple_weather_app/images/statusbar.jpg": "8e3985266acb7027df730054bb2fd9a0",
"assets/assets/posts/simple_weather_app/images/permission.jpg": "dfd29c7aebb66e55f8bbf7a6b36c82b0",
"assets/assets/posts/simple_weather_app/images/openWeather.jpg": "e65d598ef3723394b8c09cf4f335e3e5",
"assets/assets/posts/simple_weather_app/images/gradi2.jpg": "29048311396b14400f9989c6bce18e4a",
"assets/assets/posts/simple_weather_app/images/simpleWeatherApp.jpg": "73e6264e30953f6f76c73214424cf467",
"assets/assets/posts/simple_weather_app/images/default_appbar.jpg": "e28c672c85a2bf9fcb8b73466e77a7fe",
"assets/assets/posts/simple_weather_app/images/appbar2.jpg": "53f2e8caf9dd624aa4c8bfbbf1843e82",
"assets/assets/posts/simple_weather_app/2023-08-28-simple%2520weather%2520app.md": "74fa4ba4c85d5844f28d637428e34fe9",
"assets/assets/posts/simple_weather_app/metadata.json": "c7d4ce6966ade0d57ea00d856af1a3a1",
"assets/assets/posts/flutter_async/images/default.jpg": "835eaaa1997fa78211cb91482513a9e8",
"assets/assets/posts/flutter_async/metadata.json": "710a1101bd15633a1c3c33be5be5d553",
"assets/assets/posts/flutter_async/2023-09-04-flutter%2520async.md": "299def0ce887b8811e013a74071ddc67",
"assets/assets/posts/blogs_list.json": "11a0e19a565472d279d8f5f3a1955a21",
"assets/assets/posts/flutter_provider/images/two-state.jpg": "012308b450962f218a55e3eba975a374",
"assets/assets/posts/flutter_provider/images/consumer1.jpg": "1677bc95ca5057f9439e9ec55f08f84a",
"assets/assets/posts/flutter_provider/images/consumer2.jpg": "7a7a5874f62c2f34541df604f3c47a17",
"assets/assets/posts/flutter_provider/images/provider-diagram.jpg": "f4b1615f2b6b033d24221263b63badb0",
"assets/assets/posts/flutter_provider/images/one-state.jpg": "7eaf1446c57e6a71441f7e9479d8b6c9",
"assets/assets/posts/flutter_provider/images/example-app.jpg": "55cc8d807cfab45f82f360a083b3ef10",
"assets/assets/posts/flutter_provider/images/example-app-count.jpg": "f8cb860064bbdaaf28e7772736ef7d76",
"assets/assets/posts/flutter_provider/2023-09-07-flutter%2520provider.md": "dd3389db22919623b1318d7937c90aae",
"assets/assets/posts/flutter_provider/metadata.json": "853f7ce1112e60c22af83be72f388a15",
"assets/assets/posts/doubly_linked_list/2024-03-23-doubly%2520linked%2520list.md": "fd7f4589a20573d6cfc5a4614ed5213d",
"assets/assets/posts/doubly_linked_list/images/DLL.png": "e3e17efa5c67ba4e64b8ae3bc50b6b9e",
"assets/assets/posts/doubly_linked_list/images/DLL2.png": "ce8d244dea946b084503214d9a7512fa",
"assets/assets/posts/doubly_linked_list/metadata.json": "bef991c1237e310013ee5457dbb94de7",
"assets/assets/fonts/Inter-Bold.ttf": "d17c0274915408cee0308d5476df9f45",
"assets/assets/fonts/Inter-SemiBold.ttf": "1753a05196abeef95c32f10246bd6473",
"assets/assets/fonts/Inter-Medium.ttf": "16580ed788273749548eb27b9a9b674f",
"assets/assets/fonts/Inter-Regular.ttf": "a4a7379505cd554ea9523594b7c28b2a",
"assets/assets/fonts/Inter-ExtraBold.ttf": "e771faf703386b0c5863cc3df1e26ba1",
"assets/assets/fonts/Inter-Thin.ttf": "be37c2ebe9cd2e0719d1a9437858686f",
"assets/assets/fonts/Inter-Light.ttf": "60c8f64064078554b6469eeda25944eb",
"assets/assets/fonts/Inter-Black.ttf": "10215142a203211d9292c62ae0503a97",
"assets/assets/fonts/Inter-ExtraLight.ttf": "c36ac5a28afa9a4d70292df06a932ccd",
"assets/AssetManifest.bin": "e3df5f709b6b65fc2994547ba040ea91",
"assets/NOTICES": "7fb85bf0555f7a24c7bda7d5e8347e2c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.json": "161167cf44523d4930458e4999f317e2",
"version.json": "84faedd5d78f03ab1929e680a6fef173",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "850751fb7b75494ad2f4a84b7cae8634",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"main.dart.js": "e5d8bff33612042d7fb46fedbbf6964e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
