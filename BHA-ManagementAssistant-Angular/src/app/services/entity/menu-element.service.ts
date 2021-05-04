import { Injectable, Injector } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ModelService } from 'src/app/core/services/model-service';
import { MenuElementModel } from 'src/app/models/entity/menu-element-model';

@Injectable()
export class MenuElementService extends ModelService<MenuElementModel> {

    constructor(injector: Injector) {
        super(injector, 'menuelement');
    }
}