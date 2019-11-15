import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  orderCounter = 0;
  orders: Array<object> = [];

  saveOrder(order, total, orderNumber) {
    this.orderCounter = this.orderCounter + 1;
    this.orders.push({id: this.orderCounter, order: order, total: total, onumber: orderNumber});
    return Promise.resolve();
  }

  getOrders() {
    return Promise.resolve(this.orders);
  }
}
