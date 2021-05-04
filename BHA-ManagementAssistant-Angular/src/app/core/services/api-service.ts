import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injector } from "@angular/core";
import { Observable } from "rxjs";
import { AppConfig } from "src/app/config/app-config";
import { GetAppConfig } from "src/app/Utilities/JsonReader";
import { Model } from "../model/model";
import { BaseService } from "./base-service";
import { IHttpOptions } from "./http/ihttp-options";

export abstract class ApiService extends BaseService {

    private _http: HttpClient;
    private _appConfig: AppConfig = new AppConfig();
    private _route?: string;

    public getHeaders?: () => HttpHeaders | { [header: string]: string | string[]; };
    public getParams?: () => HttpParams | { [param: string]: string | string[]; };

    constructor(injector: Injector, route?: string) {
        super(injector);

        this._http = injector.get<HttpClient>(HttpClient);
        this._appConfig = GetAppConfig();
        this._route = route;
    }

    private createOptions(): IHttpOptions {
        let options: IHttpOptions = {};
        if (this.getHeaders) {
            options.headers = this.getHeaders();
        }
        if (this.getParams) {
            options.params = this.getParams();
        }
        return options;
    }

    get http(): HttpClient {
        return this._http;
    }

    get baseUrl(): string {
        return this._appConfig.BaseUrl ? this._appConfig.BaseUrl : "";
    }

    get apiPrefix(): string {
        return this._appConfig.ApiPrefix ? this._appConfig.ApiPrefix : "";
    }

    get getUrl(): string {
        return this.baseUrl + "/" + this.apiPrefix + "/" + this._route;
    }

    postRequest<T>(body: Model | string, url?: string): Observable<T> {
        let requestedUrl = url ? url : this.getUrl;
        return this.http.post<T>(requestedUrl, JSON.stringify(body), this.createOptions());
    }

    getRequest<T>(url: string): Observable<T> {
        return this.http.get<T>(url, this.createOptions());
    }

    putRequest<T>(url: string, body: string): Observable<T> {
        return this.http.put<T>(url, body, this.createOptions());
    }

    deleteRequest<T>(url: string): Observable<T> {
        return this.http.delete<T>(url, this.createOptions());
    }
}