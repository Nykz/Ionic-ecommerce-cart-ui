import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage implements OnInit {

  items = [
    { id: 1, name: 'T-shirt for men', photo: 'assets/imgs/tshirt.jpeg', color: 'Yellow', price: 20, quantity: 1 },
    { id: 2, name: 'LED Backpack', photo: 'assets/imgs/backpack.jpg', color: 'Black', price: 50, quantity: 1 },
    { id: 3, name: 'Jordan Shoes', photo: 'assets/imgs/jordan.jpg', color: 'Blue', price: 499, quantity: 1 },
    { id: 4, name: 'Wireless Headphone', photo: 'assets/imgs/G2050-BLUE.jpg.webp', color: 'Navy Blue', price: 30, quantity: 1 },
  ];
  total = 0;

  constructor() {
  }

  ngOnInit(): void {
    for(let i = 0; i < this.items.length; i++) {
      this.total += this.items[i].price;
    }
  }

  addQuantity(index: number) {
    this.items[index].quantity++;
  }

  minusQuantity(index: number) {
    if(this.items[index].quantity > 1) this.items[index].quantity--;
    else {
      this.items = this.items.filter((item) => item.id != this.items[index].id);
    }
  }

}
