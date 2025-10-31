This is a new [**React Native**] project. This project will showcase RN FastImage functionalities.

# React Native Fast Image Usage

This project uses @d11/react-native-fast-image to render SVG from remote url
Below are few sample url's

```sh
https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/car.svg
https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/android.svg
https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/compass.svg
https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/rails.svg
```

The SVG once downloaded is saved at same location where Images are cached in android and iOS.

Android Location

```sh
In device explorer: /data/data/com.fastimagesvgpoc/cache/image_manager_disk_cache/...
```

IOS Location

First run command

```sh
xcrun simctl listapps booted
```

Then you will get some app path in simulator
If you try something like below with correct id's then you will find the cache location

```sh
cd /Users/ankitshukla/Library/Developer/CoreSimulator/Devices/20AC1B0E-480B-4433-8977-03F1B977C521/data/Containers/Data/Application/59F4C1C1-B741-4F25-BDA5-31494244C4B7/Library/Caches/com.hackemist.SDWebImageCache.default/
```

# Getting Started

## Step 1: Start Metro

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```
