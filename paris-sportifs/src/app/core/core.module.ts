import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './pages/home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepperComponent } from './components/stepper/stepper.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatSpinner } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { FootballService } from './shared/football.service';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlayerComponent } from './components/player/player.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ToolbarComponent,
    HomeComponent,
    StepperComponent,
    CardComponent,
    TableComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatStepperModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    HttpClientModule,
    MatGridListModule,
    AngularFontAwesomeModule,
    MatTableModule,
    MatProgressSpinnerModule,
    OverlayModule,
    MatSnackBarModule
  ],
  exports: [HomeComponent],
  providers: [FootballService],
  entryComponents: [MatSpinner]
})
export class CoreModule {}
