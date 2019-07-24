import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const Typography: React.SFC = props => {
  return <System.Typography {...props} style={style} />;
};

Typography.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Typography, {
  align: {
    title: "Align",
    options: ["inherit", "center", "left", "right", "justify"],
    optionTitles: ["Inherit", "Center", "Left", "Right", "Justify"],
    type: ControlType.Enum
  },
  color: {
    title: "Color",
    options: [
      "inherit",
      "primary",
      "secondary",
      "error",
      "initial",
      "textPrimary",
      "textSecondary"
    ],
    optionTitles: [
      "Inherit",
      "Primary",
      "Secondary",
      "Error",
      "Initial",
      "TextPrimary",
      "TextSecondary"
    ],
    type: ControlType.Enum
  },
  component: {
    title: "Component",
    options: [
      "object",
      "a",
      "abbr",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "bdi",
      "bdo",
      "big",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "div",
      "dl",
      "dt",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
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
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "legend",
      "li",
      "link",
      "main",
      "map",
      "mark",
      "menu",
      "menuitem",
      "meta",
      "meter",
      "nav",
      "noindex",
      "noscript",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "script",
      "section",
      "select",
      "small",
      "source",
      "span",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
      "webview",
      "template"
    ],
    optionTitles: [
      "Object",
      "A",
      "Abbr",
      "Address",
      "Area",
      "Article",
      "Aside",
      "Audio",
      "B",
      "Base",
      "Bdi",
      "Bdo",
      "Big",
      "Blockquote",
      "Body",
      "Br",
      "Button",
      "Canvas",
      "Caption",
      "Cite",
      "Code",
      "Col",
      "Colgroup",
      "Data",
      "Datalist",
      "Dd",
      "Del",
      "Details",
      "Dfn",
      "Dialog",
      "Div",
      "Dl",
      "Dt",
      "Em",
      "Embed",
      "Fieldset",
      "Figcaption",
      "Figure",
      "Footer",
      "Form",
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
      "Html",
      "I",
      "Iframe",
      "Img",
      "Input",
      "Ins",
      "Kbd",
      "Keygen",
      "Label",
      "Legend",
      "Li",
      "Link",
      "Main",
      "Map",
      "Mark",
      "Menu",
      "Menuitem",
      "Meta",
      "Meter",
      "Nav",
      "Noindex",
      "Noscript",
      "Ol",
      "Optgroup",
      "Option",
      "Output",
      "P",
      "Param",
      "Picture",
      "Pre",
      "Progress",
      "Q",
      "Rp",
      "Rt",
      "Ruby",
      "S",
      "Samp",
      "Script",
      "Section",
      "Select",
      "Small",
      "Source",
      "Span",
      "Strong",
      "Style",
      "Sub",
      "Summary",
      "Sup",
      "Table",
      "Tbody",
      "Td",
      "Textarea",
      "Tfoot",
      "Th",
      "Thead",
      "Time",
      "Title",
      "Tr",
      "Track",
      "U",
      "Ul",
      "Var",
      "Video",
      "Wbr",
      "Webview",
      "Template"
    ],
    type: ControlType.Enum
  },
  display: {
    title: "Display",
    options: ["initial", "block", "inline"],
    optionTitles: ["Initial", "Block", "Inline"],
    type: ControlType.Enum
  },
  gutterBottom: { title: "GutterBottom", type: ControlType.Boolean },
  noWrap: { title: "NoWrap", type: ControlType.Boolean },
  paragraph: { title: "Paragraph", type: ControlType.Boolean },
  variant: {
    title: "Variant",
    options: [
      "inherit",
      "button",
      "caption",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "overline",
      "subtitle1",
      "subtitle2",
      "body1",
      "body2",
      "srOnly"
    ],
    optionTitles: [
      "Inherit",
      "Button",
      "Caption",
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "Overline",
      "Subtitle1",
      "Subtitle2",
      "Body1",
      "Body2",
      "SrOnly"
    ],
    type: ControlType.Enum
  }
});
