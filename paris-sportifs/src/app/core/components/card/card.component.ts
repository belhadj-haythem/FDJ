import { Component, OnInit, Input } from '@angular/core';
import { League } from '../../shared/models/league.model';

@Component({
  selector: 'fdj-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() league: League;
  constructor() { }

  ngOnInit() {
  }

}
