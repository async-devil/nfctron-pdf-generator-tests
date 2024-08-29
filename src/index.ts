import { compile } from "@fileforge/react-print";
import { SampleDocument } from "./sample";
import htmlToPdfmake from "html-to-pdfmake";
import PdfPrinter from "pdfmake";
import { createWriteStream } from "node:fs";
import { JSDOM } from "jsdom";

const fonts = {
  Roboto: {
    normal: "./src/roboto-regular-webfont.ttf",
    bold: "./src/roboto-bold-webfont.ttf",
  },
};

compile(SampleDocument()).then(async (html) => {
  const { window } = new JSDOM(html);
  const input = htmlToPdfmake(html, { window });

  const printer = new PdfPrinter(fonts);

  const pdfDoc = printer.createPdfKitDocument({ content: input });
  pdfDoc.pipe(createWriteStream("test1.pdf"));
  pdfDoc.end();
});

// (async () => {
//   satori(SampleDocument(), {
//     fonts: [
//       {
//         name: "Roboto",
//         data: await (
//           await fetch(
//             "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf"
//           )
//         ).arrayBuffer(),
//         weight: 400,
//         style: "normal",
//       },
//     ],
//     height: 595,
//     width: 842,
//   }).then(async (svg) => {
//     writeFile("sample.svg", svg);
//   });
// })();
