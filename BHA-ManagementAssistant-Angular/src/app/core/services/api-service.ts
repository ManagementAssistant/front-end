import { Injector } from "@angular/core";
import { inject } from "@angular/core/testing";
import { BaseService } from "./base-service";

export abstract class ApiService extends BaseService {

    constructor(injector: Injector) {
        super(injector);
    }
}