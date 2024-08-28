import { renderToFile } from "@react-pdf/renderer";
import { SampleDocument } from "./sample";

renderToFile(SampleDocument(), `${__dirname}/my-doc.pdf`);