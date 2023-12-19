import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ProductApiService} from 'src/app/services/product-api.service';

@Component({
  selector: 'app-add-edit-products',
  templateUrl: './add-edit-products.component.html',
  styleUrls: ['./add-edit-products.component.css']
})
export class AddEditProductsComponent implements OnInit {
  productList$!: Observable<any[]>;

  constructor(private service: ProductApiService) { }

@Input () product:any;
id: number = 0;
name: string = "";
category: string = "";
brand: string = "";

  ngOnInit(): void {
    this.id = this.product.id;
    this.name = this.product.name;
    this.category = this.product.category;
    this.brand = this.product.brand;
    this.productList$ = this.service.getProducts();
  }

  addProduct()
  {
    var product = {
      name:this.name,
      category:this.category,
      brand:this.brand
    }
    this.service.addProduct(product).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 4000);
    })
  }


  updateProduct()
  {
    var product = {
      id: this.id,
      name:this.name,
      category:this.category,
      brand:this.brand
    }
    var id:number = this.id;
    this.service.updateProduct(id,product).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-info-alert');
      if(showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
    })

  }

}
