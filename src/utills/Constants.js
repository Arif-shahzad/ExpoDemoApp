import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export const wp = (percentage) => {
  return SCREEN_WIDTH * (percentage / 100);
};

export const hp = (percentage) => {
  return SCREEN_HEIGHT * (percentage / 100);
};

// based on iphone 13 pro scale
const scale = SCREEN_WIDTH / 375;

export function normalize(size) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export const Lato = "Lato";
export const LatoLight = "Lato-Light";
export const LatoBold = "Lato-Bold";
export const LatoHeavy = "Lato-Heavy";
export const LatoMedium = "Lato-Medium";
export const LatoSemiBold = "Lato-SemiBold";
export const LatoThin = "Lato-Thin";
export const Poppins = "Poppins";
export const PoppinsMedium = "Poppins-Medium";
export const PoppinsBold = "Poppins-Bold";
export const PoppinsSemiBold = "Poppins-SemiBold";
export const Raleway = "Raleway";

export const ApartmentImage =
  "https://img.freepik.com/free-photo/amazing-aerial-shot-singapore-cityscape-with-lots-skyscrapers_181624-18618.jpg";
export const CityImage =
  "https://mosqpedia.org/img/cache/largeimage/E7zPkew893EjHLpgd8S8lXYeLFWZprVakCqKBTFl";
