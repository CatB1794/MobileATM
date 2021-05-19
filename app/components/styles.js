import { StyleSheet } from "react-native";

import Colours from "../config/Colours";
import TextConf from "../config/TextConf";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colours.snow,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  banners: {
    backgroundColor: Colours.royal,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: 120,
    width: "100%",
  },
  textMain: {
    color: Colours.royal,
    textAlign: TextConf.txtAlign,
    fontSize: TextConf.txtFontBig,
    padding: 15,
  },
  topBanner: {
    color: Colours.snow,
    textAlign: TextConf.txtAlign,
    fontSize: TextConf.txtFont,
    fontWeight: TextConf.txtWeight,
  },
  btmBanner: {
    color: Colours.snow,
    textAlign: TextConf.txtAlign,
    fontSize: TextConf.txtFontSmall,
    fontWeight: TextConf.txtWeight,
  },
  btns: {
    backgroundColor: Colours.royal,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },
  btnsTxt: {
    color: Colours.snow,
    textAlign: TextConf.txtAlign,
    fontSize: TextConf.txtFont,
  },
});

export default styles;
