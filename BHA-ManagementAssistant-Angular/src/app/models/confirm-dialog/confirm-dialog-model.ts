import { LocalizationService } from "src/app/services/localization-service";

export class ConfirmDialogModel {
    public Header: string = "";
    public Body: string = "";
    public IconPath: string = 'assets/icons/dialog-default.png';
    public BackgroundColor: string = "#7599CA";

    constructor(private localizationService?: LocalizationService) {
        this.localizationService?.get('dialog.header').subscribe((message) => this.Header = message);
        this.localizationService?.get('dialog.body').subscribe((message) => this.Body = message);
    }
}