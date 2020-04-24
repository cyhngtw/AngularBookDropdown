import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule ,FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookService } from "./shared/book.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
   
    BookComponent,
    BookListComponent,
      
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      MatSliderModule,

      AngularFireModule.initializeApp(environment.firebaseConfig),// we called initializeApp function to provide connection details
      AngularFireDatabaseModule, // we will import the classes here too
      FormsModule, BrowserAnimationsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
