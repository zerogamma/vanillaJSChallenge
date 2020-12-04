import "./styles.css";
import { getAPI } from "./api.js";

document.getElementById("title").innerHTML = `<h1>Vanilla Challenge!</h1>`;
const entryNode = document.querySelector("#table");
const header = `<div class='header'>
                <div>Title</div>
                <div>type</div>
                <div>Price</div>
                <div>Rating</div>
                </div>`;
entryNode.insertAdjacentHTML("beforeend", header);

getAPI().then((result) => {
  result.forEach((item) => {
    const template = `<div class='item ${item.type === "fruit" ? "extra" : ""}'>
                          <div>
                          ${item.title}
                          </div>
                          <div>
                          ${item.type}
                          </div>
                          <div>
                          ${item.price}
                          </div>
                          <div>
                          ${item.rating}
                          </div>
                       </div>`;
    entryNode.insertAdjacentHTML("beforeend", template);
  });
});
