import { MatStepper } from '@angular/material/stepper';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { League } from '@shared/models/league.model';
/**
 * Stepper is the main component for achieving or result
 * Stepper contains all steps represented as child components
 * Step 1 : leagues , Step 2 : teams , Step 3 : players
 * @export
 * @class StepperComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'fdj-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  isLinear = true;
  searchInput = '';
  @Input() listFirstStep: any[];
  @Input() listSecondStep: any[];
  @Input() listLastStep: any[];
  @Input() sports: any[];
  @Output() leagueSelected = new EventEmitter();
  @Output() teamSelected = new EventEmitter();
  backupList: any[];
  defaultSport = '';

  constructor() {}

  ngOnInit() {
    this.backupList = this.listFirstStep;
  }

  /**
   * function filtring the list of leagues by getting the user's input
   *
   * @param {*} event
   * @memberof StepperComponent
   */
  onKey(event: any) {
    this.defaultSport = '';
    this.listFirstStep = this.backupList;
    this.listFirstStep = this.listFirstStep.filter(element =>
      element.strLeague.toLowerCase().includes(event.target.value.toLowerCase())
    );
  }

  /**
   * Action of moving from Step 1(leagues) to Step 2(teams)
   *
   * @param {*} league
   * @param {MatStepper} stepper
   * @memberof StepperComponent
   */
  goToNextStep(league, stepper: MatStepper) {
    this.leagueSelected.emit({ leagueSelected: league.league.idLeague });
    stepper.next();
  }

  /**
   * Action of moving from Step 2(teams) to Step 3(players)
   *
   * @param {*} team
   * @param {MatStepper} stepper
   * @memberof StepperComponent
   */
  goToThirdStep(team, stepper: MatStepper) {
    if (team && team.team) {
      this.teamSelected.emit({ teamSelected: team.team });
      stepper.next();
    } else {
      stepper.previous();
    }
  }

  /**
   * filtring the leagues by sport selected by the user from the select input
   *
   * @param {*} value
   * @memberof StepperComponent
   */
  filterBySports(value) {
    this.searchInput = '';
    this.listFirstStep = this.backupList;
    this.listFirstStep = this.listFirstStep.filter(s => s.strSport === value);
  }
}
