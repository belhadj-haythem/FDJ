import { League } from './models/league.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
/**
 * Injectable service with http client for calling our api
 *
 * @export
 * @class FootballService
 */
@Injectable({
  providedIn: 'root'
})
export class FootballService {
  uri = 'https://www.thesportsdb.com/api/v1/json/1';
  constructor(private http: HttpClient) {}

  /**
   * function returns all available leagues in all sports
   */
  public getAllLeagues(): Observable<any> {
    return this.http.get(`${this.uri}/all_leagues.php`);
  }

  /**
   * function returns league details , searching by id
   * @param idLeague
   */
  public getLeagueDetailsById(idLeague: string): Observable<any> {
    const params = new HttpParams().set('id', idLeague);
    return this.http.get(`${this.uri}/lookupleague.php`, { params });
  }

  /**
   * function returns teams available in specific league
   * @param leagueName
   */
  public getTeamsByLeagueName(leagueName: string): Observable<any> {
    const params = new HttpParams().set('l', leagueName);
    return this.http.get(`${this.uri}/search_all_teams.php`, { params });
  }

  /**
   * function returns teams available in specific league
   * @param idLeague
   */
  public getTeamsByLeagueId(idLeague: string): Observable<any> {
    const params = new HttpParams().set('id', idLeague);
    return this.http.get(`${this.uri}/lookup_all_teams.php`, { params });
  }

  /**
   * function returns players in specific team
   * @param idTeam
   */
  public getPlayersByTeamId(idTeam: string): Observable<any> {
    const params = new HttpParams().set('id', idTeam);
    return this.http.get(`${this.uri}/lookup_all_players.php`, { params });
  }

  /**
   * function returns players in specific team
   * @param name
   */
  public getPlayersByTeamName(name: string): Observable<any> {
    const params = new HttpParams().set('t', name);
    return this.http.get(`${this.uri}/searchplayers.php`, { params });
  }
}
