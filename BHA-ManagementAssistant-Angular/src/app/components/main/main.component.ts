import { Component, Injector, OnInit } from '@angular/core';
import { BaseService } from 'src/app/core/services/base-service';
import { RouterService } from 'src/app/services/router-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends BaseService implements OnInit {

  private _routerService: RouterService;

  constructor(injector: Injector) { 
    super(injector);

    this._routerService = this.injector.get<RouterService>(RouterService);
    this._routerService.Decider();
  }

  
  ngOnInit(): void {
  }

}
