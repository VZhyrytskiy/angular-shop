import { Injectable } from '@angular/core';
import { CartItemModel } from '../models/cartItem.model';
import { ProductModel } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItemModel[] = [];
  private id: number = 0;
  private totalCount: number = 0;
  private totalSum: number = 0;

  get cart() {
    return this.cartItems;
  }

  addToCart(item: ProductModel): void {

    var existingItem = this.getItemByProduct(item);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.id++;
      this.cartItems.push(
        {
          cartItemId: this.id,
          product: item,
          quantity: 1
        });
    }

    this.updateTotals();
  }

  removePositionFromCart(item: CartItemModel): void {

    const ind = this.cartItems.indexOf(item);
    if (ind > -1) {
      this.cartItems.splice(ind, 1);
    }

    this.updateTotals();
  }

  removeAll(): void {
    this.cartItems = [];
    this.updateTotals();
  }

  getItemByProduct(item: ProductModel): CartItemModel {
    let result: CartItemModel = null;
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].product.productId === item.productId) {
        result = this.cartItems[i];
        break;
      }
    }
    return result;
  }

  increaseQuantity(item: CartItemModel):void {
    item.quantity++;
    this.updateTotals();
  }

  decreaseQuantity(item: CartItemModel): void {
    if (item.quantity === 1) {
      this.removePositionFromCart(item);
    } else {
      item.quantity--;
      this.updateTotals();
    }
  }

  getSum(): number {
    let sum = 0;
    for (const item of this.cartItems) {
      sum += item.product.price * item.quantity;
    }
    return sum;
  }

  getCount(): number {
    let count = 0;
    for (const item of this.cartItems) {
      count += item.quantity;
    }
    return count;
  }

  updateTotals(): void {
    this.totalCount = this.getCount();
    this.totalSum = this.getSum();
  }
}
