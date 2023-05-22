import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { MainComponent } from './Layout/main/main.component';
import { MenuComponent } from './Layout/menu/menu.component';
import { AllSongsComponent } from './Pages/all-songs/all-songs.component';
import { AddSongComponent } from './Pages/add-song/add-song.component';
import { AddCategoryComponent } from './Pages/add-category/add-category.component';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { AboutComponent } from './Pages/about/about.component';
import { PlayerComponent } from './Pages/player/player.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MenuComponent,
    AllSongsComponent,
    AddSongComponent,
    AddCategoryComponent,
    CategoriesComponent,
    AboutComponent,
    PlayerComponent,
    MainPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, YouTubePlayerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
