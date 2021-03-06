import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { League } from '@shared/models/league.model';
/**
 * Card component for displaying the leagues list
 *
 * @export
 * @class CardComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'fdj-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() league: League;
  @Output() nextStep = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  goToNextStep() {
    this.nextStep.emit({ league: this.league });
  }
}
