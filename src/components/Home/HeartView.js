import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { HeartIcon, HeartIcon2 } from "../../utills/Images";
import { wp } from "../../utills/Constants";

const HeartView = ({ like, circleSize, heartSize }) => {
  return (
    <TouchableOpacity
      style={[
        styles.circleview,
        { width: wp(circleSize), height: wp(circleSize) },
        { borderRadius: wp(circleSize) / 2 },
        like ? { backgroundColor: "#EC5E87" } : { backgroundColor: "white" },
      ]}
    >
      <Image
        source={like ? HeartIcon : HeartIcon2}
        style={{ width: wp(heartSize), height: wp(heartSize) }}
      />
    </TouchableOpacity>
  );
};

export default HeartView;

const styles = StyleSheet.create({
  circleview: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
  },
});
