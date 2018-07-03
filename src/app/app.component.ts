import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isOpen = false;
  public name = 'cipher';

  constructor(
  ) { }

  @ViewChild('testInput') // inputにfocusを当てる
  set myInput(_input: ElementRef | undefined) {
    if (_input !== undefined) {
      _input.nativeElement.focus();
    }
  }

  change() {
    this.isOpen = !this.isOpen;
  }
}
