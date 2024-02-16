import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  useAnimatedValue,
} from "react-native";
import {
  hp,
  wp,
  normalize,
  Lato,
  LatoBold,
  LatoHeavy,
  LatoSemiBold,
  ApartmentImage,
} from "../../utills/Constants";
import {
  Location,
  BedIcon,
  WashroomIcon,
  AreaIcon,
  ApartmentStarIcon1,
} from "../../utills/Images";
import HeartView from "./HeartView";
import { useNavigation } from "@react-navigation/native";

const AppartmentCard = ({ vertical, pkrDisplay }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[
        styles.mainView,
        vertical && styles.mainViewVertical,
        { borderWidth: 0 },
      ]}
      onPress={() => navigation.navigate("Info")}
    >
      <ImageBackground
        source={{ uri: ApartmentImage }}
        style={[
          styles.backgroundImageStyle,
          vertical && styles.backgroundImageStyleVertical,
        ]}
        resizeMode='cover'
      >
        <View style={styles.heartView}>
          <HeartView like={true} circleSize={6} heartSize={3.5} />
        </View>
        {pkrDisplay && (
          <View style={styles.imagepriceview}>
            <Text style={styles.imagepkrText}>
              PKR <Text style={{ fontSize: normalize(11) }}>900K</Text>
            </Text>
          </View>
        )}
      </ImageBackground>
      <View style={{ ...styles.subView, paddingRight: vertical ? 0 : wp(2) }}>
        <View
          style={[
            styles.forSaleView,
            vertical ? { marginTop: hp(1.2) } : { marginTop: hp(0) },
          ]}
        >
          <View style={styles.flexRow}>
            <Text style={styles.forSaleText}>For Sale</Text>
            <Image
              source={ApartmentStarIcon1}
              style={styles.starIcon}
              resizeMode='contain'
            />
            <Text style={styles.ratingText}>5</Text>
          </View>
          <Text style={styles.daysText}>10 days ago</Text>
        </View>
        <Text
          numberOfLines={1}
          lineBreakMode='tail'
          style={[
            styles.titleText,
            vertical ? { marginTop: hp(1) } : { marginTop: hp(1.5) },
          ]}
        >
          Apartment
        </Text>
        {vertical && <PriceDisplay vertical={vertical} text='900K' />}
        <View
          style={[
            styles.flexRow,
            vertical ? { marginTop: hp(0.4) } : { marginTop: hp(1.2) },
          ]}
        >
          <Image
            source={Location}
            style={styles.locationIcon}
            resizeMode='contain'
          />
          <Text
            numberOfLines={1}
            lineBreakMode='tail'
            style={styles.addressText}
          >
            Address Address
          </Text>
        </View>
        <View
          style={[
            styles.flexRow,
            vertical ? styles.bottomIconMainView : { marginTop: hp(1.5) },
          ]}
        >
          <IconDisplay icon={BedIcon} text='9' vertical={vertical} />
          <IconDisplay icon={WashroomIcon} text='5' vertical={vertical} />
          <IconDisplay icon={AreaIcon} text='100 Sq. ft.' vertical={vertical} />
        </View>
        {!vertical && <PriceDisplay vertical={vertical} text='900K' />}
      </View>
    </TouchableOpacity>
  );
};

const IconDisplay = ({ icon, text, vertical }) => {
  return (
    <View
      style={[styles.bottomIconSingleView, !vertical && { marginRight: wp(5) }]}
    >
      <Image
        source={icon}
        style={styles.bottomIconImage}
        resizeMode='contain'
      />
      <Text
        numberOfLines={1}
        lineBreakMode='tail'
        style={[styles.IconText, vertical && { maxWidth: wp(15) }]}
      >
        {text}
      </Text>
    </View>
  );
};

const PriceDisplay = ({ vertical, text }) => {
  return (
    <View style={[styles.pkrView, !vertical && { marginTop: hp(1.2) }]}>
      <Text style={[styles.pkrText]}>{text}</Text>
    </View>
  );
};

export default AppartmentCard;

const styles = StyleSheet.create({
  mainView: {
    width: wp(92),
    flexDirection: "row",
    backgroundColor: "#F5F4F8",
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
    borderRadius: wp(7),
    borderColor: "#D5F067",
  },
  mainViewVertical: {
    flexDirection: "column",
    width: wp(44),
  },
  backgroundImageStyle: {
    width: hp(16),
    height: hp(17),
    marginRight: wp(3),
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: wp(6),
    overflow: "hidden",
  },
  backgroundImageStyleVertical: {
    width: wp(40),
    height: wp(40),
    marginRight: 0,
    borderRadius: wp(6),
    overflow: "hidden",
  },
  heartView: {
    marginTop: wp(2),
    marginHorizontal: wp(2),
    alignItems: "flex-end",
  },
  specialDealView: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#D5F067",
    borderRadius: wp(2),
    paddingRight: wp(2),
  },
  dealView: {
    borderRadius: wp(2),
    backgroundColor: "white",
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.3),
  },
  dealText: {
    // fontFamily: LatoBold,
    fontSize: normalize(9),
    lineHeight: normalize(13),
    color: "black",
  },
  imagepriceview: {
    alignSelf: "flex-end",
    marginRight: wp(2),
    marginBottom: hp(1),
    backgroundColor: "#234F68",
    paddingHorizontal: wp(2.5),
    paddingVertical: hp(0.5),
    borderRadius: wp(2),
  },
  imagepkrText: {
    color: "#F5F4F8",
    // fontFamily: LatoHeavy,
    fontSize: normalize(7),
  },
  flexRow: {
    flexDirection: "row",
  },
  subView: {
    flex: 1,
    justifyContent: "center",
  },
  forSaleView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  forSaleText: {
    color: "#EC5E87",
    // fontFamily: LatoSemiBold,
    fontSize: normalize(9),
    marginRight: wp(3),
    lineHeight: normalize(12),
  },
  starIcon: {
    width: hp(1.3),
    height: hp(1.3),
    marginRight: wp(1),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    tintColor: "#FFC42D",
  },
  ratingText: {
    color: "#53587A",
    // fontFamily: LatoSemiBold,
    fontSize: normalize(9),
    lineHeight: normalize(12),
  },
  daysText: {
    // fontFamily: Lato,
    fontSize: normalize(9),
    color: "#53587A",
    lineHeight: normalize(12),
  },
  titleText: {
    color: "#252B5C",
    // fontFamily: LatoBold,
    fontSize: normalize(12),
    lineHeight: normalize(16),
    letterSpacing: 0.36,
  },
  locationIcon: {
    width: hp(1.2),
    height: hp(1.2),
    marginRight: wp(1),
    alignSelf: "center",
  },
  addressText: {
    flex: 1,
    color: "#53587A",
    // fontFamily: Lato,
    fontSize: normalize(9),
    lineHeight: normalize(12),
  },
  bottomIconMainView: {
    gap: wp(3),
    marginVertical: hp(1),
  },
  bottomIconSingleView: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomIconImage: {
    width: hp(1.7),
    height: hp(1.7),
    justifyContent: "center",
    marginRight: wp(1.5),
  },
  IconText: {
    color: "#53587A",
    // fontFamily: Lato,
    fontSize: normalize(10),
    lineHeight: normalize(12),
  },
  pkrView: {
    flexDirection: "row",
    alignItems: "center",
  },
  pkrText: {
    color: "#252B5C",
    // fontFamily: LatoHeavy,
    fontSize: normalize(14),
  },
  pkrTextCut: {
    color: "#550D23",
    // fontFamily: LatoBold,
    fontSize: normalize(12),
    marginRight: wp(2),
    textDecorationLine: "line-through",
  },
});
