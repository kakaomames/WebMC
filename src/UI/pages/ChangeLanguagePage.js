
import { Page } from "./Page.js";
import "../../i18n.js";
class ChangeLanguagePage extends Page {
    static get outdegree() { return ["welcome", ]; };
    constructor() {
        super();
        var table = this.shadowRoot.getElementById('table');
        for (var lang in i18n_module.languages) {
            var row = document.createElement('tr');
            row.innerHTML = `<td><mc-button onclick="i18n_module.set_language('${lang}'); location.reload(); ">${i18n_module['languages'][lang]['name']}</mc-button></td>`;
            table.appendChild(row);
        }
    }
    onHistoryBack() { this.close(); };
}

ChangeLanguagePage.asyncLoadAndDefine();
export {
    ChangeLanguagePage,
};
