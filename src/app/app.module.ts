import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { DetailComponent } from './components/detail/detail/detail.component';
import { ListItemsComponent } from './components/list-items/list-items/list-items.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailComponent,
    ListItemsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: ListItemsComponent},
      {path: 'detail/:id', component: DetailComponent}
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
