import AppJson from 'src/assets/app-congif.json';
import { AppConfig } from '../config/app-config';

export function GetAppConfig(): AppConfig {
    return AppJson;
}