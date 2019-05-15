import { FootballService } from './../../shared/football.service';
import { Component, OnInit } from '@angular/core';
import { League } from '../../shared/models/league.model';
import { first, filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'fdj-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  leagueList: League[];
  teams: any[];
  constructor(private footballService: FootballService) {}

  ngOnInit() {
    this.leagueList = [];
    this.footballService
      .getAllLeagues()
      .pipe(map(leagueObject => leagueObject.leagues))
      .subscribe(result => {
        result = result.filter(league => league.strLeague !== '_No League');
        this.getLeagueById(result);
      });
  }

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
        });
      this.leagueList.push(league);
    });
  }

  getTeamsByLeagueId(event) {
    this.footballService
      .getTeamsByLeagueId(event.leagueSelected)
      .pipe(map(teamObject => teamObject.teams))
      .subscribe(teams => {
        this.teams = teams;
      });
  }
}
