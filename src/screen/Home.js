import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Platform,
  View,
} from "react-native";
import AppartmentCard from "../components/Home/AppartmentCard";
import HomeHeader from "../components/Home/HomeHeader";
import { hp, wp } from "../utills/Constants";
import ShowMore from "../components/Home/ShowMore";
import AgentsPics from "../components/Home/AgentsPics";
import Modal from "../components/Home/Modal";

const Home = () => {
  const [visibility, setVisibility] = useState(false);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        ListHeaderComponent={<HomeHeader setVisibility={setVisibility} />}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={Array.from({ length: 10 })}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <AppartmentCard vertical={true} pkrDisplay={true} />
        )}
        ListFooterComponent={
          <>
            <ShowMore text={"Top Estate Agent"} />
            <View style={{ marginBottom: hp(3.5) }}>
              <AgentsPics />
            </View>
          </>
        }
        contentContainerStyle={{
          paddingTop: Platform.OS == "android" ? hp(5) : hp(1),
        }}
        columnWrapperStyle={styles.columnStyle}
      />
      {visibility && (
        <Modal visibility={visibility} setVisibility={setVisibility} />
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  columnStyle: {
    justifyContent: "space-between",
    marginBottom: hp(2),
    alignItems: "flex-start",
    marginHorizontal: wp(4),
  },
});
