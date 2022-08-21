import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CepComponent } from './cep/cep.component';
import { ClienteComponent } from './cliente/cliente.component';
import { TemplateModule } from './template/template.module';
import { FormatarMoedaPipe } from './formatar-moeda.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CepComponent,
    ClienteComponent,
    FormatarMoedaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
