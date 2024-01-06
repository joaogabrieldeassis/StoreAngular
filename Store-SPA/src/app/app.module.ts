
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacaoModule } from './Navegacao/navegacao.module';
import { NgModule } from '@angular/core';
import { ContaModule } from './conta/conta.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegacaoModule,
    ContaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
