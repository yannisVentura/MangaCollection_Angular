import { Component, OnInit, Input } from '@angular/core';
import { MangaService } from '../services/manga.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manga-description',
  templateUrl: './manga-description.component.html',
  styleUrls: ['./manga-description.component.css']
})
export class MangaDescriptionComponent implements OnInit {

  title: string;
  author : string;
  description: string;
  tomes : any[]
  constructor(private mangaService:MangaService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.title = this.mangaService.getMangaById(+id).title;
    this.author = this.mangaService.getMangaById(+id).author;
    this.description = this.mangaService.getMangaById(+id).desc;
    this.tomes = this.mangaService.getMangaById(+id).tomes;
    console.log(this.tomes);
  }

}
