import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() whichButton = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onButtonClicked() {
    this.whichButton.emit();
  }

}
