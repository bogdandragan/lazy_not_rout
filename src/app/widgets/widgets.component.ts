import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {

  @Output() settingsShown = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  showSettings(){
    this.settingsShown.emit(true);
  }

}
