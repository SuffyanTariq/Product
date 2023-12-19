import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ProductApiService} from 'src/app/services/product-api.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {

  productList$!: Observable<any[]>;

  constructor(private service: ProductApiService) { }

  ngOnInit(): void {
    this.productList$ = this.service.getProducts();
  }

  //Modal Title Variable for Add-edit 

  modalTitle: string = '';
  activeAddEditProductComponent: boolean = false;
  product: any;

  modalAdd(){
    this.product = {
      id:0,
      name:null,
      category:null,
      brand:null
    }
    this.modalTitle = "Add Product";
    this.activeAddEditProductComponent =true;
  }

  modalEdit(item:any) {
    this.product = item;
    this.modalTitle = "Edit Product";
    this.activeAddEditProductComponent = true;
  }

  delete(item:any) {
    if(confirm(`Are you sure you want to delete inspection ${item.id}`)) {
      this.service.deleteProduct(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showDeleteSuccess = document.getElementById('delete-warning-alert');
      if(showDeleteSuccess) {
        showDeleteSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showDeleteSuccess) {
          showDeleteSuccess.style.display = "none"
        }
      }, 4000);
      this.productList$ = this.service.getProducts();
      })
    }
  }

  modalClose() {
    this.activeAddEditProductComponent = false;
    this.productList$ = this.service.getProducts();
  }

}
