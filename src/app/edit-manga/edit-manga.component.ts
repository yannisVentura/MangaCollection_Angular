import { Component, OnInit } from '@angular/core';
import { MangaService } from '../services/manga.service';

@Component({
  selector: 'app-edit-manga',
  templateUrl: './edit-manga.component.html',
  styleUrls: ['./edit-manga.component.css']
})
export class EditMangaComponent implements OnInit {

  constructor(private mangaService:MangaService) { }

  manga:any[];

  ngOnInit() {
    this.manga = this.mangaService.mangas
  }

  onSubmit(){

  }

}
