'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/NOTICES": "b24db733904d5abf2f703ea3f7219642",
"assets/AssetManifest.bin.json": "1da5ad9b6b7ab7e039a2bd4a86361a1c",
"assets/FontManifest.json": "8fac3349b566e73005b1fcc307cde714",
"assets/assets/fonts/Inter-Regular.ttf": "a4a7379505cd554ea9523594b7c28b2a",
"assets/assets/fonts/Inter-ExtraBold.ttf": "e771faf703386b0c5863cc3df1e26ba1",
"assets/assets/fonts/Inter-SemiBold.ttf": "1753a05196abeef95c32f10246bd6473",
"assets/assets/fonts/Inter-Medium.ttf": "16580ed788273749548eb27b9a9b674f",
"assets/assets/fonts/Inter-Light.ttf": "60c8f64064078554b6469eeda25944eb",
"assets/assets/fonts/Inter-Thin.ttf": "be37c2ebe9cd2e0719d1a9437858686f",
"assets/assets/fonts/Inter-Bold.ttf": "d17c0274915408cee0308d5476df9f45",
"assets/assets/fonts/Inter-Black.ttf": "10215142a203211d9292c62ae0503a97",
"assets/assets/fonts/Inter-ExtraLight.ttf": "c36ac5a28afa9a4d70292df06a932ccd",
"assets/assets/images/profile-image.png": "1a24a6b7e011cd33238e8ebb6a3031fc",
"assets/assets/images/default.jpg": "835eaaa1997fa78211cb91482513a9e8",
"assets/assets/images/github-mark.png": "43ce87609eb221d09d4832a9c0e709d0",
"assets/assets/posts/binary_search_tree/metadata.json": "f63a29499dcd611243b28153441fc552",
"assets/assets/posts/binary_search_tree/images/bst.png": "dc0137999147daa34d269a1ebe37bae5",
"assets/assets/posts/binary_search_tree/images/oneChild.png": "d60e6ef3e3f14e3c4b09f0aceb4e7768",
"assets/assets/posts/binary_search_tree/images/twoChildren.png": "7fee0623c07211cfb258f9533c8fcca5",
"assets/assets/posts/binary_search_tree/images/add.png": "0bbbe04e63ece7ca95c15216415df7b8",
"assets/assets/posts/binary_search_tree/images/noChild.png": "085e9dde711df1bf4ae16a002da1d313",
"assets/assets/posts/binary_search_tree/post.md": "d9b0c8ccd18a1d97bde520b60ddfa187",
"assets/assets/posts/flutter_async/metadata.json": "710a1101bd15633a1c3c33be5be5d553",
"assets/assets/posts/flutter_async/images/default.jpg": "835eaaa1997fa78211cb91482513a9e8",
"assets/assets/posts/flutter_async/post.md": "299def0ce887b8811e013a74071ddc67",
"assets/assets/posts/graph/metadata.json": "559b8382cdd6f1caeacb0c35eeee335a",
"assets/assets/posts/graph/images/multi.jpg": "585e6365bee60f5f5714be5e0941c435",
"assets/assets/posts/graph/images/graphType.jpg": "9dd3daa29ac4e8ec80e7431b2efdb02b",
"assets/assets/posts/graph/images/graph.png": "97b8252a479da256b9825035fc296ec3",
"assets/assets/posts/graph/images/list.jpg": "69fa85f183282f9c4c195a565d98a5be",
"assets/assets/posts/graph/images/weighted.jpg": "903676d3900521334c6ba4fbfafd3fd4",
"assets/assets/posts/graph/images/complete.jpg": "43a867ddef2e65fffbf5e03cf2bf229e",
"assets/assets/posts/graph/images/dfsBfs.jpg": "5c24a2928d4a24d2bc90645862c2b083",
"assets/assets/posts/graph/images/buildGraph.jpg": "bae34ab34e6845564f068ebaf7283cfb",
"assets/assets/posts/graph/images/diaDFS.jpg": "9783beee027fb6b798c75516ef1a97d5",
"assets/assets/posts/graph/images/diaBFS.jpg": "8ae70bd1945b2bfe32dad774544bc57a",
"assets/assets/posts/graph/images/recursiveDFS.jpg": "7f9f0f437b95272fb5a04642ca4b6891",
"assets/assets/posts/graph/post.md": "83be2092530e13972cf885d99124cf7a",
"assets/assets/posts/dart_CRUD/metadata.json": "3abc695fc2615a000e1e0bfa4e4cff13",
"assets/assets/posts/dart_CRUD/images/update2.jpg": "68d01e339222ed8d436e63769279a119",
"assets/assets/posts/dart_CRUD/images/menu.jpg": "0f848cf644877282531029375374c0f6",
"assets/assets/posts/dart_CRUD/images/viewlist_linked.jpg": "0da17fe5f93fd87b4a7fb6c6c0421e7d",
"assets/assets/posts/dart_CRUD/images/delete_linked1.jpg": "bfbc85f07e17f0ca584717dbce3bf3ef",
"assets/assets/posts/dart_CRUD/images/delete_linked2.jpg": "f13aaff79617fb246740037f2e3ca9d4",
"assets/assets/posts/dart_CRUD/images/Doublylinkedlist.png": "705a9d41d0879b28f5071fbc79dc1d00",
"assets/assets/posts/dart_CRUD/images/exit.jpg": "8048c64aa6230f2d389f724492262f13",
"assets/assets/posts/dart_CRUD/images/addNew1.jpg": "34babebc0db00aa1dd78159ff2f968d7",
"assets/assets/posts/dart_CRUD/images/delete1.jpg": "73be6d653954389c85cccaae557a1bb8",
"assets/assets/posts/dart_CRUD/images/Singlelinkedlist.png": "c45991bf5863c0112069848a025e298b",
"assets/assets/posts/dart_CRUD/images/modalBottomGif.gif": "5cd07a944cca45e2ab26483a8f9d6109",
"assets/assets/posts/dart_CRUD/images/addNew2.jpg": "fff0200f2963aea87404d318c4f0aa54",
"assets/assets/posts/dart_CRUD/images/update1.jpg": "68b190e5ee7356580acbdd10450d167b",
"assets/assets/posts/dart_CRUD/images/delete2.jpg": "24d68ca5d119de319e45b28bbd645b52",
"assets/assets/posts/dart_CRUD/images/Circularlinkedlist.png": "c8b59e75bc5f74f9097a9863857e51a0",
"assets/assets/posts/dart_CRUD/images/update_linked.jpg": "baf857c4325988f70eefe0b8ada6740d",
"assets/assets/posts/dart_CRUD/images/addNew_linked.jpg": "5d85c9850066faa3e9f007660860e1ed",
"assets/assets/posts/dart_CRUD/images/viewlist.jpg": "617d60c32b1ffee83268e69f17245882",
"assets/assets/posts/dart_CRUD/post.md": "d21c08ded681aaa4194e969e4c153c6b",
"assets/assets/posts/heap/metadata.json": "e212831e8a735cfd8000a02053685007",
"assets/assets/posts/heap/images/arrayTree.jpg": "a003d4ba0722907d77b6ecb78bf63b30",
"assets/assets/posts/heap/images/heapDelete.jpg": "5db5d39a250b438d66fe376e0b90509f",
"assets/assets/posts/heap/images/heapAdd.jpg": "8d1561cc6c5b2a39e5abbd3b12234f84",
"assets/assets/posts/heap/images/heap.jpg": "66695f87a68065d655616c87b5fe9072",
"assets/assets/posts/heap/post.md": "ad9c8f3000d8e0f2479760a59eaee213",
"assets/assets/posts/stack/metadata.json": "8a5ea4c7e09d39bd4002958b2cc79ca4",
"assets/assets/posts/stack/images/stack.png": "208de774035636daf3a71e795efe4b2b",
"assets/assets/posts/stack/images/push&pop.jpg": "735410bf5da0da0d583af16d8d602efb",
"assets/assets/posts/stack/post.md": "a795a596014dcfcf4b2e53098a06e97c",
"assets/assets/posts/recursion/metadata.json": "a39dc7060a2fc0e338b20bdbb8b0b6d9",
"assets/assets/posts/recursion/images/hanoi.png": "40d3e237bf8722a366077b10173e41e3",
"assets/assets/posts/recursion/images/processOfRecursion.jpg": "32c23249180c5a3f2377aee4ac51bb85",
"assets/assets/posts/recursion/images/fib.png": "057416b00ecd530cd2d1b2d7784bd778",
"assets/assets/posts/recursion/images/factorial2.png": "f88a2a072fe1aaaf31909c42abcb0eda",
"assets/assets/posts/recursion/images/factorial.png": "9159b630a616374525264eb8bdfa31de",
"assets/assets/posts/recursion/images/fibonacci.png": "14e8dfad6be4e78a2b9c4a6e59fb11b0",
"assets/assets/posts/recursion/post.md": "084ed904852d544db03645e799776e1e",
"assets/assets/posts/simple_weather_app/metadata.json": "c7d4ce6966ade0d57ea00d856af1a3a1",
"assets/assets/posts/simple_weather_app/images/openWeather.jpg": "e65d598ef3723394b8c09cf4f335e3e5",
"assets/assets/posts/simple_weather_app/images/simpleWeatherApp.jpg": "73e6264e30953f6f76c73214424cf467",
"assets/assets/posts/simple_weather_app/images/statusbar.jpg": "8e3985266acb7027df730054bb2fd9a0",
"assets/assets/posts/simple_weather_app/images/listViewExpand.jpg": "20c9da32c6a15b8dc61ea169d656e925",
"assets/assets/posts/simple_weather_app/images/appbar2.jpg": "53f2e8caf9dd624aa4c8bfbbf1843e82",
"assets/assets/posts/simple_weather_app/images/hourly.jpg": "f8c7560ce4aa12206d8dd3ac8a46eb5a",
"assets/assets/posts/simple_weather_app/images/default_gradi.jpg": "4d752fb8920141c7583af186d1c1c402",
"assets/assets/posts/simple_weather_app/images/listView.jpg": "6de2c52707bf4b27147c25846621f0fb",
"assets/assets/posts/simple_weather_app/images/default_appbar.jpg": "e28c672c85a2bf9fcb8b73466e77a7fe",
"assets/assets/posts/simple_weather_app/images/main_section.jpg": "fe639b875a361752abd5b6d3e183e89d",
"assets/assets/posts/simple_weather_app/images/permission.jpg": "dfd29c7aebb66e55f8bbf7a6b36c82b0",
"assets/assets/posts/simple_weather_app/images/listViewSized.jpg": "c58f9a006df49fe66c6841e068586755",
"assets/assets/posts/simple_weather_app/images/half_gradi.jpg": "cccf65ea99743fdadcede3a17729ee46",
"assets/assets/posts/simple_weather_app/images/gradi2.jpg": "29048311396b14400f9989c6bce18e4a",
"assets/assets/posts/simple_weather_app/images/statusbar-tran.jpg": "ce8691dd05b60f0deb8e5ac430ca87e5",
"assets/assets/posts/simple_weather_app/post.md": "74fa4ba4c85d5844f28d637428e34fe9",
"assets/assets/posts/simple_market_app/metadata.json": "f72359ded637b53d894ac57d410c6990",
"assets/assets/posts/simple_market_app/images/deleteCode.png": "fc1780c12988a3d01dd0e322f3911623",
"assets/assets/posts/simple_market_app/images/chatsCollection.png": "a71f47e200b9fb52726d53dd0306447b",
"assets/assets/posts/simple_market_app/images/mainPage.jpg": "d745d8e9490b1e4dada6672edadb388c",
"assets/assets/posts/simple_market_app/images/homePageCode.png": "f50d4f2285bfbfb026d4fc59ad3aec11",
"assets/assets/posts/simple_market_app/images/updatePageCompareCode2.jpg": "dc85267efb336458751053c76d6876ab",
"assets/assets/posts/simple_market_app/images/updateButtonCode.png": "530e60b38397a68356dc62ac22032691",
"assets/assets/posts/simple_market_app/images/cliCommand4.jpg": "87cd48a888b6bd38e77c874189e5bd8f",
"assets/assets/posts/simple_market_app/images/loginPageStream.png": "814c0aa2c32935d376a311aeaad4234a",
"assets/assets/posts/simple_market_app/images/sendingChat.png": "a7c260d2f7b2f2df2a2297b7b7513163",
"assets/assets/posts/simple_market_app/images/postProductFormCode.png": "9d24f245c224cfdb162404f512145711",
"assets/assets/posts/simple_market_app/images/chatPageCode.png": "8ec8b00864b99b637e682eda8ffaf76b",
"assets/assets/posts/simple_market_app/images/chattingButtonCode2.png": "24b95b42bc8b997cdfd0d6fc6fb64f34",
"assets/assets/posts/simple_market_app/images/loginPageCode2.png": "255215287a88d98111f427dd716657b3",
"assets/assets/posts/simple_market_app/images/homePageProfileCode.png": "21662082131fe7df3492275a899f80f5",
"assets/assets/posts/simple_market_app/images/imagePicker.jpg": "ccb380517b1225bf09619d99095511e1",
"assets/assets/posts/simple_market_app/images/loginPageCode.png": "45ced42e1ee63d0201eb05c51308974a",
"assets/assets/posts/simple_market_app/images/loginPage.jpg": "a224d9424aec170372d1bbbc2b630562",
"assets/assets/posts/simple_market_app/images/profileImagePicker.png": "1af60f1df5cc59ea67f91f99d1461029",
"assets/assets/posts/simple_market_app/images/firebaseRules2.png": "1777b27823e004725ed230fad7f7c709",
"assets/assets/posts/simple_market_app/images/register.jpg": "520a75d5eb58509439e8f8c94bc3ed82",
"assets/assets/posts/simple_market_app/images/updatePage.jpg": "81be60731e72f7ca7253ec2b05f9745e",
"assets/assets/posts/simple_market_app/images/profileImageGif.gif": "e9e3039df985d7650f7534c9bf6dff07",
"assets/assets/posts/simple_market_app/images/installCLI.jpg": "25a9098cef7908803031b289bced1617",
"assets/assets/posts/simple_market_app/images/updateTestGif.gif": "ac768290ba6547ba0a7e1f093e3a639e",
"assets/assets/posts/simple_market_app/images/signinMethod.jpg": "3ee9e3e5e956a9da5b42ca0af62c48c9",
"assets/assets/posts/simple_market_app/images/chattingDemo.png": "6a88262d62b0e6d76987ab8b97f4cef7",
"assets/assets/posts/simple_market_app/images/findingPassword.jpg": "21b894ac3d75b20fdf4931474f1ed01c",
"assets/assets/posts/simple_market_app/images/itemDetailFirestore.jpg": "abd70a890596e2b317a16c9aef8efb4e",
"assets/assets/posts/simple_market_app/images/initializeFirebase.jpg": "2fc192cd36e5ab00cda941679f19ebca",
"assets/assets/posts/simple_market_app/images/firestoreStreamCode.png": "75866bba4b680d77cfa2d202a19d6a3a",
"assets/assets/posts/simple_market_app/images/firebaseCLILogIN.jpg": "aea0c2d54d8c88260b61157e64382d30",
"assets/assets/posts/simple_market_app/images/mainPageCode.png": "e163eab4161cf0a58d220bcd1748cba6",
"assets/assets/posts/simple_market_app/images/itemCarouselCode.png": "7f034c34e7e4156a4b2f0214f4f663d7",
"assets/assets/posts/simple_market_app/images/firestoreDataItems.jpg": "784efcf86d0b683743441f758855b194",
"assets/assets/posts/simple_market_app/images/creationOfchat.png": "5baea2cf919067edbd97a76ae8c035f5",
"assets/assets/posts/simple_market_app/images/cliCommand1.jpg": "63b056e80becfd95d328131d4f2d5bbf",
"assets/assets/posts/simple_market_app/images/uploadImage.png": "899c044f29e3c093f2470e861a170e61",
"assets/assets/posts/simple_market_app/images/firebaseDoc.jpg": "5f483a8c5984d190655fa1a06d178c94",
"assets/assets/posts/simple_market_app/images/messageCode.png": "c170b065a80eadb121c7cc609b5aa059",
"assets/assets/posts/simple_market_app/images/imgListCode.png": "e1436dad47dc2708f7f3d69e0dd37648",
"assets/assets/posts/simple_market_app/images/updateTextFormCode.png": "747aed2fdf551d61e0fc553d7b2efcbd",
"assets/assets/posts/simple_market_app/images/addFirebaseToFlutter2.jpg": "306527a0d25e548574a7c5dd94dcb3c0",
"assets/assets/posts/simple_market_app/images/storage1.jpg": "e544a0a5a33462058eaebcf7b4c2d9f0",
"assets/assets/posts/simple_market_app/images/deleteCodeWrong.png": "66e8ae278909fb68ee9ee50cb4a54f8c",
"assets/assets/posts/simple_market_app/images/profileNameExist.jpg": "9c4f8a27c4417e22504405252be6ff9a",
"assets/assets/posts/simple_market_app/images/firebaseLogInSu.jpg": "309e28e37ef3f85277e7aa5d72496126",
"assets/assets/posts/simple_market_app/images/chattingPost.PNG": "66f44ceb0219624558c97fd477aef721",
"assets/assets/posts/simple_market_app/images/cloud_firestore.jpg": "be33db8c935f95e3539f42046a3d9032",
"assets/assets/posts/simple_market_app/images/chatRoomCode.png": "ee0fa637cf9e1dcbb34873727a2a7bb5",
"assets/assets/posts/simple_market_app/images/logoutCode.png": "56fb8ced771842122753926448a890d6",
"assets/assets/posts/simple_market_app/images/deletingGif.gif": "de79cc265f2be76a7273a378bfb80b47",
"assets/assets/posts/simple_market_app/images/userChat.png": "d7cd52b2df40048a62773bf45c87c22d",
"assets/assets/posts/simple_market_app/images/chattingDemo3Gif.gif": "167d3baafdfcf329e1d8e1c09b49ffcd",
"assets/assets/posts/simple_market_app/images/addFirebaseToFlutter3.jpg": "b76f0845fd142a7d279dd62fc0b61e41",
"assets/assets/posts/simple_market_app/images/addFirebasetoFlutter.jpg": "42ca98c55d96eee71031c20f4783d3ef",
"assets/assets/posts/simple_market_app/images/firebaseUiAuth.jpg": "291fdd8746ef9c2acbb492f33f8c9a90",
"assets/assets/posts/simple_market_app/images/loginPageCus.png": "42322241985464f7237a54e1a286ba90",
"assets/assets/posts/simple_market_app/images/itemCarouselGif.gif": "2e997581138c5e01d605473d23b2ee37",
"assets/assets/posts/simple_market_app/images/itemCode.png": "ca59d7f396730d9df964e18b7b2aa2ec",
"assets/assets/posts/simple_market_app/images/item.jpg": "e0d4897cf407629d436b59cc5c453a90",
"assets/assets/posts/simple_market_app/images/imageProvider1.png": "655eb2b8b603c2171e8d7558f6b4f0bd",
"assets/assets/posts/simple_market_app/images/chattingButtonCode1.png": "abb1272b11ad000e7393691cd4f091ef",
"assets/assets/posts/simple_market_app/images/setName.png": "7fc8d579b4e1d78407a96d30f8be6a42",
"assets/assets/posts/simple_market_app/images/firebaseLogIn.jpg": "b2522b6b1f660518b21dd3b1d7e76e14",
"assets/assets/posts/simple_market_app/images/postProductOkCode.png": "e8bebfc983ee59b97fef38219f2b0a5a",
"assets/assets/posts/simple_market_app/images/logout.gif": "815cabea82389cc183ae3adcb1f26e8b",
"assets/assets/posts/simple_market_app/images/form.png": "bff9cf4390b703b8a814e048006f10aa",
"assets/assets/posts/simple_market_app/images/storage2.jpg": "c3a7736e6fa31817ce7630be8fa48e03",
"assets/assets/posts/simple_market_app/images/createDatabase.jpg": "bda88354fd05a70c3a2b9b0abd4e696b",
"assets/assets/posts/simple_market_app/images/modalBottomGif.gif": "5cd07a944cca45e2ab26483a8f9d6109",
"assets/assets/posts/simple_market_app/images/collectionField.jpg": "82364e9cbc569b795b00abcb01f517d7",
"assets/assets/posts/simple_market_app/images/firebaseAuth.jpg": "8d189245bf5cb19f99972b6bd9a4a0ca",
"assets/assets/posts/simple_market_app/images/mainPageCode2.png": "4045252c10881639324e2fbf0666d086",
"assets/assets/posts/simple_market_app/images/creationOfchat3.png": "d04eca4250c3083eee6c70e40cd0f5a9",
"assets/assets/posts/simple_market_app/images/chattingDemo3.png": "a1debf5e63df10dbca1dc9d71dcdef47",
"assets/assets/posts/simple_market_app/images/firebaseRules.png": "32eedda5351386113aa121bbf343d971",
"assets/assets/posts/simple_market_app/images/firebaseTools.png": "013f3de7b2e374a601a171cb30be5086",
"assets/assets/posts/simple_market_app/images/postProductImagesCode2.png": "c0ae9d64d58d9d2717ab3bd7d119fbdc",
"assets/assets/posts/simple_market_app/images/modalBottomNotMine.jpg": "03b486e2e385bc895c3c4650d748356f",
"assets/assets/posts/simple_market_app/images/validationButton.png": "0ff11d02e10d1a73d2745f19e64c6cbb",
"assets/assets/posts/simple_market_app/images/cliCommand2.jpg": "e8eece5a62e3a906cf178b9f15a55b1b",
"assets/assets/posts/simple_market_app/images/updatePageCompareCode.jpg": "4827cb2766cc6c03fa95c8527acfdd48",
"assets/assets/posts/simple_market_app/images/itemDetail.jpg": "be62a4b8fa75bbd55e05d9956acb8811",
"assets/assets/posts/simple_market_app/images/chatPageGif.gif": "75e1f7d53fad6ac911de0211709f346d",
"assets/assets/posts/simple_market_app/images/profileCode.png": "d3d6a00859ae5ec6d51e2ff4c251ffeb",
"assets/assets/posts/simple_market_app/images/messageTextFieldCode.png": "cccd16ab3eab75fd33fe4ed1573b5715",
"assets/assets/posts/simple_market_app/images/creationOfchat2.png": "c95106f670327ae4949fef5ba81b8928",
"assets/assets/posts/simple_market_app/images/firebaseAddNew.jpg": "4c50e60dd28960ba85a6daed096f4852",
"assets/assets/posts/simple_market_app/images/chattingDemo2.png": "11f2cf729c75b30a1cec2ad1878ec17c",
"assets/assets/posts/simple_market_app/images/collectionChats.png": "520946b9bd9f4d4da96ceba995fd104a",
"assets/assets/posts/simple_market_app/images/dotsProviderCode.png": "6798f22b416100bfbba4f6d9f5a7a890",
"assets/assets/posts/simple_market_app/images/firestoreDatabase.jpg": "1a16cc9475648f4ad51835f99e1c7f57",
"assets/assets/posts/simple_market_app/images/chatRoom.png": "c3e3c655ecd1cc8e5f6f49681185ac57",
"assets/assets/posts/simple_market_app/images/mainPageGif.gif": "f3ee843a0e7b3415d2aa1a13d39acdb9",
"assets/assets/posts/simple_market_app/images/postPage.jpg": "7e965d589cfa56145a302bc530eead66",
"assets/assets/posts/simple_market_app/images/chatPreviewCode.png": "36eab6cd17b0ff10246ac74fc016952d",
"assets/assets/posts/simple_market_app/images/login.jpg": "73c20dd46a1512b0da023fced6994a25",
"assets/assets/posts/simple_market_app/images/path.jpg": "227ef62d0807dbaf0e5730e17fd1c3bf",
"assets/assets/posts/simple_market_app/images/createDatabase2.jpg": "a618492cdaef48fe6eae3dd993ab30c1",
"assets/assets/posts/simple_market_app/images/postProductImagesCode.png": "0f34e42c1c2c79d802310e941fe80dcc",
"assets/assets/posts/simple_market_app/images/myTestProject.jpg": "a4e8f9625dfaaaa3e894579022d183eb",
"assets/assets/posts/simple_market_app/images/profile.jpg": "61d804ff0cfa98970811c9e50cacf1e6",
"assets/assets/posts/simple_market_app/images/itemDetailCode1.png": "6e8d1582b224babc0abaca6e368da457",
"assets/assets/posts/simple_market_app/images/showModalCode.png": "c0ce04231509c1084ea943752deae767",
"assets/assets/posts/simple_market_app/images/cliCommand3.jpg": "6351780ea7ca862395277ebb9bbe703b",
"assets/assets/posts/simple_market_app/images/firestoreStreamCode2.png": "602d9bae161fb6f616964fdde90b1267",
"assets/assets/posts/simple_market_app/images/postProductImagesGif.gif": "fb41bb54507b9dfde4fa276edfecbb7e",
"assets/assets/posts/simple_market_app/post.md": "6d162efa7328d63d0b30fbdb9a58334f",
"assets/assets/posts/binary_tree/metadata.json": "2f77d50127232bdb28e9a44d65444648",
"assets/assets/posts/binary_tree/images/arrayTree.jpg": "a003d4ba0722907d77b6ecb78bf63b30",
"assets/assets/posts/binary_tree/images/levelorder.png": "ad27b2a503a1985f5ada7fdae23946c4",
"assets/assets/posts/binary_tree/images/linked.jpg": "52c92cdc662bf23454a801fd254d056d",
"assets/assets/posts/binary_tree/images/treeTraversal.jpg": "f08068debef17b0e583de2c1c8f45557",
"assets/assets/posts/binary_tree/images/skewedTree.jpg": "8eff6a083eea8023cc9db21490f97480",
"assets/assets/posts/binary_tree/images/treeNode.jpg": "1f20b8c0b718b42c4b456db1b2fade4c",
"assets/assets/posts/binary_tree/post.md": "8d0fa421807f866b06b21064fa353396",
"assets/assets/posts/portfolio_blog/metadata.json": "6eb7a690756d58266d0a5755e1d40fb1",
"assets/assets/posts/portfolio_blog/images/github-button.jpg": "bd9141fb7ad53d931078f664cdc6db5b",
"assets/assets/posts/portfolio_blog/images/settings-pages.jpg": "8f49324254d85a305936f1f14c54433f",
"assets/assets/posts/portfolio_blog/images/assets.jpg": "2df270c9a23c5c477f800c9964f893a4",
"assets/assets/posts/portfolio_blog/images/projects-folder.jpg": "66258eaeebdade3da50ba283fc4338cb",
"assets/assets/posts/portfolio_blog/images/drawer.jpg": "8c0a5b4d598060a5c4bde980fe0fb5a1",
"assets/assets/posts/portfolio_blog/images/libFolder.jpg": "2be98652630da81276cfae88430a10ae",
"assets/assets/posts/portfolio_blog/images/portfolio-blog.jpg": "9197b65f08bc5ec09f592e23dacc5e8b",
"assets/assets/posts/portfolio_blog/images/home-page.jpg": "16b66fb0babc1188ff2f8ab7842fbb23",
"assets/assets/posts/portfolio_blog/images/post-page.jpg": "7f8a6d467446c5d3bb6eb2d53b95fd7c",
"assets/assets/posts/portfolio_blog/images/responsive_framework.jpg": "3530e631209013fe92a703ec15c922e7",
"assets/assets/posts/portfolio_blog/images/desktop3.jpg": "2b4ae1fab3a37982b7a4296d4e49db91",
"assets/assets/posts/portfolio_blog/images/projects-page.jpg": "519f1aa7b4f47d7a69dd03f13286e135",
"assets/assets/posts/portfolio_blog/images/launchUrl.jpg": "ad6f7b997e8924a7610fefa9dbda4de7",
"assets/assets/posts/portfolio_blog/images/project-card.jpg": "5108c96379991b628aac5626455da6a0",
"assets/assets/posts/portfolio_blog/images/blog-section.jpg": "fefa517b69d839509be63db614befbc4",
"assets/assets/posts/portfolio_blog/images/projects-list.jpg": "f2fd9568916d16a582b61cbfcc6249f5",
"assets/assets/posts/portfolio_blog/images/project-section.jpg": "1b2f9e8eb18e1bf23749ba4268049edb",
"assets/assets/posts/portfolio_blog/images/grid-max.jpg": "4311f5f366dc395793cd90e076991846",
"assets/assets/posts/portfolio_blog/images/tablet.jpg": "67a2a9bfdd26fc068f5436fead6ae2bc",
"assets/assets/posts/portfolio_blog/images/actions.jpg": "662e1fa36e4fea91d54038f03b88e071",
"assets/assets/posts/portfolio_blog/images/blog-card.jpg": "5874b3c29d710121f7bbf5691446dfed",
"assets/assets/posts/portfolio_blog/images/build-web-assets.jpg": "7521c5625b024b768e20e5b6e951110b",
"assets/assets/posts/portfolio_blog/images/workflow-folder.jpg": "ef6c37b2007351281c2e0b36b9ef9d7c",
"assets/assets/posts/portfolio_blog/images/grid-fixed.jpg": "69dfa8d1d6a6a28b40b2e3b549bfedd0",
"assets/assets/posts/portfolio_blog/images/top-navigation-bar.jpg": "719454ca02a8b0343a17f43baecc73eb",
"assets/assets/posts/portfolio_blog/images/create-repository.jpg": "d6ce6de69606b0c1aa527f57a9114d90",
"assets/assets/posts/portfolio_blog/images/build-web.jpg": "9b882ab4214b1569da9ba763fb3a1723",
"assets/assets/posts/portfolio_blog/images/assets-blog.jpg": "bf88b7a1a0036435d617ceb2cdf9a511",
"assets/assets/posts/portfolio_blog/images/metadata.jpg": "94ec8c1c580c5714ec8ca4741293b6c1",
"assets/assets/posts/portfolio_blog/images/breakpoint.jpg": "4bcdc370f7ca23820d9f9170ca49b421",
"assets/assets/posts/portfolio_blog/images/desktop.jpg": "9db6793548d5f368081828623cf79dd3",
"assets/assets/posts/portfolio_blog/images/vonge-theme.jpg": "ba1038129bc2f19aff2def50863495bb",
"assets/assets/posts/portfolio_blog/post.md": "317f5ea29c022cb52690eab6f4d4af92",
"assets/assets/posts/doubly_linked_list/metadata.json": "bef991c1237e310013ee5457dbb94de7",
"assets/assets/posts/doubly_linked_list/images/DLL.png": "e3e17efa5c67ba4e64b8ae3bc50b6b9e",
"assets/assets/posts/doubly_linked_list/images/DLL2.png": "ce8d244dea946b084503214d9a7512fa",
"assets/assets/posts/doubly_linked_list/post.md": "fd7f4589a20573d6cfc5a4614ed5213d",
"assets/assets/posts/post_list.json": "fcaea4506de3b410b1ff445aeae57515",
"assets/assets/posts/flutter_state/metadata.json": "f7e8939c63c9a17973ce47dbba324178",
"assets/assets/posts/flutter_state/images/reload.jpg": "eb4515b8114ea43fa1c73a9d0acd3fbd",
"assets/assets/posts/flutter_state/images/widget-tree.jpg": "c3d64f265abd30d148fa3ac30d35b621",
"assets/assets/posts/flutter_state/post.md": "8615ab27a9f5b4f2ccc2381f29421617",
"assets/assets/posts/flutter_provider/metadata.json": "853f7ce1112e60c22af83be72f388a15",
"assets/assets/posts/flutter_provider/images/two-state.jpg": "012308b450962f218a55e3eba975a374",
"assets/assets/posts/flutter_provider/images/provider-diagram.jpg": "f4b1615f2b6b033d24221263b63badb0",
"assets/assets/posts/flutter_provider/images/consumer2.jpg": "7a7a5874f62c2f34541df604f3c47a17",
"assets/assets/posts/flutter_provider/images/example-app.jpg": "55cc8d807cfab45f82f360a083b3ef10",
"assets/assets/posts/flutter_provider/images/consumer1.jpg": "1677bc95ca5057f9439e9ec55f08f84a",
"assets/assets/posts/flutter_provider/images/one-state.jpg": "7eaf1446c57e6a71441f7e9479d8b6c9",
"assets/assets/posts/flutter_provider/images/example-app-count.jpg": "f8cb860064bbdaaf28e7772736ef7d76",
"assets/assets/posts/flutter_provider/post.md": "dd3389db22919623b1318d7937c90aae",
"assets/assets/posts/queue/metadata.json": "4ed4047527f00f934570eb035fbe733b",
"assets/assets/posts/queue/images/queue.png": "2c53633069c2d4f819294c642d0ea2d2",
"assets/assets/posts/queue/images/circular-queue.png": "cde32cddee5a3daf1f87e76981e20369",
"assets/assets/posts/queue/post.md": "5ca965d73f9d6bd2a8923bc698ea62c7",
"assets/assets/posts/search/metadata.json": "9ad5f68493116a4ee15af5c477a5128e",
"assets/assets/posts/search/images/sequenOrder.jpg": "5af6c0bef797f05efc001b61df393b6a",
"assets/assets/posts/search/images/sequenUnorder.jpg": "f619faa85ac81d8aba0943219e473b6f",
"assets/assets/posts/search/images/binarySearch.png": "d417d14f5bb314edfe0b0315a2d3550c",
"assets/assets/posts/search/images/indexTable.png": "c1d839e3cf5936a6265dc23a4f73edd0",
"assets/assets/posts/search/images/indexTableSearch.png": "d0d521d6d92480133bfb52c5b0a04fec",
"assets/assets/posts/search/post.md": "158ab8cb52c118c432da94d2e761bc1d",
"assets/assets/posts/publishing_app/metadata.json": "58d4f039363c5b6ede2b8796b44b1b82",
"assets/assets/posts/publishing_app/images/consoleVery2.png": "d9586ff036bddf8aa3b3ddb2652a2083",
"assets/assets/posts/publishing_app/images/changeId.png": "1f04d5cd9586bf8c6a3f3fef6621b49b",
"assets/assets/posts/publishing_app/images/package_mipmap.png": "6f9dde6208201fa3c60a1199fe5d0f0a",
"assets/assets/posts/publishing_app/images/googleSite.png": "bf211175fe28a44c58b17056af9e6b41",
"assets/assets/posts/publishing_app/images/app_icon_package.png": "8eab2a56e8b4e27cb7cbd2de4c709909",
"assets/assets/posts/publishing_app/images/consoleVery.png": "98a536aa04bb741aa8cba58c9a5a3424",
"assets/assets/posts/publishing_app/images/versionCode.png": "c02ac89e02ee5a2a4238a372328709c4",
"assets/assets/posts/publishing_app/images/privacy.png": "bdd571ae378d99857506b742544c7566",
"assets/assets/posts/publishing_app/images/consoleTest4.png": "a7013bf1061b640e63e0254bef958671",
"assets/assets/posts/publishing_app/images/applyProduction.png": "934025159f3c903c74ea6b71bf51e294",
"assets/assets/posts/publishing_app/images/icon_package_yaml.png": "5cc3752c82907e305d6459f6257c6dfb",
"assets/assets/posts/publishing_app/images/assets.png": "c5319af1d5603078de5d12bc6fb7b76e",
"assets/assets/posts/publishing_app/images/listing2.png": "13680f7fc1e3bc4f070a2bd49d5a8fc3",
"assets/assets/posts/publishing_app/images/keyDiagram.png": "12e13c3bc406f78f2690aadfa47db6ef",
"assets/assets/posts/publishing_app/images/consoleTest3.png": "fd92fe679c999df075ebc04aba520120",
"assets/assets/posts/publishing_app/images/console.png": "e0ae78a17f26995b4b2e6f100764ed9a",
"assets/assets/posts/publishing_app/images/consoleTest2.png": "7e719d7fdca47684ff622f4cac3093ae",
"assets/assets/posts/publishing_app/images/test.png": "7edda59b14bf82bf9265a088eb4276ee",
"assets/assets/posts/publishing_app/images/icon_generator3.png": "9482a0ebcd1b25b51d152d2059174de6",
"assets/assets/posts/publishing_app/images/production.png": "cf78f8fb5bd640d3326a207f814c6a48",
"assets/assets/posts/publishing_app/images/listing.png": "7856ea46b4871ac81f2b278263d2e02c",
"assets/assets/posts/publishing_app/images/icon_generator2.png": "1dbce27e19318e6fd792a0fa81dfccbf",
"assets/assets/posts/publishing_app/images/test2.png": "e1a90e7b91f4b9fc86b186084a7c5259",
"assets/assets/posts/publishing_app/images/productionSurvey.png": "435a977da30c410f27c8dd413af60cb5",
"assets/assets/posts/publishing_app/images/sendChanges.png": "0f667fa2c98d33192858f5c9cec9502f",
"assets/assets/posts/publishing_app/images/icon_mani.png": "0bda071dd83e5593d3094e0dab4314de",
"assets/assets/posts/publishing_app/images/consoleTest.png": "020d1732acf02c8673ee26de7cfdfca7",
"assets/assets/posts/publishing_app/images/consoleCreate.png": "052b4bbe352a50cf9d67c2e509f4a402",
"assets/assets/posts/publishing_app/images/production2.png": "b5899e28c1e512161b7252ca268c1e02",
"assets/assets/posts/publishing_app/images/manifest.png": "cc0d1cb6701789d5ff0b103c157224e5",
"assets/assets/posts/publishing_app/images/icon_generator1.png": "75f7881c3468cdfb8c3a78e7c0ef6a90",
"assets/assets/posts/publishing_app/images/app_screen.png": "abe395f4e43fc5e370477780de7472c3",
"assets/assets/posts/publishing_app/post.md": "8c039398022000b8564608cf042aff66",
"assets/assets/posts/tree/metadata.json": "39d9740631f5bd0ad69e038987eb4987",
"assets/assets/posts/tree/images/typeOfNode.jpg": "c39f4ca4cda6b94da5d57a11fb687e15",
"assets/assets/posts/tree/images/subtree.png": "bc9df77bc2563c3d45e9f4004057fe6d",
"assets/assets/posts/tree/images/fullB.jpg": "a24665b83d50de8e165d81215e5ed84b",
"assets/assets/posts/tree/images/typesOfTrees.png": "d8104c6d5eba8da64b317580805cd68e",
"assets/assets/posts/tree/images/tree.jpg": "95493e8f7882b453465d32fc86710efb",
"assets/assets/posts/tree/images/treeLevel.jpg": "489cac740ae283d3d4868a0dc7730a2b",
"assets/assets/posts/tree/images/complete.jpg": "f220e282aa3170c9f8845dadb3f82af0",
"assets/assets/posts/tree/images/avl.jpg": "ef7fad9177efb53c7099feb5084c6eb7",
"assets/assets/posts/tree/images/binary-search-tree.jpg": "ca5dc3697be71c4ede1c6d3b0e05749d",
"assets/assets/posts/tree/images/treeNode.jpg": "1f20b8c0b718b42c4b456db1b2fade4c",
"assets/assets/posts/tree/images/balance.png": "681b92e61a81be013b7887e61f9673dd",
"assets/assets/posts/tree/post.md": "78033888bab8ed8f37944c3c38da1400",
"assets/assets/posts/data_structure&time_complexity/metadata.json": "43ff153c720a2e5db753e6a6f5a72161",
"assets/assets/posts/data_structure&time_complexity/images/bigO.png": "f23c0fe0a31e0b5ba8259d990b5573da",
"assets/assets/posts/data_structure&time_complexity/images/typeOfDataStructure.png": "f29baf445d5659503d6ba37cec5c3602",
"assets/assets/posts/data_structure&time_complexity/post.md": "718d06d0104ace1929dee5dd0abd3630",
"assets/assets/posts/simple_movie_app/metadata.json": "b7bf50531d1319a023f30262402dd521",
"assets/assets/posts/simple_movie_app/images/searchWidget.png": "12c60bf84d3a3cd6747cab951b3e0f7a",
"assets/assets/posts/simple_movie_app/images/generator-result.jpg": "82346005f4fa1586fc4d8f21e1fec077",
"assets/assets/posts/simple_movie_app/images/searchProviderS.png": "aa8c6362b195e00e8c0593c771d80f7f",
"assets/assets/posts/simple_movie_app/images/buildLeadingGif.gif": "717bd787a2badb7e7a25c970f72ad744",
"assets/assets/posts/simple_movie_app/images/tmdb.jpg": "9ec11e0cd180edfc9f77436ba57c3706",
"assets/assets/posts/simple_movie_app/images/moviePosterGif.gif": "5cc63c16a29cd972ed7381276a69b96e",
"assets/assets/posts/simple_movie_app/images/now-playing.jpg": "29908a90dd8a704e3efb1c1d12369550",
"assets/assets/posts/simple_movie_app/images/buildActionsGif.gif": "65cb045e75e66bd27c13b91d3da047f8",
"assets/assets/posts/simple_movie_app/images/mvvm.png": "bbaa557b3921e6c81628ebfc87c907fa",
"assets/assets/posts/simple_movie_app/images/searchRepository.png": "5a205aec6209b3cf81d98c5a1f754fc2",
"assets/assets/posts/simple_movie_app/images/buildSuggestionsS.png": "46c1b1fa7dfd319a78e880cd8b3acc5d",
"assets/assets/posts/simple_movie_app/images/buildActions.png": "5ddf5815af17aa04acecb3144e826fbc",
"assets/assets/posts/simple_movie_app/images/tmdb-api-doc.jpg": "92809e0a2ac51395ee29dfa7f597c67f",
"assets/assets/posts/simple_movie_app/images/model-generator.jpg": "81e979de10a64d6a1c4ef11bf03459b7",
"assets/assets/posts/simple_movie_app/images/detail-page.jpg": "34a9124581fc9541e2553f908b581371",
"assets/assets/posts/simple_movie_app/images/tmdb-api.jpg": "0e13f87e1959cb6ebf349777f7ce2a1d",
"assets/assets/posts/simple_movie_app/images/buildSuggestionsS2.png": "c5fd632b06b41131e74c6d520df65b5e",
"assets/assets/posts/simple_movie_app/images/buildLeading.png": "70ed42845744efc571dbabc25f4ceea4",
"assets/assets/posts/simple_movie_app/images/carousellGif.gif": "927236b7bcd3b9d5ba8520cf1e21f880",
"assets/assets/posts/simple_movie_app/images/buildResultsGif.gif": "8bba7e76900fc595c82a0310ffc49dad",
"assets/assets/posts/simple_movie_app/images/searchProvider.png": "666624ad5f352ec69789bb0d426086be",
"assets/assets/posts/simple_movie_app/images/loadSuggestion.png": "8479f6cc71166853e5e69ea4f340d11f",
"assets/assets/posts/simple_movie_app/images/buildResults.png": "188b4a76050e52b6a983227b7c0c379d",
"assets/assets/posts/simple_movie_app/images/buildSuggestionsGif.gif": "ec523360521a5814abf38c7aa140e5f4",
"assets/assets/posts/simple_movie_app/images/json-data.jpg": "64054ca1902fa90270fb8eb39ae178c1",
"assets/assets/posts/simple_movie_app/images/searchDelegate.png": "c714620a0675b49cb0c946db228fc6f0",
"assets/assets/posts/simple_movie_app/images/simpleMovie-home.jpg": "daa6a46cf204fcd812821d1fe7c54a66",
"assets/assets/posts/simple_movie_app/images/file-structure.jpg": "f523a6bf5d4e32e8869b97aa1cc74bc5",
"assets/assets/posts/simple_movie_app/images/queryChange.png": "1d6661e4ada700ddc4ff67e8b2f4171d",
"assets/assets/posts/simple_movie_app/post.md": "ca7d48f47258306ea8acff4e56737ac2",
"assets/assets/posts/circular_linked_list/metadata.json": "8b62ff16d710e864880ea21fd8fc78c2",
"assets/assets/posts/circular_linked_list/images/circularlyLinkedList.png": "1418a1c85dc30441b4b45c06d8e7d549",
"assets/assets/posts/circular_linked_list/post.md": "efee7e3f3785791a0febcd5dd4318178",
"assets/assets/posts/singly_linked_list/metadata.json": "7409b746b49cbc62f7d54425f35cb92e",
"assets/assets/posts/singly_linked_list/images/singlyLinkedList.png": "aacea58a5b5706ac021bbee6e33762bc",
"assets/assets/posts/singly_linked_list/images/linkedListClass.png": "a84aea1d391d0361e41ca2f5caff6a07",
"assets/assets/posts/singly_linked_list/images/addData.gif": "bfdb8c10a7e844f1ded4a5252d11f444",
"assets/assets/posts/singly_linked_list/post.md": "6aa7e66eb1677086ecf6a47873b92d0d",
"assets/assets/posts/postfix/metadata.json": "06f0b3199a0d6cf223cd69e29a9de753",
"assets/assets/posts/postfix/images/precedence.jpg": "a1251f7adccb8f747d6dc9e39c7c5200",
"assets/assets/posts/postfix/images/infixTopostfix.jpg": "ed79e2d2828c9c197f13d90501262ed4",
"assets/assets/posts/postfix/images/calPostfix.jpg": "427f3594def09eb574424c932ef84ed0",
"assets/assets/posts/postfix/post.md": "03473271855cadf3242cde21ab7ccf31",
"assets/assets/posts/deque/metadata.json": "e0d20c8f292e85e9802cf5a9bf161b72",
"assets/assets/posts/deque/images/circular-deque.jpg": "9e98ffccf06c4ea8152283ab9f9dad73",
"assets/assets/posts/deque/images/deque.png": "59b429e8d769a44ead9916361e2af13a",
"assets/assets/posts/deque/images/insertFront.jpg": "d0fbd51d7c9b36945a9ce1608c233917",
"assets/assets/posts/deque/post.md": "0bb003332c414710a5bd67b3b219d675",
"assets/fonts/MaterialIcons-Regular.otf": "74b99f0a1e9caadcad9381d412a30de0",
"assets/AssetManifest.json": "753d5114bedb80fddd515ff65cea6e3d",
"assets/AssetManifest.bin": "0e0d927ee71316ccfa230f8a8b426cd2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"index.html": "aeb46a2580cbc760f45e797aadba40f6",
"/": "aeb46a2580cbc760f45e797aadba40f6",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"flutter_bootstrap.js": "c45fd1ed2ea32ff0d788d6aa4294a751",
"main.dart.js": "9a58c54f132175afc835d9644d920463",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "850751fb7b75494ad2f4a84b7cae8634",
"version.json": "84faedd5d78f03ab1929e680a6fef173",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
