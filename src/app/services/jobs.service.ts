import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobResponse } from '../interfaces/job-response';
import {  map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private githubUrl = `https://jobs.github.com/positions.json?`;
  private url1 = `https://api.allorigins.win/get?url=${ encodeURIComponent( this.githubUrl)}`;


  private jobPage = 1;
  public searchPage = 1;
  public colorLogo: string;

  constructor( private http: HttpClient) { }

  getJobs(): Observable<JobResponse[]> {

    console.log('Cargando API');
    return this.http.get<JobResponse[]>(`${ this.url1 }page=${this.jobPage.toString()}`)
    .pipe(
      map( ( resp: any ) => JSON.parse(resp.contents)),
      tap( () => {
        this.jobPage += 1;
      })
    );
  }

  searchJobs( des: string, location: string, time: string): Observable<JobResponse[]> {

    const githubUrl = `https://jobs.github.com/positions.json?description=${des}&full_time=${time}&location=${location}&page=${this.searchPage}`;
    const  url = `https://api.allorigins.win/get?url=${ encodeURIComponent( githubUrl)}`;

    return this.http.get<JobResponse[]>(`${ url }`)
            .pipe(
              map( ( resp: any ) => JSON.parse(resp.contents)),
              tap( () => {
                this.searchPage += 1;
              })
            );
  }

  getJob( id: string ): Observable< JobResponse > {

    const urlJob = `https://jobs.github.com/positions/${ id }.json?markdown=false`;
    const url =  `https://api.allorigins.win/get?url=${ encodeURIComponent( urlJob)}`;

    return this.http.get<JobResponse>(`${ url }`)
                .pipe(
                  map( ( resp: any ) => JSON.parse( resp.contents ))
                );
  }

  resetPage(): void {
      this.searchPage = 1;
      this.jobPage = 1;
  }
}
