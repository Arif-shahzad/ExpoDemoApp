import React from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { hp, wp, normalize, Lato, CityImage } from "../../utills/Constants";

const CityView = () => {
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={Array.from({ length: 10 })}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={[styles.cityMainView, styles.backgroundNotSelected]}
        >
          <Image
            source={{ uri: CityImage }}
            style={styles.cityImage}
            resizeMode='cover'
          />
          <Text style={styles.cityText}>City</Text>
        </TouchableOpacity>
      )}
      contentContainerStyle={{ paddingHorizontal: wp(5), gap: wp(3) }}
    />
  );
};

export default CityView;

const styles = StyleSheet.create({
  cityMainView: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F4F8",
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    borderRadius: wp(7),
    borderWidth: 1,
  },
  backgroundSelected: {
    borderColor: "#72C5FA",
    backgroundColor: "#E6F5FF",
  },
  backgroundNotSelected: {
    backgroundColor: "#F5F4F8",
    borderColor: "#F5F4F8",
  },
  cityImage: {
    width: wp(9),
    height: wp(9),
    marginRight: wp(3),
    borderRadius: hp(5) / 2,
  },
  cityText: {
    // fontFamily: Lato,
    fontSize: normalize(10),
    color: "#252B5C",
    lineHeight: normalize(12),
  },
});
