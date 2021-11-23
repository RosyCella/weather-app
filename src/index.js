import { StrictMode } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";
import Daily from "./Daily";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <SearchBar />
    <Daily />
  </StrictMode>,
  rootElement
);
