import * as _ from "lodash";
import "../../assets/index.scss";

window.addEventListener("DOMContentLoaded", () => {
  const div = document.createElement("div");
  div.innerHTML = _.join(["Hello", "webpack"], " ");
  document.body.appendChild(div);
});
