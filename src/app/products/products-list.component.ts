import { Component } from '@angular/core';

@Component({
    selector:'app-product-list',
    templateUrl:'./products-list.component.html'
})

export class ProductListComponent{
    pageTitle:string = 'Product List';
    imageWidth:number=50;
    imageMargin:number=2;
    imageFlag:boolean=true;
    btntext:string='hideImage';
    listFilter:string='Cart';
    products:any=[
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

    toggleImage(){
      this.imageFlag=!this.imageFlag;
        

    }
    
}