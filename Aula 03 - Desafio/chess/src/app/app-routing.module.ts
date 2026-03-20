import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component'; // rota da tela de cadastro
import { FeedComponent } from './pages/feed/feed.component'; // futuramente feed

const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' }, // padrão abre registro
  { path: 'register', component: RegisterComponent },
  { path: 'feed', component: FeedComponent } // futuramente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
