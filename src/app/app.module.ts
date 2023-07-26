import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MenuComponent } from './menu/menu.component';
import { TypeWriterComponent } from './type-writer/type-writer.component';
import { FormsModule } from '@angular/forms';
import { FilsComponent } from './fils/fils.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HomeComponent,
    WelcomePageComponent,
    MenuComponent,
    TypeWriterComponent,
    FilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
