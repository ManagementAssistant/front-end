import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthenticationService } from "./authentication-service";
import { LocalizationService } from "./localization-service";
import { RouterService } from "./router-service";
import { StorageService } from "./storage-service";

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        RouterService,
        LocalizationService,
        AuthenticationService,
        StorageService
    ]
})
export class ServiceModule { }