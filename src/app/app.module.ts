import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyFirsztComponent } from './my-firszt/my-firszt.component';
import { MySecondComponent } from './my-second/my-second.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirsztComponent,
    MySecondComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
