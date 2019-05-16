import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Player } from '@shared/models/player.model';
/**
 * Player card component for displaying players in last step
 *
 * @export
 * @class PlayerComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'fdj-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() player: Player;
  constructor() { }

  ngOnInit() {
  }

}
