import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LocalizationService } from "./localization-service";
import { RouterService } from "./router-service";

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        RouterService,
        LocalizationService
    ]
})
export class ServiceModule { }