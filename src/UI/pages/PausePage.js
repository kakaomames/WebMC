
import { Page } from "./Page.js";
import "../../i18n.js";

class PausePage extends Page {
    static get outdegree() { return ["play", "welcome", "setting", ]; };
    onHistoryBack() { this.close(); };
    onTransitionedFromThis(to) {
        if (to == "welcome") this.close();
    };
};

PausePage.asyncLoadAndDefine();

for (var key in i18n['ui']) {
    try {
        document.getElementById(key).innerText = i18n['ui'][key];
    }
    catch (e) {
        // console.log(e);
    }
}

export {
    PausePage,
};
