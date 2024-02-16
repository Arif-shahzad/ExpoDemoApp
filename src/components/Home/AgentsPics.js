import React from "react";
import { View, StyleSheet, Image, Text, FlatList } from "react-native";
import { wp, normalize, Lato, hp } from "../../utills/Constants";
import { AgentsPic1 } from "../../utills/Images";

const AgentsPics = () => {
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={Array.from({ length: 5 })}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <View style={styles.justifyStyle}>
          <Image
            source={AgentsPic1}
            style={styles.imageView}
            resizeMode='contain'
          />
          <Text style={styles.textStyle}>Amanda</Text>
        </View>
      )}
      ItemSeparatorComponent={<View style={{ marginHorizontal: wp(2.8) }} />}
      contentContainerStyle={styles.container}
    />
  );
};

export default AgentsPics;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(6),
    marginBottom: hp(3),
  },
  imageView: {
    width: wp(18),
    height: wp(18),
    borderRadius: wp(18) / 2,
  },
  justifyStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "#252B5C",
    // fontFamily: Lato,
    fontSize: normalize(10),
    lineHeight: normalize(12),
    marginTop: hp(1),
  },
});
