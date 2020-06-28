import { Injectable } from '@angular/core';
import { Region } from '../classes/region';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private regionsUrl: string;

  constructor(private http: HttpClient) {
    this.regionsUrl = 'http://localhost:8080/regions';
  }

  public findAll(): Observable<Region[]> {
    return this.http.get<Region[]>(this.regionsUrl);
  }

  public save(region: Region) {
    return this.http.post<Region>(this.regionsUrl, region);
  }
}
