import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {
  orderCounter = 0;
  orders: Array<any> = [];
  commandes: any = [];


  ngOnInit() {
  }

  
  addtoCart(order, qtd,supplementPrice,supplementsName) {
    this.orderCounter = this.orderCounter + 1;
    this.orders.push({id: this.orderCounter, order: order, qtd: qtd, supplementPrice:supplementPrice,supplementsName:supplementsName});
    return Promise.resolve();
  }
  addCommandestoCart(commandes) {
    this.commandes.push(commandes);
    return Promise.resolve();
  }

  getOrders() {
    return Promise.resolve(this.orders);
  }

  getCommandes() {
    return Promise.resolve(this.commandes);
  }


  removefromCart(order) {
    const index = this.orders.indexOf(order);
    if (index > -1) {
      this.orders.splice(index, 1);
    }
    return Promise.resolve();
  }

  removefromCommandes(commandes) {
    const index = this.commandes.indexOf(commandes);
    if (index > -1) {
      this.commandes.splice(commandes, 1);
    }
    return Promise.resolve();
  }

  editQtdOrder(order, op) {
    for (const i in this.orders) {
      if (this.orders[i].id === order.id) {
        if (op === 'minus') {
          this.orders[i].qtd--;
          break;
        }
        if (op === 'plus') {
          this.orders[i].qtd++;
          break;
        }
      }
    }
    
    return Promise.resolve();
  }

  cleanCart() {
    this.orders = [];
  }
}
