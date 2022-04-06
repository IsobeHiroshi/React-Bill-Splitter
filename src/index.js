import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
