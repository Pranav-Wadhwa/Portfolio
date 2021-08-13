var path = require("path");

module.exports = {
  pages: {
    index: {
      entry: "src/pages/home/home.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Pranav Wadhwa",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    upright: {
      entry: "src/pages/detail/page_upright.js",
      template: "public/index.html",
      filename: "upright.html",
      title: "Upright | Pranav Wadhwa",
      chunks: ["chunk-vendors", "chunk-common", "upright"]
    },
    yourfood: {
      entry: "src/pages/detail/page_yourfood.js",
      template: "public/index.html",
      filename: "yourfood.html",
      title: "YourFood | Pranav Wadhwa",
      chunks: ["chunk-vendors", "chunk-common", "yourfood"]
    },
    simpl: {
      entry: "src/pages/detail/page_simpl.js",
      template: "public/index.html",
      filename: "simpl.html",
      title: "SimpL | Pranav Wadhwa",
      chunks: ["chunk-vendors", "chunk-common", "simpl"]
    },
    lecture_noted: {
      entry: "src/pages/detail/page_lecture_noted.js",
      template: "public/index.html",
      filename: "lecture_noted.html",
      title: "Lecture Noted | Pranav Wadhwa",
      chunks: ["chunk-vendors", "chunk-common", "lecture_noted"]
    },
    biopath: {
      entry: "src/pages/detail/page_biopath.js",
      template: "public/index.html",
      filename: "biopath.html",
      title: "Biopath | Pranav Wadhwa",
      chunks: ["chunk-vendors", "chunk-common", "biopath"]
    },
    gap: {
      entry: "src/pages/detail/page_gap.js",
      template: "public/index.html",
      filename: "gap.html",
      title: "Get Acting People | Pranav Wadhwa",
      chunks: ["chunk-vendors", "chunk-common", "gap"]
    },
    delfi: {
      entry: "src/pages/detail/page_delfi.js",
      template: "public/index.html",
      filename: "delfi.html",
      title: "Delfi | Pranav Wadhwa",
      chunks: ["chunk-vendors", "chunk-common", "delfi"]
    },
    flybuy: {
      entry: "src/pages/detail/page_flybuy.js",
      template: "public/index.html",
      filename: "flybuy.html",
      title: "FlyBuy | Pranav Wadhwa",
      chunks: ["chunk-vendors", "chunk-common", "flybuy"]
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
                    @import "@/styles/_variables.scss";
                    @import "@/styles/_fonts.scss";
                    @import "@/styles/_breakpoints.scss";
                    `
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        assets: path.resolve(__dirname, "../src")
      }
    }
  }
};
