import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injector } from "@angular/core";
import { Observable } from "rxjs";
import { ConfigService } from "src/app/config/config-service";
import { BaseService } from "./base-service";
import { IHttpOptions } from "./http/ihttp-options";

export abstract class ApiService extends BaseService {

    private _http: HttpClient;
    public getHeaders?: () => HttpHeaders | { [header: string]: string | string[]; };
    public getParams?: () => HttpParams | { [param: string]: string | string[]; };

    constructor(injector: Injector) {
        super(injector);

        this._http = injector.get<HttpClient>(HttpClient);
        let configService: ConfigService = injector.get<ConfigService>(ConfigService);
    }

    get http(): HttpClient {
        return this._http;
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

    postRequest<T>(url: string, body: string): Observable<T> {
        return this.http.post<T>(url, body, this.createOptions());
    }
}