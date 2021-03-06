import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const CardContent: React.SFC = props => {
  return <System.CardContent {...props} style={style} />;
};

CardContent.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(CardContent, {
  component: {
    title: "Component",
    options: [
      "object",
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
      "col",
      "colgroup",
      "data",
      "dd",
      "del",
      "details",
      "dfn",
      "div",
      "dt",
      "em",
      "embed",
      "figcaption",
      "figure",
      "footer",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "i",
      "iframe",
      "img",
      "input",
      "kbd",
      "keygen",
      "legend",
      "main",
      "mark",
      "menu",
      "menuitem",
      "meter",
      "nav",
      "noindex",
      "noscript",
      "output",
      "p",
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
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "u",
      "var",
      "wbr",
      "webview"
    ],
    optionTitles: [
      "Object",
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
      "Col",
      "Colgroup",
      "Data",
      "Dd",
      "Del",
      "Details",
      "Dfn",
      "Div",
      "Dt",
      "Em",
      "Embed",
      "Figcaption",
      "Figure",
      "Footer",
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "Head",
      "Header",
      "Hgroup",
      "Hr",
      "I",
      "Iframe",
      "Img",
      "Input",
      "Kbd",
      "Keygen",
      "Legend",
      "Main",
      "Mark",
      "Menu",
      "Menuitem",
      "Meter",
      "Nav",
      "Noindex",
      "Noscript",
      "Output",
      "P",
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
      "Table",
      "Tbody",
      "Td",
      "Tfoot",
      "Th",
      "Thead",
      "Time",
      "Tr",
      "U",
      "Var",
      "Wbr",
      "Webview"
    ],
    type: ControlType.Enum
  }
});
