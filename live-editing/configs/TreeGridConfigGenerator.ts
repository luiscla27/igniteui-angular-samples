import { IgxTreeGridModule } from "igniteui-angular";
import {
    TreeGridChilddatakeySampleComponent
} from "../../src/app/tree-grid/tree-grid-childdatakey-sample/tree-grid-childdatakey-sample.component";
import {
    TreeGridPrimaryforeignkeySampleComponent
} from "../../src/app/tree-grid/tree-grid-primaryforeignkey-sample/tree-grid-primaryforeignkey-sample.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class TooltipConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // TreeGrid ChildDataKey Sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/tree-grid-childdatakey-sample/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridChilddatakeySampleComponent],
                ngDeclarations: [TreeGridChilddatakeySampleComponent],
                ngImports: [IgxTreeGridModule]
            }),
            component: TreeGridChilddatakeySampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        // TreeGrid Primary/Foreign Key Sample
        configs.push(new Config({
            additionalFiles: ["/src/app/tree-grid/tree-grid-primaryforeignkey-sample/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTreeGridModule, TreeGridPrimaryforeignkeySampleComponent],
                ngDeclarations: [TreeGridPrimaryforeignkeySampleComponent],
                ngImports: [IgxTreeGridModule]
            }),
            component: TreeGridPrimaryforeignkeySampleComponent,
            shortenComponentPathBy: "/tree-grid/"
        }));

        return configs;
    }
}