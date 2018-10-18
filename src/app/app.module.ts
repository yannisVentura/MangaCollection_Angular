import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { MangaCollectionComponent } from './manga-collection/manga-collection.component';
import { MangaListComponent } from './manga-list/manga-list.component';
import { MangaDescriptionComponent } from './manga-description/manga-description.component';
import {MangaService} from './services/manga.service';
import { EditMangaComponent } from './edit-manga/edit-manga.component'
import { FormsModule }   from '@angular/forms';

const appRoutes:Routes = [
  {path:'manga/:id', component:MangaDescriptionComponent},
  {path:'new-manga', component:EditMangaComponent},
  {path:'', component: MangaCollectionComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    MangaCollectionComponent,
    MangaListComponent,
    MangaDescriptionComponent,
    EditMangaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [MangaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
