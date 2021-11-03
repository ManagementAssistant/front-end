import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './services/storage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BHA-ManagementAssistant-Angular';

  constructor(translate: TranslateService) {
    localStorage.setItem('token', 'token');
    translate.addLangs(['tr', 'en']);
    translate.setDefaultLang('tr'); 

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/tr|en/) ? browserLang : 'tr');
  }
}
