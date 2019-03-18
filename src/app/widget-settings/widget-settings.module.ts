import { NgModule} from '@angular/core';
import { WidgetSettingsComponent } from './widget-settings/widget-settings.component';

@NgModule({
  declarations: [WidgetSettingsModule.rootComponent],
  bootstrap: [WidgetSettingsModule.rootComponent]
})
export class WidgetSettingsModule {
  static rootComponent = WidgetSettingsComponent;
}
