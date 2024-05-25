
import { Page } from "./Page.js";
import "../../i18n.js";
class HowToPlayPage extends Page {
    static get outdegree() { return ["welcome", ]; };
    constructor() {
        super();
        for (var key in i18n['how-to-play']) {
            var node = this.shadowRoot.getElementById(key);
            if (node) { node.innerHTML = i18n['how-to-play'][key]; }
        }
    }
    onHistoryBack() { this.close(); };
}

HowToPlayPage.asyncLoadAndDefine();
export {
    HowToPlayPage,
};
