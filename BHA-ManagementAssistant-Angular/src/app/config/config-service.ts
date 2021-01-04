import { Injectable, Injector } from "@angular/core";
import { BaseService } from "../core/services/base-service";
import { AppConfig } from "./app-config";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService extends BaseService {

  // private _appConfig: AppConfig;

  constructor(private http: HttpClient, injector: Injector) {
    super(injector);
  }

}