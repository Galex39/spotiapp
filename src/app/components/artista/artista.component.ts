import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {
  artista:any = {};
  topTracks:any = [];
  loading:boolean = false;

  constructor(private router:ActivatedRoute,private spotify:SpotifyService) {
    this.router.params.subscribe(params => {
      console.log(params['id']);
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
    
  }

  ngOnInit(): void {
  }

  getArtista(id:string){
    this.loading = true;
    this.spotify.getArtist(id).subscribe(artista => {
      console.log(artista);
      this.artista = artista;
      this.loading = false;
    });
    
  }

  getTopTracks(id:string){
    this.spotify.getTopTracks(id).subscribe(topTracks=>{
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }

}
