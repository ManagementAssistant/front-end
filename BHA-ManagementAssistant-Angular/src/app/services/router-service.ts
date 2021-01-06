import { Injectable, Injector } from "@angular/core";
import { loginPath } from "../core/constant/common-constant";
import { BaseService } from "../core/services/base-service";

@Injectable()
export class RouterService extends BaseService {

    // private _appConfig: AppConfig;
    public isValid: boolean = false;

    constructor(injector: Injector) {
        super(injector);
    }

    public Decider(): void {
        // this.router.navigate([loginPath]);
    }
}