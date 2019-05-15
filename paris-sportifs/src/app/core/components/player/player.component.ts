import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Player } from '@shared/models/player.model';

@Component({
  selector: 'fdj-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, OnChanges {

  @Input() player: Player;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
