import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AppConfig } from 'src/app/config/app-config';
import { configFileUrl } from '../core/constant/config.constants';
import { BaseService } from '../core/services/base-service';

@Injectable()
export class ConfigService extends BaseService {

    constructor(private http: HttpClient, injector: Injector) {
        super(injector);
    }

    public getConfig(): Observable<AppConfig> {
        return this.http.get<AppConfig>(configFileUrl).pipe(
            map(appConfig => {

                return appConfig;
            })
        );
    }
}