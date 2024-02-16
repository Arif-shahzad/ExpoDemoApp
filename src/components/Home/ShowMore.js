import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  hp,
  wp,
  normalize,
  LatoBold,
  LatoSemiBold,
} from "../../utills/Constants";

const ShowMore = ({ text }) => (
  <View style={styles.categoryView}>
    <Text style={styles.Text1}>{text}</Text>
    <TouchableOpacity>
      <Text style={styles.showMoreText}>Show More</Text>
    </TouchableOpacity>
  </View>
);

export default ShowMore;

const styles = StyleSheet.create({
  categoryView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: hp(2.5),
    marginHorizontal: wp(4),
  },
  Text1: {
    // fontFamily: LatoBold,
    fontSize: normalize(16),
    color: "#252B5C",
    lineHeight: normalize(21),
  },
  showMoreText: {
    // fontFamily: LatoSemiBold,
    fontSize: normalize(10),
    color: "#234F68",
    lineHeight: normalize(9),
  },
});
