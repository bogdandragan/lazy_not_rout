import { PanelComponent } from './panel/panel.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: WidgetsComponent, pathMatch: 'full'},
  {path: 'widgets', component: WidgetsComponent},
  {path: 'settings', component: PanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
