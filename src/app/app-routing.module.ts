import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesComponent } from './components/jokes/jokes.component';
import { CvComponent } from './components/cv/cv.component';
import { DolphinDogComponent } from './components/dolphin-dog/dolphin-dog.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'jokes', component: JokesComponent },
      { path: 'cv', component: CvComponent },
      { path: 'dolphin-dog', component: DolphinDogComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
