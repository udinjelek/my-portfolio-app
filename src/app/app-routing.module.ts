import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AppComponent } from './app.component';
const routes: Routes = [
    {   path: '', 
        redirectTo: 'main-page', 
        pathMatch: 'full' 
    }, // Redirect empty path
    {   path:'main-page',
        component:MainPageComponent,
        data:{title:'Home'}, 
    }
]; 

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }