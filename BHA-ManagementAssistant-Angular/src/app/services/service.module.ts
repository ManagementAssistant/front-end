import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LocalizationService } from "./localization-service";
import { LoginService } from "./login-service";
import { PopupService } from "./popup-service";
import { RouterService } from "./router-service";
import { StorageService } from "./storage-service";

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        RouterService,
        LocalizationService,
        LoginService,
        StorageService,
        PopupService
    ]
})
export class ServiceModule { }