import { Injectable, Injector } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { appLanguages } from "../core/constant/common-constant";
import { zero } from "../core/constant/number-constant";
import { BaseService } from "../core/services/base-service";

@Injectable()
export class LocalizationService extends BaseService {

    private _languages: string[] = [];

    constructor(injector: Injector, private translate: TranslateService) {
        super(injector);
    }

    private setLanguages(): void {
        let langs: string[] = this.languages;

        if (langs.length === zero) {
            this.translate.addLangs(appLanguages);
        }
    }

    public get languages(): string[] {
        if (this._languages.length === zero) {
            this._languages = this.translate.getLangs();
        }

        return this._languages;
    }

    public setDefaultLang(): void {
        this.setLanguages();

        this.setLanguage('tr');
    }

    public setLanguage(language: string): void {
        this.translate.use(language);
    }

    public setBrowserLang(): void {
        this.setLanguages();

        const browserLang = this.translate.getBrowserLang();
        this.setLanguage(browserLang.match(/tr|en/) ? browserLang : 'tr');
    }

    public getCurrentLang(): string {
        return this.translate.currentLang;
    }

    public get(key: string | string[]): Observable<any> {
        return this.translate.get(key);
    }

}