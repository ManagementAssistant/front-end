import { Injectable, Injector } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { BaseService } from "../core/services/base-service";

@Injectable()
export class PopupService extends BaseService {

    private _popup: MatDialog;

    constructor(injector: Injector, popup: MatDialog) {
        super(injector);

        this._popup = popup;
    }

    get Popup(): MatDialog {
        return this._popup;
    }

    public OpenPopup(component: any): void {
        this._popup.open(component);
        // const dialogRef = this.dialog.open(DialogContentExampleDialog);

        // dialogRef.afterClosed().subscribe(result => {
        //     console.log(`Dialog result: ${result}`);
        // });
    }

}