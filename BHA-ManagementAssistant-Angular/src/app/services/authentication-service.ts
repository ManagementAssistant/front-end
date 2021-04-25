import { Injectable, Injector } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable, EMPTY } from "rxjs";
import { map } from "rxjs/operators";
import { DialogPopupComponent } from "../components/popup/dialog-popup/dialog-popup.component";
import { ErrorPopupComponent } from "../components/popup/error-popup/error-popup.component";
import { ApiService } from "../core/services/api-service";
import { LoginType } from "../enums/login-type-enum";
import { ConfirmDialogModel } from "../models/confirm-dialog/confirm-dialog-model";
import { AuthenticationModel } from "../models/login/authentication-model";
import { AuthenticationResponseModel } from "../models/login/authentication-response-model";
import { LocalizationService } from "./localization-service";
import { RouterService } from "./router-service";
import { StorageService } from "./storage-service";


@Injectable()
export class AuthenticationService extends ApiService {

    private _localizationService?: LocalizationService;
    private _storageService?: StorageService;
    private _routerService?: RouterService;
    private _popup?: MatDialog;

    constructor(injector: Injector) {
        super(injector, "token/new");

        this.injectServices();
    }

    private injectServices(): void {
        this._localizationService = this.injector.get<LocalizationService>(LocalizationService);
        this._storageService = this.injector.get<StorageService>(StorageService);
        this._routerService = this.injector.get<RouterService>(RouterService);
        this._popup = this.injector.get<MatDialog>(MatDialog);
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
                            this._popup?.open(ErrorPopupComponent);
                        }
                    }
                ));
            default:
                return EMPTY.pipe(map(() => {
                    this._localizationService?.get('global.business.exception').subscribe((message) => this.callError(message))
                }));
        }
    }

    private _logout() {
        this._storageService?.RemoveToken();
        this._routerService?.NavigateLogin();
    }

    public logout() {
        let data: ConfirmDialogModel = new ConfirmDialogModel(this._localizationService);
        this._localizationService?.get('user.logout.header').subscribe((message) => data.Header = message);
        this._localizationService?.get('user.logout.body').subscribe((message) => data.Body = message);
        data.IconPath = 'assets/icons/logout.png';
        const dialogComponent = this._popup?.open(DialogPopupComponent, {
            width: '400px',
            height: '309px',
            data: data
        }).afterClosed().subscribe(result => {
            if (result) {
                this._logout();
            }
        });
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