import { Injectable } from '@angular/core';
import { Iproduct } from './product';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    private productUrl="api/products/products.json";
    constructor(private http: HttpClient){

    }
 getProducts() : Observable<Iproduct[]>{ 
     return this.http.get<Iproduct[]>(this.productUrl).pipe(
         tap(data=> console.log('All: '+JSON.stringify(data))),
         catchError(this.handleError)
     );
 }

 private handleError(err: HttpErrorResponse){
     let errorMessage= '';
     if(err.error instanceof ErrorEvent){
        errorMessage= `An error occurred:  ${err.message}`
     }else{
        errorMessage= `Server returned code: ${err.status}, error message is: ${err.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
 }
}