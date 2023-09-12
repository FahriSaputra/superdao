import LocalFont from "next/font/local";

const sfProText = LocalFont({
  variable: "--sf-pro-text",
  src: [
    {
      path: "../font/SF-Pro-Text/sf-pro-text_thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../font/SF-Pro-Text/sf-pro-text_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/SF-Pro-Text/sf-pro-text_regular-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../font/SF-Pro-Text/sf-pro-text_semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../font/SF-Pro-Text/sf-pro-text_bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const sfProDisplay = LocalFont({
  variable: "--sf-pro-display",
  src: [
    {
      path: "../font/SF-Pro-Display/sf-pro-display_thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../font/SF-Pro-Display/sf-pro-display_ultralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../font/SF-Pro-Display/sf-pro-display_light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../font/SF-Pro-Display/sf-pro-display_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/SF-Pro-Display/sf-pro-display_medium.woff2",
      weight: "500",
      style: "normal",
    },

    {
      path: "../font/SF-Pro-Display/sf-pro-display_semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../font/SF-Pro-Display/sf-pro-display_bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export { sfProDisplay, sfProText };
