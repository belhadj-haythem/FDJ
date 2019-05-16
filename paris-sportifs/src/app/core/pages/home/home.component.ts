import { SpinnerService } from '@shared/spinner.service';
import { FootballService } from '@shared/football.service';
import { OnInit, AfterViewChecked, Component } from '@angular/core';
import { League } from '@shared/models/league.model';
import { first, filter, map, tap } from 'rxjs/operators';
import { Team } from '@shared/models/team.model';
/**
 * Main home page
 *
 * @export
 * @class HomeComponent
 * @implements {OnInit}
 * @implements {AfterViewChecked}
 */
@Component({
  selector: 'fdj-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewChecked {
  leagueList: League[];
  teams: Team[];
  players: any[];
  sports: any[];
  constructor(
    private footballService: FootballService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit() {
    this.leagueList = [];
    this.sports = [];
    this.spinnerService.spin$.next(true);
    this.footballService
      .getAllLeagues()
      .pipe(map(leagueObject => leagueObject.leagues))
      .subscribe(result => {
        result = result.filter(league => league.strLeague !== '_No League');
        this.getLeagueById(result);
      });
  }

  /**
   * Detecting view loaded for disabling the spinner and the overlay
   */
  ngAfterViewChecked(): void {
    this.spinnerService.spin$.next(false);
  }

  /**
   * subscribing to league details and filling the main league list
   * by creating league objects and filling attributes
   */
  getLeagueById(res: League[]) {
    res.forEach(r => {
      const league: League = {
        idLeague: r.idLeague,
        strLeague: r.strLeague,
        strSport: r.strSport,
        strLeagueAlternate: r.strLeagueAlternate,
        strLogo: '',
        strDescriptionFR: '',
        strWebsite: '',
        strFacebook: '',
        strTwitter: '',
        strCountry: '',
        strBadge: ''
      };
      this.footballService
        .getLeagueDetailsById(r.idLeague)
        .pipe(map(leagueObject => leagueObject.leagues))
        .subscribe(res => {
          league.strLogo = res[0].strLogo;
          league.strBadge = res[0].strBadge;
          league.strDescriptionFR = res[0].strDescriptionFR;
          league.strWebsite = res[0].strWebsite;
          league.strFacebook = res[0].strFacebook;
          league.strTwitter = res[0].strTwitter;
          league.strCountry = res[0].strCountry;
          if (!this.sports.includes(res[0].strSport)) {
            this.sports.push(res[0].strSport);
          }
        });
      this.leagueList.push(league);
    });
  }

  /**
   * Getting teams from specific league and subscribing to fill main teams
   * teams will be passed as an input for stepper component
   * @param event
   * event param is an output from child component
   */
  getTeamsByLeagueId(event) {
    this.footballService
      .getTeamsByLeagueId(event.leagueSelected)
      .pipe(map(teamObject => teamObject.teams))
      .subscribe(teams => {
        this.teams = teams;
      });
  }

  /**
   * Getting players from specific team and subscribing to fill players that will be listing
   * players will be passed as an input for stepper component
   * @param event
   * event param is an output from child component
   */
  getPlayersByTeamId(event) {
    this.footballService
      .getPlayersByTeamName(event.teamSelected.strTeam)
      .pipe(map(playerObject => playerObject.player))
      .subscribe(res => {
        this.players = res;
      });
  }
}
