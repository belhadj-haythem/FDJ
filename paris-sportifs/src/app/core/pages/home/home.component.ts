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
  constructor(private footballService: FootballService) {}

  ngOnInit() {
    this.leagueList = [];
    this.footballService
      .getAllLeagues()
      .pipe(map(leagueObject => leagueObject.leagues))
      .subscribe(result => {
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
        strDescriptionFR: ''
      };
      this.footballService
        .getLeagueDetailsById(r.idLeague)
        .pipe(map(leagueObject => leagueObject.leagues))
        .subscribe(res => {
          league.strLogo = res[0].strLogo;
          league.strDescriptionFR = res[0].strDescriptionFR;
        });
      this.leagueList.push(league);
    });
  }
}
