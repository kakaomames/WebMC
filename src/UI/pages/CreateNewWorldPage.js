
import { Page, pm } from "./Page.js";
import "../../i18n.js";
class CreateNewWorldPage extends Page {
    static get outdegree() { return ["select-world", "play", ]; };
    constructor() {
        super();
        for (var key in i18n['ui']) {
            var node = this.shadowRoot.getElementById(key);
            if (node) { node.innerText = i18n['ui'][key]; node.setAttribute('placeholder', i18n['ui'][key]); }
        }
        this.typeBtn = this.shadowRoot.getElementById("world-type-btn-event");
        this.typeEcho = this.shadowRoot.getElementById("world-type-echo");
        this.typeEcho.setAttribute("data", "normal");
        this.createBtn = this.shadowRoot.getElementById("create-new-world");
        this.worldName = this.shadowRoot.getElementById("world-name");
        this.worldSeed = this.shadowRoot.getElementById("world-seed");

        this.typeBtn.addEventListener("click", () => {
            if (this.typeEcho.innerHTML == i18n['ui']['normal']) {
                this.typeEcho.innerHTML = i18n['ui']['flat'];
                this.typeEcho.setAttribute("data", "flat");
            }
            else {
                this.typeEcho.innerHTML = i18n['ui']['normal'];
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
