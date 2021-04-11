import { Model } from "src/app/core/model/model";
import { LoginType } from "src/app/enums/login-type-enum";

export class AuthenticationModel extends Model {
    public UserName?: string;
    public UserPassword?: string;
    public LoginType?: LoginType;
}