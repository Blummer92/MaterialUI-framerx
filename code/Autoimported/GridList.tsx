import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const GridList: React.SFC = props => {
  return <System.GridList {...props} style={style} />;
};

GridList.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(GridList, {
  cellHeight: {
    title: "CellHeight",
    options: ["auto"],
    optionTitles: ["Auto"],
    type: ControlType.Enum
  },
  cols: { title: "Cols", type: ControlType.Number },
  component: {
    title: "Component",
    options: [
      "abbr",
      "address",
      "article",
      "aside",
      "b",
      "bdi",
      "bdo",
      "big",
      "blockquote",
      "caption",
      "cite",
      "code",
      "data",
      "dd",
      "del",
      "details",
      "dfn",
      "dl",
      "dt",
      "em",
      "figcaption",
      "figure",
      "footer",
      "head",
      "header",
      "hgroup",
      "i",
      "kbd",
      "keygen",
      "main",
      "mark",
      "menu",
      "menuitem",
      "meter",
      "nav",
      "noindex",
      "noscript",
      "ol",
      "output",
      "picture",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "section",
      "small",
      "span",
      "strong",
      "sub",
      "summary",
      "sup",
      "time",
      "u",
      "ul",
      "var",
      "wbr",
      "webview"
    ],
    optionTitles: [
      "Abbr",
      "Address",
      "Article",
      "Aside",
      "B",
      "Bdi",
      "Bdo",
      "Big",
      "Blockquote",
      "Caption",
      "Cite",
      "Code",
      "Data",
      "Dd",
      "Del",
      "Details",
      "Dfn",
      "Dl",
      "Dt",
      "Em",
      "Figcaption",
      "Figure",
      "Footer",
      "Head",
      "Header",
      "Hgroup",
      "I",
      "Kbd",
      "Keygen",
      "Main",
      "Mark",
      "Menu",
      "Menuitem",
      "Meter",
      "Nav",
      "Noindex",
      "Noscript",
      "Ol",
      "Output",
      "Picture",
      "Rp",
      "Rt",
      "Ruby",
      "S",
      "Samp",
      "Section",
      "Small",
      "Span",
      "Strong",
      "Sub",
      "Summary",
      "Sup",
      "Time",
      "U",
      "Ul",
      "Var",
      "Wbr",
      "Webview"
    ],
    type: ControlType.Enum
  },
  spacing: { title: "Spacing", type: ControlType.Number }
});
