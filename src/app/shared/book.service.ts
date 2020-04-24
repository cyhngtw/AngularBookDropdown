import { Injectable } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";


@Injectable({
 providedIn: 'root'
})
export class BookService {

 constructor(private firebase: AngularFireDatabase) { }
        bookList: AngularFireList<any>;

        form = new FormGroup({
        $key: new FormControl(null),
        bookname: new FormControl('', Validators.required),
        booktype: new FormControl('', Validators.required),
        author: new FormControl('', Validators.required),
     
        });

        getBooks(){
        this.bookList = this.firebase.list('books');
        return this.bookList.snapshotChanges();
        }
        insertBook(book){
        this.bookList.push({
        bookname: book.bookname,
        booktype: book.booktype,
        author: book.author,
                        });
        }

        populateForm(book){
        this.form.setValue(book);
        }

        updateBook(book){
        this.bookList.update(book.$key,{
        bookname: book.bookname,
        booktype: book.booktype,
        author: book.author,
        });
        }

        deleteBook($key: string){
        this.bookList.remove($key);
        }
}