import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SystemJsNgModuleLoader, NgModuleFactoryLoader} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { LoadModuleDirective } from './load-module.directive';
import { WidgetsComponent } from './widgets/widgets.component';
import {MatSidenavModule} from '@angular/material/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    LoadModuleDirective,
    WidgetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
