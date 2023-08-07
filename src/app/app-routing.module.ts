import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesComponent } from "./components/jokes/jokes.component";
import { CvComponent } from "./components/cv/cv.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'jokes', component: JokesComponent },
      { path: 'cv', component: CvComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
