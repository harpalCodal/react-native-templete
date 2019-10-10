import Color from "src/utils/color";

export default {
  container: {
    flex: 1,
    backgroundColor: Color.BG_COLOR
  },
  contentCenter: {
    alignItems: "center",
    justifyContent: "center"
  },
  padder: {
    padding: 15
  },
  borderInput:{
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    borderColor: Color.BORDER_COLOR,
    borderWidth: 1
  }
};
