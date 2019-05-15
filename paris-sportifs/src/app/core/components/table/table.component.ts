import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Team } from '@shared/models/team.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'fdj-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed',
        style({ height: '0px', minHeight: '0', display: 'none' })
      ),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      )
    ])
  ]
})
export class TableComponent implements OnInit, OnChanges {
  @Input() data: any;
  columnsToDisplay = [
    'strTeamBadge',
    'strTeam',
    'intFormedYear',
    'strStadium',
    'intStadiumCapacity'
  ];
  expandedElement: Team | null;

  ELEMENT_DATA: Team[] = [];
  dataSource = this.data || this.ELEMENT_DATA;
  @Output() nextStep = new EventEmitter();

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.data === null) {
      this.snackBar.open('No Teams available', 'OK', {
        duration: 4000
      });
      this.nextStep.emit({ team: null });
    } else {
      this.dataSource = this.data;
    }
  }

  goToNextStep() {
    this.nextStep.emit({ team: this.expandedElement });
  }
}
