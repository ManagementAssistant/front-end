import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JsonInterceptor implements HttpInterceptor {

    constructor() {

    }

    /* upload olaylarında "Content-type" ayarlayabilmek için
     bir filtre ekledim.Filtre otomatik olarak upload olayını form-data ile yapanların content-type ve diğer header bilgilerini ayarlıyor. */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.method === 'POST' || request.method === 'PUT') {
            if (!(request.body instanceof FormData)) {
                request = request.clone({
                    setHeaders: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': 'true'
                    }
                });
            }
        }

        return next.handle(request);
    }
}