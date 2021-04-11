import { Injector } from "@angular/core";
import { Router } from "@angular/router";
import { IService } from "./iservice";

export abstract class BaseService implements IService {

  private _inject: Injector;

  constructor(inject: Injector) {
    this._inject = inject;
  }

  get injector(): Injector {
    return this._inject;
  }

  get router(): Router {
    return this.injector.get<Router>(Router);
  }
}