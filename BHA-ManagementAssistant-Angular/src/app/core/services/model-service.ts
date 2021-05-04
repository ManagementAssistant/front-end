import { Injector } from "@angular/core";
import { Observable } from "rxjs";
import { Model } from "../model/model";
import { ApiService } from "./api-service";
import { IModelService } from "./imodel-service";

export abstract class ModelService<T extends Model, TID = number> extends ApiService implements IModelService<T, TID> {
    controller?: string;

    constructor(injector: Injector, controller?: string) {
        super(injector, controller);

        this.controller = controller;
    }

    getByID(id: TID): Observable<T> {
        return this.getRequest<T>(this.getUrl + '/' + id);
    }

    getList(): Observable<T[]> {
        return this.getRequest<T[]>(this.getUrl);
    }

    create(model: T): Observable<T> {
        return this.postRequest<T>(this.getUrl, JSON.stringify(model));
    }

    update(model: T): Observable<T> {
        return this.putRequest<T>(this.getUrl + '/' + model.ID, JSON.stringify(model));
    }

    deleteByID(id: TID): Observable<T> {
        return this.deleteRequest<T>(this.getUrl + '/' + id);
    }
}