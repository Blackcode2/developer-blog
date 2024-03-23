# What Are Simple Projects?

Simple projects represent mini projects that serve as practical applications of the concepts I've learned. These projects prioritize practical implementation over design aesthetics or user experience refinement. The main objective is to ensure the functionality works as intended, creating a valuable learning experience.

&nbsp;

# What is a Simple Weather app?

This application displays real-time weather information based on the user's current location. It achieves this functionality by utilizing an API to retrieve and load the relevant data.

sorce code for this project: https://github.com/Blackcode2/Flutter-Simple_Weather_App

&nbsp;

# Goal

* Creating first Flutter app
* Using API

&nbsp;

# UI
----

I employed the Scaffold widget to establish the fundamental structure of the screen. This structure comprises an AppBar and a Body section. Within the Body, a Container widget holds the primary information and is enveloped by a Column widget to ensure proper layout. Beneath this, a ListView widget showcases four Card widgets, each displaying hourly weather updates.

<!-- ![](assets/assets/blogs/simpleWwather-blog/images/simpleWeatherApp.jpg) -->
![](assets/assets/posts/simple_weather_app/images/simpleWeatherApp.jpg)

&nbsp;

## Statusbar

Initially, I was curious about altering the status bar color and successfully navigated the process.

```dart
SystemChrome.setSystemUIOverlayStyle(
    SystemUiOverlayStyle(statusBarColor: Colors.transparent));
```

To achieve this customization, the SystemChrome class which is from **services** library becomes pivotal, particularly through the utilization of the **setSystemUIOverlayStyle** method. This method offers a straightforward solution for modifying the appearanc

<!-- ![](assets/assets/blogs/simpleWeather-blog/images/statusbar.jpg) -->
![](assets/assets/posts/simple_weather_app/images/statusbar.jpg)

<!-- ![](assets/assets/blogs/simpleWeather-blog/images/statusbar-tran.jpg) -->
![](assets/assets/posts/simple_weather_app/images/statusbar-tran.jpg)

&nbsp;

## App Bar

While the default design of the AppBar inherently demarcates the boundary between the AppBar and the Body in Flutter, I aspired to achieve a more unified and streamlined appearance.

<!-- ![](assets/assets/blogs/simpleWeather-blog/images/default_appbar.jpg) -->
![](assets/assets/posts/simple_weather_app/images/default_appbar.jpg)

To achieve this, I opted to customize the AppBar's design by setting its elevation to zero and rendering it transparent. However, these alterations didn't result in a perfectly transparent AppBar. A residual area for the AppBar still persisted, and the Body section wasn't extending to cover this vacant space. 

```dart
appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0.0,
```

<!-- ![](assets/assets/blogs/simpleWeather-blog/images/appbar2.jpg) -->
![](assets/assets/posts/simple_weather_app/images/appbar2.jpg)


To tackle this issue, the property "extendBodyBehindAppBar" comes into play. When this property is set to true, the Body's height is elongated to include the AppBar's height, and the top edge of the Body aligns seamlessly with the top edge of the AppBar.

```dart
Scaffold(
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0.0,
```
<!-- ![](assets/assets/blogs/simpleWeather-blog/images/statusbar-tran.jpg) -->
![](assets/assets/posts/simple_weather_app/images/statusbar-tran.jpg)

&nbsp;

## MediaQuery

The MediaQuery class provides crucial insights into the screen size, orientation, aspect ratio, and other pertinent details of the current device. It plays a pivotal role in accurately determining the dimensions of the screen. As screens vary widely across different devices, the MediaQuery class becomes indispensable for crafting responsive applications that adapt seamlessly to diverse screen sizes.

```dart
Size size = MediaQuery.of(context).size;
height: size.height * 0.70, // 70% of screen height
width: size.width, // 100% of screen width
```

&nbsp;

## Main section

I tried to design card that has rounded corner and gradient color. In Container widget, I can use BoxDecoration class to achieve these. 

<!-- ![](assets/assets/blogs/simpleWeather-blog/images/main_section.jpg) -->
![](assets/assets/posts/simple_weather_app/images/main_section.jpg)

```dart
Column(
  children: [
    Container(
      height: size.height * 0.70,
      width: size.width,
      padding: const EdgeInsets.fromLTRB(10, 0, 10, 10),
      decoration: const BoxDecoration(
        borderRadius: BorderRadius.only(
          bottomLeft: Radius.circular(18),
          bottomRight: Radius.circular(18),
        ),
        gradient: LinearGradient(
          colors: [
            Color(0xff955cd1),
            Color(0xff3fa2fa),
          ],
          begin: Alignment.bottomCenter,
          end: Alignment.topCenter,
          stops: [0.2, 0.85],
        ),
      ),
      child:
```

I effectively employed the BorderRadius class. Specifically, I utilized the "only" method to impart rounded corners exclusively to the bottom corner, achieving a unique visual effect. 

For the gradient color, I harnessed the capabilities of the LinearGradient class. The first item in the list is the start which goes to left in default.

<!-- ![](assets/assets/blogs/simpleWeather-blog/images/default_gradi.jpg) -->
![](assets/assets/posts/simple_weather_app/images/default_gradi.jpg)

```dart
gradient: LinearGradient(
  colors: [
    Color(0xff955cd1), // purple
    Color(0xff3fa2fa), // blue
  ],
  //begin: Alignment.bottomCenter,
  //end: Alignment.topCenter,
  //stops: [0.2, 0.85],
),
```

I could also define the starting and ending points of these colors. 

<!-- ![](assets/assets/blogs/simpleWeather-blog/images/gradi2.jpg) -->
![](assets/assets/posts/simple_weather_app/images/gradi2.jpg)

```dart
gradient: LinearGradient(
  colors: [
    Color(0xff955cd1), // purple
    Color(0xff3fa2fa), // blue
  ],
  begin: Alignment.bottomCenter, //purple goest to the bottom center.
  end: Alignment.topCenter, //blue goest to the top center.
  //stops: [0.2, 0.85],
),
```


The "stop" property plays a pivotal role in determining the distribution of each color's influence. When assigning equal percentages, like 50%, to the "stop" property for each color, the colors essentially divide the available area equally.

<!-- ![](assets/assets/blogs/simpleWeather-blog/images/half_gradi.jpg) -->
![](assets/assets/posts/simple_weather_app/images/half_gradi.jpg)

```dart
gradient: LinearGradient(
  colors: [
    Color(0xff955cd1), // purple
    Color(0xff3fa2fa), // blue
  ],
  begin: Alignment.bottomCenter, 
  end: Alignment.topCenter,
  stops: [0.5, 0.5],
),
```

 However, for a more seamless and fluid gradient transition, it's advisable to adjust the "stop" values in a way that allows the colors to smoothly cross over into the adjacent areas. This approach ensures a visually appealing and gradual blend between the colors.

 &nbsp;

## Houlry & List View

Beneath the primary weather information section, you'll find hourly weather data presented through informative cards. These cards are seamlessly presented using the ListView widget.

<!-- ![](assets/assets/blogs/simpleWeather-blog/images/hourly.jpg) -->
![](assets/assets/posts/simple_weather_app/images/hourly.jpg)

```dart
Padding(
  padding: const EdgeInsets.fromLTRB(7, 7, 7, 7),
  child: SizedBox(
    height: size.height * 0.27,
    width: size.width,
    child: ListView(
      scrollDirection: Axis.horizontal,
      physics: const BouncingScrollPhysics(),
      children: [
        HourlyWeatherCard(
            hourlyWeatherMap: hourlyWeatherMap['first']),
        HourlyWeatherCard(
            hourlyWeatherMap: hourlyWeatherMap['second']),
        HourlyWeatherCard(
            hourlyWeatherMap: hourlyWeatherMap['third']),
        HourlyWeatherCard(
            hourlyWeatherMap: hourlyWeatherMap['fourth']),
      ],
    ),
  ),
)
```


The ListView widget serves the purpose of efficiently displaying a sequence of items in a scrollable manner. Also, ListView widget is scrollable. Specifically tailored for showcasing static content, this widget excels in maintaining a cohesive user experience. When dealing with a substantial volume of items within the ListView widget, rapid rendering might become an issue due to the widget's initial load of all information. To optimize this scenario, the implementation of ListView.builder is recommended. 


<!-- ![](assets/assets/blogs/simpleWeather-blog/images/listView.jpg) -->
![](assets/assets/posts/simple_weather_app/images/listView.jpg)

```dart
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        children: const [
          Text('test'),
          Text('test'),
          Text('test'),
          Text('test'),
          Text('test'),
          Text('test'),
        ],
      ),
    );
  }
}
```

&nbsp;

## List View widget with Colunm or Row

In certain scenarios, the ListView widget might be enclosed within a Column or Row widget for specific requirements. However, using ListView within a Column can trigger an error. This occurs because the ListView needs a predefined size to work with, while the parent Column widget provides an unconstrained size (infinity).

There are several solutions. One is to wrapp ListView with Expanded widget. Exapaned widget can have remaining spaces after other widgets have their own specific spaces. With this, for example, there can be search bar on the top and rest of area can be ListView area.

<!-- ![](assets/assets/blogs/simpleWeather-blog/images/listViewExpand.jpg) -->
![](assets/assets/posts/simple_weather_app/images/listViewExpand.jpg)


```dart
Column(
  children: [
    Container(
      height: 40,
      width: MediaQuery.of(context).size.width,
      color: Colors.amber,
      child: const Text('Another widget'),
    ),
    Expanded(
      child: ListView(
        children: const [
          Text('test'),
          Text('test'),
          Text('test'),
          Text('test'),
          Text('test'),
          Text('test'),
        ],
      ),
    ),
  ],
```

Another alternative is to define a fixed size for the ListView by enclosing it within a Container or SizedBox. However, it's worth noting that this method can result in the truncation of list items, so it's more suitable when a precise height requirement exists.

<!-- ![](assets/assets/blogs/simpleWeather-blog/images/listViewSized.jpg) -->
![](assets/assets/posts/simple_weather_app/images/listViewSized.jpg)

```dart
Column(
  children: [
    SizedBox(
      height: 120,
      child: ListView(
        children: const [
          Text('test1'),
          Text('test2'),
          Text('test3'),
          Text('test4'),
          Text('test5'),
          Text('test6'),
        ],
      ),
    ),
  ],
),
```

Another viable option is to use the **shrinkWrap** property. This attribute configures the ListView to occupy only the space it requires. This approach differs from using **Expanded**, as **Expanded** strives to claim as much available space as possible.

```dart
Column(
  children: [
    ListView(
      shrinkWrap: true,
      children: const [
        Text('test1'),
        Text('test2'),
        Text('test3'),
        Text('test4'),
        Text('test5'),
        Text('test6'),
      ],
    ),
  ],
),
```

&nbsp;

# Functionality 
----

Upon the app's initial execution, it is essential to request user permission for location access. To facilitate this process, I developed a function and class. The initState method, which is inherent to the Stateful class, is the first function executed at the app's launch. Consequently, I placed the location permission request function which name is **getMyLocation** within the initState method.

```dart
@override
  void initState() {
    super.initState();
    getMyLocation();
  }

  Future<void> getMyLocation() async {
    double lat;
    double lon;
    Mylocation myLocation = Mylocation(context: context); 
    await myLocation.checkPermission(); // If the next line code is excuted even though this function is not done, there will be no location infromation so that await keword is needed.
    lat = myLocation.lat;
    lon = myLocation.lon;
    await getWeatherData(lat, lon);
  }
```

When the **getMyLocation** function is invoked, it initializes an instance of the **MyLocation** class, a custom class I've created. This class encompasses various methods, with the **checkPermission** method being the initial one called.

The **MyLocation** class serves as a bridge to utilize the geolocator library, simplifying the process of obtaining location permissions and information. The **checkPermission** function that is asynchronous, specifically, invokes the **checkPermission** method from the Geolocator class. This method returns a LocationPermission status. Subsequently, an if statement assesses whether permission has been granted. If permission is granted, the function to retrieve the current location is called; otherwise, the function to request permission is invoked.

```dart
Future<void> checkPermission() async {
    // if statment should be excuted after LocationPermission() is returned. await is needed
    LocationPermission permission = await Geolocator.checkPermission(); 
    if (permission == LocationPermission.always ||
        permission == LocationPermission.whileInUse) {
      // if checkPermission() ends first when getLocation() is still under processing, getMyLocation() won't get any location information. await is needed
      await getLocation();
    } else {
      await requestPermission();
    }
  }
```

```dart
Future<void> getLocation() async {
    Position position = await Geolocator.getCurrentPosition(
        desiredAccuracy: LocationAccuracy.high);
    lat = position.latitude;  // class field
    lon = position.longitude; // // class field
  }
```

If the user denies permission, the app will request permission again. When permission is denied again, the app will display an alert dialog. When an instance of the MyLocation class is created, a context is passed as a parameter because the **showDialog** function requires a context.

<!-- ![](assets/assets/blogs/simpleWeather-blog/images/permission.jpg) -->
![](assets/assets/posts/simple_weather_app/images/permission.jpg)


```dart
Future<void> requestPermission() async {
    LocationPermission permission = await Geolocator.requestPermission();
    if (permission == LocationPermission.always ||
        permission == LocationPermission.whileInUse) {
      await getLocation();
    } else if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
    } else {
      showDialog(
          context: context,
          barrierDismissible: false,
          builder: (BuildContext context) {
            return AlertDialog(
              title: const Text('No permission for location'),
              content: const Text(
                  '\nChange the permission in the App settings for service.'),
              actions: [
                TextButton(
                  child: const Text('Close'),
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                ),
              ],
            );
          });
    }
  }
```

&nbsp;

## API

After the entire process of obtaining location information, the **getWeatherData()** function is called, which is responsible for making API network requests to fetch weather data.

&nbsp;

## What is API?

* Application Programming Interface
  
* Think of the API as a waiter in a restaurant: you, the customer (your program), pick your food from the menu (send a request), and the waiter (API) takes your order to the chef (remote server). Once the chef (server) prepares your food (processes your request), the waiter (API) brings your order back to you (returns the response) for you to enjoy.


For this project, I use the API from Current Weather. It is free and easy to use.

<!-- ![](assets/assets/blogs/simpleWeather-blog/images/openWeather.jpg) -->
![](assets/assets/posts/simple_weather_app/images/openWeather.jpg)

I've created a **Network** class that utilizes the http library. This class takes a URL string as a parameter. The **Uri.parse** method creates a new Uri object by parsing the provided URL string. Then, the **http.get** method is used to request data from the server. A successful response typically has a status code of 200. Finally, the JSON data is decoded for further use.

```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

class Network{
  final String url;
  Network(this.url);

  Future<dynamic> getJsonData() async {
    var response = await http.get(Uri.parse(url));
    if(response.statusCode == 200) {
      String jsonData = response.body;
      var parsingData = jsonDecode(jsonData);
      return parsingData;
    }

  }
}
```

JSON format API response example
```JSON
{
  "coord": {
    "lon": 10.99,
    "lat": 44.34
  },
  "weather": [
    {
      "id": 501,
      "main": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 298.48,
    "feels_like": 298.74,
    "temp_min": 297.56,
    "temp_max": 300.05,
    "pressure": 1015,
    "humidity": 64,
    "sea_level": 1015,
    "grnd_level": 933
  },
  "visibility": 10000,
  "wind": {
    "speed": 0.62,
    "deg": 349,
    "gust": 1.18
  },
  "rain": {
    "1h": 3.16
  },
  "clouds": {
    "all": 100
  },
  "dt": 1661870592,
  "sys": {
    "type": 2,
    "id": 2075663,
    "country": "IT",
    "sunrise": 1661834187,
    "sunset": 1661882248
  },
  "timezone": 7200,
  "id": 3163858,
  "name": "Zocca",
  "cod": 200
}                                          
```

I've created two instances of the **Network** class because I needed to access both the current weather API and the hourly weather API. After receiving a response, I stored the response data in separate variables by specifying the element index using square brackets **[]**.
For the hourly data, I stored each set of time data using a Map.


```dart
Future<dynamic> getWeatherData(double? lat, double? lon) async {
  Network network = Network(
      'https://api.openweathermap.org/data/2.5/weather?lat=$lat&lon=$lon&appid=$apiKey&units=metric');
  Network network2 = Network(
      'https://api.openweathermap.org/data/2.5/forecast?lat=$lat&lon=$lon&cnt=4&appid=$apiKey&units=metric');
  weatherData = await network.getJsonData();
  hourlyWeatherData = await network2.getJsonData();
  setState(() {
    cityName = weatherData['name'];
    weatherMain = weatherData['weather'][0]['main'];
    weatherDescription = weatherData['weather'][0]['description'];
    temp = weatherData['main']['temp'];
    hourlyWeatherMap['first'] = {
      'temp': hourlyWeatherData['list'][0]['main']['temp'],
      'weather': hourlyWeatherData['list'][0]['weather'][0]['main'],
      'date': hourlyWeatherData['list'][0]['dt_txt'].substring(11, 16),
    };
```

The **setState** method plays a crucial role in notifying the framework of changes in the state, which triggers the **build** method to update the UI accordingly. To ensure the new weather data affects the UI, within the **setState** method, the weather data is stored in variables for processing.


For instance, the variable **temp** is initially set to **0.0**. Utilizing a ternary operator, a default value (**--**) is displayed if the variable remains unchanged. However, after loading the weather data, the **temp** variable is updated with the temperature data, and it is now displayed on the screen.

```dart
Text(
  temp == 0.0 ? '--' : '${temp.round()}°C',
  style: const TextStyle(
    color: Colors.white,
    fontSize: 70,
    fontWeight: FontWeight.bold,
  ),
),
```

&nbsp;

# Conclusion

Through this straightforward project, I achieved a significant milestone by creating my very first Flutter application. Moreover, I expanded my understanding of stateful widgets and gained valuable insights into working with APIs.

My passion for designing a search bar was ignited during this project. However, I recognized that this feature exceeded the scope of the current project. As a result, I focused solely on creating the UI for the search bar and postponed the development of its actual functionality to a future project.