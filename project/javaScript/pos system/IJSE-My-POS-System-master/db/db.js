import {Customer} from "../model/Customer.js";
import {Item} from"../model/Item.js";
import {Order} from "../model/Order.js";
import {OrderDetail} from "../model/OrderDetail.js";

var customerList=[];
customerList.push(new Customer("C001","Kamal","Mathara",55250.00));
customerList.push(new Customer("C002","Niamal","Galle",852250.00));
customerList.push(new Customer("C003","Danapala","Colombo",921250.00));
customerList.push(new Customer("C004","Danapala","Gampaha",121250.00));
customerList.push(new Customer("C005","Gunapala","Kurunagale",15250.00));

var itemList=[];
itemList.push(new Item("P001","Keyboard",10,500.00));
itemList.push(new Item("P002","Mouse",15,200.00));
itemList.push(new Item("P003","Monitor",5,10000.00));
itemList.push(new Item("P004","Pen Drive",20,1000.00));
itemList.push(new Item("P005","Hard disk",15,5000.00));


var orderList=[];
orderList.push(new Order("D005",new Date().toISOString().split("T")[0],new Date().toLocaleTimeString(),"C001","0","1000.00"));

var orderDetailList=[];

export {customerList,itemList,orderList,orderDetailList}



