import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './pages/feed/feed.component';
import { RegisterComponent } from './pages/register/register.component';
import { CpfInputComponent } from './components/cpf-input/cpf-input.component';
import { CardComponent } from './components/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    RegisterComponent,
    CpfInputComponent,
    CardComponent    // ✅ só componentes aqui
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule  // ✅ módulos vão aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
