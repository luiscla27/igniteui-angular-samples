import { Component, OnInit } from "@angular/core";
import { getCurrentResourceStrings, changei18n } from "igniteui-angular";
import { DATA } from "./nwindData";

@Component({
    selector: "localization-sample-2",
    styleUrls: ["./localization-sample-2.component.scss"],
    templateUrl: "localization-sample-2.component.html"
})

export class LocalizationSample2Component implements OnInit {

    public data: any[];

    constructor() {}

    public ngOnInit(): void {
        this.data = DATA;

        const currentRS = getCurrentResourceStrings();

        for (const key of Object.keys(currentRS)) {
            if (currentRS[key].indexOf('[Localizable]') === -1) {
                currentRS[key] = '[Localizable]'+ currentRS[key];
            }
        }

        changei18n(currentRS);
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat("en-US").format(val);
    }

    public formatCurrency(val: string) {
        return parseInt(val, 10).toFixed(2);
    }
}
