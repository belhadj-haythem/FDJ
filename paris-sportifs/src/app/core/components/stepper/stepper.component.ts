import { MatStepper } from '@angular/material/stepper';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { League } from '../../shared/models/league.model';

@Component({
  selector: 'fdj-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  isLinear = true;
  searchInput: string;
  @Input() listFirstStep: any[];
  @Input() listSecondStep: any[];
  @Output() leagueSelected = new EventEmitter();
  @Output() teamSelected = new EventEmitter();
  backupList: any[];

  constructor() {}

  ngOnInit() {
    this.backupList = this.listFirstStep;
  }

  onKey(event: any) {
    this.listFirstStep = this.backupList;
    this.listFirstStep = this.listFirstStep.filter(element =>
      element.strLeague.toLowerCase().includes(event.target.value.toLowerCase())
    );
  }

  goToNextStep(league, stepper: MatStepper) {
    this.leagueSelected.emit({ leagueSelected: league.league.idLeague });
    stepper.next();
  }

  goToThirdStep(team, stepper: MatStepper) {
    this.teamSelected.emit({ teamSelected: team.team });
    stepper.next();
  }
}
