import { Injectable, Injector } from "@angular/core";
import { BaseService } from "../core/services/base-service";

@Injectable()
export class StorageService extends BaseService {
    constructor(injector: Injector) {
        super(injector);
    }

    public SetToken(token: string): void {
        localStorage.setItem('token', token);
    }

    public RemoveToken(): void {
        localStorage.removeItem('token');
    }

    public GetToken(): string {
        return localStorage.getItem('token') ?? '';
    }

}