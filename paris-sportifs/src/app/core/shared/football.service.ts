import { League } from './models/league.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  uri = 'https://www.thesportsdb.com/api/v1/json/1';
  constructor(private http: HttpClient) {}

  public getAllLeagues(): Observable<any> {
    return this.http.get(`${this.uri}/all_leagues.php`);
  }

  public getLeagueDetailsById(idLeague: string): Observable<any> {
    const params = new HttpParams().set('id', idLeague);
    return this.http.get(`${this.uri}/lookupleague.php`, { params });
  }

  public getTeamsByLeagueName(leagueName: string): Observable<any> {
    const params = new HttpParams().set('l', leagueName);
    return this.http.get(`${this.uri}/search_all_teams.php`, { params });
  }

  public getTeamsByLeagueId(idLeague: string): Observable<any> {
    const params = new HttpParams().set('id', idLeague);
    return this.http.get(`${this.uri}/lookup_all_teams.php`, { params });
  }

  public getPlayersByTeamId(idTeam: string): Observable<any> {
    const params = new HttpParams().set('id', idTeam);
    return this.http.get(`${this.uri}/lookup_all_players.php`, { params });
  }

  public getPlayersByTeamName(name: string): Observable<any> {
    const params = new HttpParams().set('t', name);
    return this.http.get(`${this.uri}/searchplayers.php`, { params });
  }
}
