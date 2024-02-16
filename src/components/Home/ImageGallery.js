import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { ArrowIcon } from "../../utills/Images";
import {
  hp,
  wp,
  normalize,
  Lato,
  LatoBold,
  ApartmentImage,
} from "../../utills/Constants";
import LinearGradient from "react-native-linear-gradient";

const Display = () => {
  return (
    <ImageBackground
      source={{
        uri: ApartmentImage,
      }}
      imageStyle={styles.imageStyle}
      resizeMode='cover'
    >
      <TouchableOpacity style={[styles.imageStyle, { flex: 1 }]}>
        <View style={styles.textView}>
          <Text numberOfLines={2} style={styles.homeImageText1}>
            Arartment
          </Text>
          <Text style={styles.homeImageText2}>All discount up to 60%</Text>
        </View>
        <View style={styles.arrowIconView}>
          <Image
            source={ArrowIcon}
            style={{ width: wp(6) }}
            resizeMode='contain'
          />
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const ImageGallery = () => {
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={Array.from({ length: 10 })}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => <Display />}
      contentContainerStyle={styles.content}
    />
  );
};

export default ImageGallery;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: wp(4.5),
    columnGap: wp(4),
  },
  imageStyle: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: wp(72),
    height: hp(23),
    borderRadius: wp(6),
  },
  textView: {
    marginHorizontal: wp(3.5),
  },
  homeImageText1: {
    color: "white",
    // fontFamily: LatoBold,
    fontSize: normalize(18),
    letterSpacing: 0.54,
    lineHeight: normalize(21),
    marginTop: hp(5),
  },
  homeImageText2: {
    // fontFamily: Lato,
    fontSize: normalize(10),
    color: "white",
    letterSpacing: 0.54,
    lineHeight: normalize(21),
  },
  arrowIconView: {
    width: wp(23),
    height: hp(5.7),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#72C5FA",
    borderTopRightRadius: wp(6),
    borderBottomLeftRadius: wp(1.5),
  },
});
