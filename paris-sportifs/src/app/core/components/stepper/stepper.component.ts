import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'fdj-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  isLinear = true;
  leagueFormGroup: FormGroup;
  teamFormGroup: FormGroup;
  @Input() listFirstStep: any[];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.leagueFormGroup = this._formBuilder.group({
      leagueName: ['', Validators.required]
    });
    this.teamFormGroup = this._formBuilder.group({
      teamName: ['', Validators.required]
    });
  }
}
