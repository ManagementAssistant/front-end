import { Injectable, Injector } from "@angular/core";
import { defaultPath, loginPath } from "../core/constant/common-constant";
import { BaseService } from "../core/services/base-service";
import { isExpressionBlank } from "../Utilities/Helpers";
import { StorageService } from "./storage-service";

@Injectable()
export class RouterService extends BaseService {

    private _storageService?: StorageService;
    public isValid: boolean = false;

    constructor(injector: Injector) {
        super(injector);

        this.injectServices();
    }

    private injectServices(): void {
        this._storageService = this.injector.get<StorageService>(StorageService);
    }

    public Decider(): void {
        let token: string = this._storageService?.GetToken() ?? "";

        if (isExpressionBlank(token) === false) {
            this.NavigateDashboard();
        }
        else {
            this.NavigateLogin();
        }
    }

    public NavigateLogin(): void {
        this.router.navigate([loginPath]);
    }

    public NavigateDashboard(): void {
        this.router.navigate([defaultPath]);
    }
}