import { Model } from "src/app/core/model/model";
import { MenuElementType } from "src/app/enums/menu-element-type-enum";
import { MenuType } from "src/app/enums/menu-type-enum";

export class MenuElementModel extends Model {
    public MenuElementID?: number;
    public MenuElementTypeEnum?: MenuElementType;
    public MenuTypeEnum?: MenuType;
}