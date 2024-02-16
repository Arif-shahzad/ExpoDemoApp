import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { LocationIcon, SeacrhIcon, VerticalLine } from "../../utills/Images";
import { Lato, hp, normalize, wp } from "../../utills/Constants";

const SearchBox = ({ setVisibility }) => {
  return (
    <TouchableOpacity
      style={styles.searchBar}
      onPress={() => setVisibility(true)}
    >
      <View style={styles.flexRow}>
        <Image
          source={SeacrhIcon}
          style={styles.searchStyle}
          resizeMode='contain'
          tintColor='#252B5C'
        />
        <Text style={styles.searchInput}>Search Project, Apartment, etc</Text>
      </View>
      <View style={styles.flexRow}>
        <Image
          source={VerticalLine}
          style={styles.verticalLineStyle}
          resizeMode='contain'
          tintColor='#A1A5C1'
        />
        <Image
          source={LocationIcon}
          style={styles.locationIcon}
          resizeMode='contain'
          tintColor='#A1A5C1'
        />
      </View>
    </TouchableOpacity>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchBar: {
    width: wp(92),
    height: hp(9),
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: wp(3),
    backgroundColor: "#ECEDF3",
    paddingHorizontal: wp(4),
    marginTop: hp(2.5),
  },
  searchStyle: {
    width: wp(5),
    height: wp(5),
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    // fontFamily: Lato,
    fontSize: normalize(12),
    lineHeight: normalize(14),
    color: "#A1A5C1",
    marginHorizontal: wp(3),
  },
  verticalLineStyle: {
    width: wp(1),
    height: hp(5),
  },
  locationIcon: {
    width: wp(8),
    height: wp(8),
    marginLeft: wp(4),
  },
});
