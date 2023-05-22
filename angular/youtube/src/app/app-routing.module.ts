import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSongsComponent } from './Pages/all-songs/all-songs.component';
import { AddSongComponent } from './Pages/add-song/add-song.component';
import { AddCategoryComponent } from './Pages/add-category/add-category.component';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { AboutComponent } from './Pages/about/about.component';
import { PlayerComponent } from './Pages/player/player.component';
import { MainComponent } from './Layout/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'list', component: AllSongsComponent },
  { path: 'addSong', component: AddSongComponent },
  { path: 'addCategory', component: AddCategoryComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'player/:id', component: PlayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
