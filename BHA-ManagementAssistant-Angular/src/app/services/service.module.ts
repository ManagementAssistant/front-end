import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterService } from "./router-service";

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        RouterService
    ]
})
export class ServiceModule { }