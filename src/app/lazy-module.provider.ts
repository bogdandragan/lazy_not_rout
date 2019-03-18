import { InjectionToken } from '@angular/core';

export interface LazyModules {
  widgetSettings: string;
}

export const lazyMap: LazyModules = {
  widgetSettings: 'src/app/widget-settings/widget-settings.module#WidgetSettingsModule'
};

export const LAZY_MODULES_MAP = new InjectionToken('LAZY_MODULES_MAP', {
  factory: () => lazyMap
});
