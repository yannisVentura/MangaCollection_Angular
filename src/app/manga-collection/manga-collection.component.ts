import { Component, OnInit } from '@angular/core';
import { MangaService } from '../services/manga.service';

@Component({
  selector: 'app-manga-collection',
  templateUrl: './manga-collection.component.html',
  styleUrls: ['./manga-collection.component.css']
})
export class MangaCollectionComponent implements OnInit {

  mangas : any[];
  
  constructor(private mangasService:MangaService) { }

  ngOnInit() {
    this.mangas = this.mangasService.mangas;
  }

}
