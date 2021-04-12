import { Injectable, Injector } from "@angular/core";
import { Observable, EMPTY } from "rxjs";
import { map } from "rxjs/operators";
import { ErrorPopupComponent } from "../components/popup/error-popup/error-popup.component";
import { ApiService } from "../core/services/api-service";
import { LoginType } from "../enums/login-type-enum";
import { AuthenticationModel } from "../models/login/authentication-model";
import { AuthenticationResponseModel } from "../models/login/authentication-response-model";
import { LocalizationService } from "./localization-service";
import { PopupService } from "./popup-service";
import { RouterService } from "./router-service";
import { StorageService } from "./storage-service";


@Injectable()
export class LoginService extends ApiService {

    private _localizationService?: LocalizationService;
    private _storageService?: StorageService;
    private _routerService?: RouterService;
    private _popupService?: PopupService;

    constructor(injector: Injector) {
        super(injector, "token/new");

        this.injectServices();
    }

    private injectServices(): void {
        this._localizationService = this.injector.get<LocalizationService>(LocalizationService);
        this._storageService = this.injector.get<StorageService>(StorageService);
        this._routerService = this.injector.get<RouterService>(RouterService);
        this._popupService = this.injector.get<PopupService>(PopupService);
    }

    public login(authenticationModel: AuthenticationModel): Observable<void> {
        switch (authenticationModel.LoginType) {
            case LoginType.UserNameAndPassword:
                return this.loginWithUserName(authenticationModel).pipe(map(
                    (authResponse: AuthenticationResponseModel) => {
                        if (authResponse.isLogin === true && authResponse.token != null) {
                            this._storageService?.SetToken(authResponse.token);
                            this._routerService?.NavigateDashboard();
                        }
                        else {
                            this._popupService?.OpenPopup(ErrorPopupComponent);
                        }
                    }
                ));
            default:
                return EMPTY.pipe(map(() => {
                    this._localizationService?.get('global.business.exception').subscribe((message) => this.callError(message))
                }));
        }
    }

    private loginWithUserName(authenticationModel: AuthenticationModel): Observable<AuthenticationResponseModel> {
        return this.postRequest<AuthenticationResponseModel>(authenticationModel).pipe(
            map((authResponse: AuthenticationResponseModel) => authResponse)
        );
    }

    private callError(message: string): void {
        throw new Error(message);
    }
}