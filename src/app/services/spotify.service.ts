import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    
  }

  getQuery(query:string){
    const URL = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQALy3KbiR3B0dLwcw7PI2xz2Flj7vEgAqjHa7DykQJHEG2CCSLt3TMUtAl0I0bE360zCOTdX66g_oy20Il_oipuBWBsuDuT_pv0nq1krDD9PBRoDyf_B1ngY04VlDIy2ZWW3ioFO2he1dLeUBx7DCp2ciosrFI'
    });

    return this.http.get(URL,{headers});

  }

  getNewReleases(){
    return this.getQuery('browse/new-releases').pipe(map((data:any)=>data['albums'].items)); 
  }

  getArtists(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data:any)=> data['artists'].items ));
  }

  getArtist(id:string){
    return this.getQuery(`artists/${id}`);
    // .pipe(map((data:any)=> data['artists'].items ));
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?market=us`).pipe(map((data:any)=> data['tracks']));
  }
}
