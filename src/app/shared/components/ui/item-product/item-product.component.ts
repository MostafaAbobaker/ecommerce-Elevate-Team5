import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IItemProduct } from './model/iitem-product';

@Component({
  selector: 'app-item-product',
  imports: [CommonModule],
  templateUrl: './item-product.component.html',
  styleUrl: './item-product.component.css'
})
export class ItemProductComponent {

  // @Input() item: IProduct = {} as IProduct;
  @Input() popularItem: IItemProduct = {} as IItemProduct;
}
