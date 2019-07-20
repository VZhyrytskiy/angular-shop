import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { Category } from '../../common/enums/category';

@Injectable({
  providedIn: 'root',
})

export class ProductsService {
  constructor() { }

  getBooks(): ProductModel[] {

    const books: ProductModel[] = [
      {
        productId: 1,
        name: 'Game of Thrones',
        author: 'G. Martin',
        category: Category.Fantasy,
        price: 30,
        isAvailable: true
      },
      {
        productId: 2,
        name: 'Dance with the Winds',
        author: 'G. Martin',
        category: Category.Fantasy,
        price: 30,
        isAvailable: true
      }
    ];

    return books;
  }
}
