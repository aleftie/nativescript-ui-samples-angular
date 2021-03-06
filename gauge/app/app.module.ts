import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppComponent } from "./navigation/app.component";
import { routing } from "./app.routing";
import { OptionsService } from "./navigation/options/options.service";
import { ExampleItemService } from "./navigation/exampleItemService.service";
import { ExamplesListDepthComponents } from "./navigation/examples-list/examples-list.component";
import { OptionsComponent } from "./navigation/options/options.component";
import { CommonDirectivesModule } from './navigation/directives/common-directives.module';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        CommonDirectivesModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        routing
    ],
    exports: [
        NativeScriptModule,
        NativeScriptRouterModule
    ],
    declarations: [
        AppComponent,
        ExamplesListDepthComponents,
        OptionsComponent,
    ],
    providers: [
        OptionsService,
        ExampleItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
