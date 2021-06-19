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
  topBanner: {
    backgroundColor: Colours.royal,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: 120,
    width: "100%",
  },
  btmBanner: {
    backgroundColor: Colours.royal,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: 100,
    width: "100%",
  },
  textMain: {
    color: Colours.royal,
    textAlign: TextConf.txtAlign,
    fontSize: TextConf.txtFontBig,
    paddingVertical: 15,
  },
  txtMainSmall: {
    color: Colours.royal,
    textAlign: TextConf.txtAlign,
    fontSize: TextConf.txtFontSmall,
    paddingVertical: 15,
  },
  topBanTxt: {
    color: Colours.snow,
    textAlign: TextConf.txtAlign,
    fontSize: TextConf.txtFont,
    fontWeight: TextConf.txtWeight,
  },
  btmBanTxt: {
    color: Colours.snow,
    textAlign: TextConf.txtAlign,
    fontSize: TextConf.txtFontSmall,
    fontWeight: TextConf.txtWeight,
  },
  btns: {
    backgroundColor: Colours.royal,
    borderRadius: 10,
    borderColor: Colours.cornflower,
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: 250,
    marginVertical: 10,
  },
  btnsExit: {
    backgroundColor: Colours.snow,
    borderRadius: 10,
    borderColor: Colours.cornflower,
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: 250,
    marginVertical: 10,
  },
  btnsTxt: {
    color: Colours.snow,
    textAlign: TextConf.txtAlign,
    fontSize: TextConf.txtFont,
  },
  btnsExitTxt: {
    color: Colours.royal,
    textAlign: TextConf.txtAlign,
    fontSize: TextConf.txtFont,
  },
  txtInput: {
    borderBottomColor: Colours.steel,
    borderTopColor: Colours.steel,
    borderRightColor: Colours.steel,
    borderLeftColor: Colours.steel,
    borderWidth: 2.5,
    width: 200,
    color: Colours.cornflower,
    textAlign: TextConf.txtAlign,
    fontSize: TextConf.txtFontBig,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colours.steel,
  },
});

export default styles;
