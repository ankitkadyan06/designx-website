import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "keen-slider/keen-slider.min.css";
import "react-tooltip/dist/react-tooltip.css";
import ReactGA from "react-ga4";

ReactGA.initialize("G-VPNQ61TJKP");
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
