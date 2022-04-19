# Zemoga Challenge!

## Libraries/tools

This project uses libraries and tools like:
- es6 syntax and [babel](https://babeljs.io)
- [react](https://facebook.github.io/react) for the Website App and Desktop App,
- [react-native](https://facebook.github.io/react-native) for the iOS & Android Apps
- [react-query](https://react-query.tanstack.com) is for fetching, caching, synchronizing and updating global state
- [react-navigation](https://reactnavigation.org) is for routing and navigation.
- [native-base](https://nativebase.io/) is an accessible, utility-first component library that helps you build consistent UI across Android and iOS
- [axios](https://axios-http.com/) is a simple promise based HTTP client
- [react-native-config](https://github.com/luggit/react-native-config)is to expose config variables to the project
- [react-native-i18n](https://github.com/AlexanderZaytsev/react-native-i18n)
- [react-native-segmented-control-tab](https://github.com/kirankalyan5/react-native-segmented-control-tab) is a component with the same concept of react native's SegmantedControlIOS, Primarily built to support both IOS and Android.

### Structure

This is an structure based on features, every feature is independent.

```
features
└── Posts
      ├── components (specific for this feature)
      ├── idnex.js (RN's Stack)
      ├── List.js (View for List's post)
      └── ... 
```

## How to run

```
# git clone git@github.com:miguelati/zemoga.git
# cd zemoga
# yarn
# npx react-native run-ios // for Android npx react-native run-android
# yarn test // for run all tests
```
