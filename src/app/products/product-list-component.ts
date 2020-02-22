import { Component, OnInit } from '@angular/core';
import { Iproduct } from './product';
import { ProductService } from './product-service';

@Component({
templateUrl:'./product-list-component.html',
styleUrls: ['./product-list-component.css'],
})

export class ProductListComponent implements OnInit{

pageTitle: string="Product List";
imageWidth: number= 50;
imageMargin: number=2;
showImage: boolean=false;
//listFilter: string="cart";
filterProducts: Iproduct[];
errorMessate:string;
_listFilter: string;

get listFilter(): string{
return this._listFilter
}
set listFilter(value : string){
this._listFilter=value;
this.filterProducts=this.listFilter?this.performFilter(this._listFilter) : this.products;
}
products : Iproduct[]=[];

toggleImage(): void {
this.showImage=!this.showImage;
}
ngOnInit(): void {
    this.productservice.getProducts().subscribe({
        next : products => {
            this.products=products
            this.filterProducts=this.products;
        },
        error: err=>this.errorMessate=err
    });
    
}
constructor(private productservice: ProductService){
}

performFilter(filterBy: string): Iproduct[] {
    filterBy=filterBy.toLocaleLowerCase();
    return this.products.filter((product: Iproduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !==-1)
}
onRatingClicked(message : string){
    this.pageTitle='Product List: ' +message;
}
}