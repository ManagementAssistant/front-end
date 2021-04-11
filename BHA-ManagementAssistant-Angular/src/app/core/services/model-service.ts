import { Injector } from "@angular/core";
import { Observable } from "rxjs";
import { Model } from "../model/model";
import { ApiService } from "./api-service";
import { IModelService } from "./imodel-service";

export abstract class ModelService<T extends Model, TID = number> extends ApiService implements IModelService<T, TID> {
    controller?: string;

    constructor(injector: Injector, controller?: string) {
        super(injector);

        this.controller = controller;
    }

    getByID(id: TID): Observable<T> {
        throw new Error("Method not implemented.");
    }
    getList(): Observable<T[]> {
        throw new Error("Method not implemented.");
    }
    create(model: T): Observable<T> {
        throw new Error("Method not implemented.");
    }
    update(model: T): Observable<T> {
        throw new Error("Method not implemented.");
    }
    deleteByID(id: TID): Observable<T> {
        throw new Error("Method not implemented.");
    }

}