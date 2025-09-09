
import ReactDom from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css"
import APP from "./App";
import App from "./App";
let rootele = document.getElementById("root");

let root = ReactDom.createRoot(rootele);
root.render(<App/>);