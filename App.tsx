/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import FastImage from '@d11/react-native-fast-image';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SvgUri} from 'react-native-svg';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text>FastImage with Image and SVG support</Text>
          </View>
          <View />
          <View style={styles.textContainer}>
            <Text>1 - FastImage with Image</Text>
          </View>
          <FastImage
            style={styles.fastImage}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
              cache: FastImage.cacheControl.immutable,
            }}
          />
          <View style={styles.textContainer}>
            <Text>2 - FastImage with SVG</Text>
          </View>
          <FastImage
            style={styles.fastImage}
            source={{
              uri: 'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/atom.svg',
              cache: FastImage.cacheControl.immutable,
            }}
          />
          <View style={styles.textContainer}>
            <Text>3 - FastImage with SVG and dynamic color</Text>
          </View>
          <FastImage
            style={styles.fastImage}
            source={{
              uri: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/icons/heart-fill.svg',
              cache: FastImage.cacheControl.immutable,
              priority: FastImage.priority.normal,
              color: '#553fff',
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={styles.textContainer}>
            <Text>
              4 - react-native-svg Lib - SVGUri with url and dynamic color
            </Text>
          </View>
          <SvgUri
            width="50"
            height="50"
            color="saddlebrown"
            uri="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/icons/heart-fill.svg"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    paddingHorizontal: 24,
  },
  textContainer: {marginBottom: 10, marginTop: 30},
  fastImage: {width: 50, height: 50},
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default App;
