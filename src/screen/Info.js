import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { hp, wp } from "../utills/Constants";

const Info = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => navigation.goBack()}
    >
      <Text>Info{"\n"}Go back to Hom</Text>
    </TouchableOpacity>
  );
};

export default Info;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: hp(50),
    marginLeft: wp(10),
  },
});
