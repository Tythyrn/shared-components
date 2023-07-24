import React from "react";
import { createRoot } from "react-dom/client";
import ReactPreactBridge from "./ReactPreactBridge";
import "preact/debug"; // <-- Add this line at the top of your main entry file

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<ReactPreactBridge />);