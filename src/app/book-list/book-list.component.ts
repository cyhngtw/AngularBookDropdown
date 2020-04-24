import { Component, OnInit } from '@angular/core';
import { BookService } from "../shared/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {
 bookArray =[];
 showDeletedMessage : boolean;
 searchText:string = "";
 constructor(public BookService: BookService) { }

 ngOnInit() {
         this.BookService.getBooks().subscribe(
                 (list) => {
                         this.bookArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });
 }

 onDelete($key){
     if(confirm("Are you sure you want to delete this record?")){
       this.BookService.deleteBook($key);
       this.showDeletedMessage = true;
       setTimeout(()=> this.showDeletedMessage=false , 3000)
     }
   }

filterCondition(book){
   return book.booktype.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ;
 }
}