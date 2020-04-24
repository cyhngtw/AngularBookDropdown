import { Component, OnInit } from '@angular/core';
import { BookService  } from "../shared/book.service";
import { ReactiveFormsModule ,FormsModule} from "@angular/forms";
import { Booktype } from "../shared/category.model";
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {
        booktypes: Booktype[] = [
         { id: 1, name: "commerical"},
         { id: 2, name: "language"},
         { id: 3, name: "science"},

        ]
        constructor(public BookService: BookService) { }
        submitted: boolean;
        formControls = this.BookService.form.controls;
        showSuccessMessage: boolean;
        searchText:string = "";
        ngOnInit() {
        }

        onSubmit(){
        this.submitted = true;
        if(this.BookService.form.valid){
        if(this.BookService.form.get('$key').value == null)
        this.BookService.insertBook(this.BookService.form.value);
        else 
        this.BookService.updateBook(this.BookService.form.value);
        this.showSuccessMessage = true;
        setTimeout(()=> this.showSuccessMessage=false,3000);
        this.submitted = false;
        this.BookService.form.reset();
        }
        }
        }