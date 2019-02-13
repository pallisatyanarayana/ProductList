import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector:'app-product-list',
    templateUrl:'./products-list.component.html',
    styleUrls:['./products-list.component.css']
    
})

export class ProductListComponent implements OnInit{
    pageTitle:string = 'Product List';
    imageWidth:number=50;
    imageMargin:number=2;
    imageFlag:boolean=true;
    btntext:string='hideImage';
   // listFilter:string='Cart';
    _listFilter:string;

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value:string)
    {
        this._listFilter=value;
        this.filteredProducts=this.listFilter ? this.performFilter(this.listFilter):this.products;
    }

    filteredProducts:IProduct[];
    products:IProduct[]=[
        {
            "productid":2,
            "productName":"Garden Cart",
            "productCode":"GDN-0023",
            "releaseDate":"Mar 15,2018",
            "description":"15 gallon capacity rolling garden",
            "price":32.99,
            "starRating":4.2,
            "imageUrl":"assets/first.png"
        },
        {
            "productid":4,
            "productName":"Hammer",
            "productCode":"TBX-0048",
            "releaseDate":"May 21,2018",
            "description":"Curved call steel hammer",
            "price":8.9,
            "starRating":4.8,
            "imageUrl":"assets/second.png"
        }
    ];

    constructor(){
        this.filteredProducts=this.products;
        this.listFilter='cart';
    }

    performFilter(filterBy:string): IProduct[] {

        filterBy=filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);

    }

    toggleImage(){
      this.imageFlag=!this.imageFlag;
        

    }

    ngOnInit(){
        console.log("In ONINIT");
    }
    
}