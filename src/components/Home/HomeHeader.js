import React from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import { HeaderLocation, LogoHome } from "../../utills/Images";
import { hp, wp } from "../../utills/Constants";
import ImageGallery from "./ImageGallery";
import CityView from "./CityView";
import AppartmentCard from "./AppartmentCard";
import SearchBox from "./SearchBox";
import ShowMore from "./ShowMore";

const HomeHeader = ({ setVisibility }) => {
  return (
    <>
      <View style={styles.header}>
        <Image
          source={LogoHome}
          style={styles.imageStyle1}
          resizeMode='contain'
        />
        <Image
          source={HeaderLocation}
          style={styles.imageStyle2}
          resizeMode='contain'
        />
      </View>
      <SearchBox setVisibility={setVisibility} />
      <View style={styles.viewStyle}>
        <ImageGallery />
      </View>
      <View style={styles.viewStyle}>
        <CityView />
      </View>
      <ShowMore text={"Popular Nearest You"} />
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={Array.from({ length: 10 })}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <AppartmentCard vertical={false} pkrDisplay={false} />
          )}
          contentContainerStyle={{ paddingHorizontal: wp(4), columnGap: wp(4) }}
        />
      </View>
      <ShowMore text={"Recommended For You"} />
    </>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(1),
    marginHorizontal: wp(4),
  },
  imageStyle1: {
    width: wp(50),
    height: wp(14),
  },
  imageStyle2: {
    width: wp(14),
    height: wp(14),
  },
  viewStyle: {
    marginTop: hp(2.5),
  },
});
