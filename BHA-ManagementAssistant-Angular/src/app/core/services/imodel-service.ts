import { IService } from './iservice';
import { Observable } from 'rxjs';
import { Model } from '../model/model';

export interface IModelService<T extends Model, TID = number> extends IService {
    controller?: string;

    getByID(id: TID): Observable<T>;
    getList(): Observable<T[]>;

    create(model: T): Observable<T>;
    update(model: T): Observable<T>;
    deleteByID(id: TID): Observable<T>;
}