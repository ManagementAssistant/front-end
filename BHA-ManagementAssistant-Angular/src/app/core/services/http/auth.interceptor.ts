import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/services/storage-service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    private _injector: Injector;
    private _ignoreList?: string[];

    constructor(injector: Injector) {
        this._injector = injector;
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            let storageService: StorageService = this._injector.get<StorageService>(StorageService);
            let token: string = storageService.GetToken();
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });

        return next.handle(request);
    }
}