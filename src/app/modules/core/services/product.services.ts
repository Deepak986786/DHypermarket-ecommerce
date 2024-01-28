import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url = 'https://localhost:7222/api/product'
@Injectable({
    providedIn: 'root'
})
export class ProductService {
    /**
     *
     */
    constructor(private http: HttpClient) {

    }


    getProductsByCategoryId(categoryId: string) {
        return this.http.get(`${url}/getProductByCategory?category=${categoryId}`)
    }

    getProductById(id: string) {
        return this.http.get(`${url}/getProductById?id=${id}`);
    }

    getFeaturedProducts(limit: number) {
        return this.http.get(`https://fakestoreapi.com/products?limit=${limit}`)
    }

    addToCart(product: any) {
        // Get the existing cart items from localStorage
        let cartItems: any[] = []
        let cartItemsObj = localStorage.getItem('cartItems');
        if (cartItemsObj) {
            cartItems = JSON.parse(cartItemsObj) || [];
        }
        let existingObject = cartItems.find(obj => obj.id === product.id);

        // If not found, push the new object
        if (!existingObject) {
            cartItems.push(product);
        } else {
            console.log('product alreay added');
        }

        // Save the updated cart back to localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        return true
    }

    getCartItems() {
        let cartItemsObj = localStorage.getItem('cartItems');
        return cartItemsObj ? JSON.parse(cartItemsObj) : [];
    }
}