import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: 'recipe-detail.component.html',
  styleUrls: ['recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() propertyName = 'thing';
  // @Output() eventName = new EventEmitter<{name: 'string', value: {}}>();

  constructor() { }

  ngOnInit() {
  }

}
