
import { Page, pm } from "./Page.js";

class CreateNewWorldPage extends Page {
    static get outdegree() { return ["select-world", "play", ]; };
    constructor() {
        super();
        this.typeBtn = this.shadowRoot.getElementById("world-type-btn");
        this.typeEcho = this.shadowRoot.getElementById("world-type-echo");
        this.typeEcho.setAttribute("data", "normal");
        this.createBtn = this.shadowRoot.getElementById("create-new-word");
        this.worldName = this.shadowRoot.getElementById("world-name");
        this.worldSeed = this.shadowRoot.getElementById("world-seed");

        this.typeBtn.addEventListener("click", () => {
            if (this.typeEcho.innerHTML == "普通") {
                this.typeEcho.innerHTML = "超平坦";
                this.typeEcho.setAttribute("data", "flat");
            }
            else {
                this.typeEcho.innerHTML = "普通";
                this.typeEcho.setAttribute("data", "normal");
            }
        });

        this.createBtn.addEventListener("click", () => {
            let seed = this.worldSeed.value;
            if (seed !== "" && !Number.isNaN(+seed)) seed = +seed;
            pm.openPageByID("play", {
                worldName: this.worldName.value,
                worldType: ({
                    Normal: "pre-classic",
                    Flat: "flat",
                })[this.typeEcho.getAttribute("data")],
                seed,
            });
        });
    };
    onHistoryBack() { this.close(); };
    onTransitioned(from, to, eventName, fromPage, toPage, ...data) {
        if (to == "play") this.close();
    };
};

CreateNewWorldPage.asyncLoadAndDefine();


export {
    CreateNewWorldPage,
};
