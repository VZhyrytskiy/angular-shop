import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemModel } from '../../models/cartItem.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cartItems: CartItemModel[] = [];
  getSum: () => number;
  getCount: () => number;
  sortOptions = [
    {
      name: 'Name',
      value: 'product.name'
    },
    {
      name: 'Price',
      value: 'product.price'
    },
    {
      name: 'Count',
      value: 'quantity'
    }
  ];
  selectedValue = this.sortOptions[0];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.cart;
    this.getSum = this.cartService.getSum;
    this.getCount = this.cartService.getCount;
  }

  onRemoveClicked(item: CartItemModel): void {
    this.cartService.removePositionFromCart(item);
  }

  onIncreaseClicked(item: CartItemModel): void {
    this.cartService.increaseQuantity(item);
  }

  onDecreaseClicked(item: CartItemModel): void {
    this.cartService.decreaseQuantity(item);
  }

}
