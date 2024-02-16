import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ModalView from "react-native-modal";
import { hp, wp } from "../../utills/Constants";

const Modal = ({ visibility, setVisibility }) => {
  return (
    <ModalView
      backdropOpacity={0.6}
      style={styles.modalView}
      onBackdropPress={() => setVisibility(false)}
      onBackButtonPress={() => setVisibility(false)}
      onSwipeComplete={() => setVisibility(false)}
      isVisible={visibility}
    >
      <View style={styles.mainContainer}>
        <Text>Hello</Text>
      </View>
    </ModalView>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalView: {
    padding: 0,
    margin: 0,
    justifyContent: "flex-end",
  },
  mainContainer: {
    height: hp(50),
    borderTopLeftRadius: wp(4),
    borderTopRightRadius: wp(4),
    backgroundColor: "white",
    paddingTop: hp(2),
  },
});
