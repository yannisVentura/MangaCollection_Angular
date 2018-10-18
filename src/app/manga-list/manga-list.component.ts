import { Component, OnInit, Input } from '@angular/core';
import { MangaService } from '../services/manga.service';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css']
})
export class MangaListComponent implements OnInit {

  mangas: any[];

  constructor(private mangaService:MangaService) { }

  ngOnInit() {
    this.mangas = this.mangaService.mangas;
  }

  onClickNew(){
    return true;
  }

}
