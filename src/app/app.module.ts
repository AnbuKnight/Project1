import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import {HeadersComponent} from './shared/components/headers/headers.component';

@NgModule({
  declarations: [
    AppComponent,HeadersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppBootstrapModule,
    HttpClientModule,
    MaterialModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
