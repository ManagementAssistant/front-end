import { Component, Injector, OnInit } from '@angular/core';
import { BaseService } from 'src/app/core/services/base-service';
import { RouterService } from 'src/app/services/router-service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.sass']
})
export class RouteComponent extends BaseService implements OnInit {

  constructor(injector: Injector) { 
    super(injector);

    this.injector.get<RouterService>(RouterService).Decider();
  }

  ngOnInit(): void {
  }

}
