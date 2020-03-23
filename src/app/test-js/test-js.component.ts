import { Component, OnInit } from '@angular/core';
import {computeStyle} from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-test-js',
  templateUrl: './test-js.component.html',
  styleUrls: ['./test-js.component.scss']
})
export class TestJSComponent implements OnInit {

  items = [
    {name: 'ali', componentid: '120'},
    {name: 'ali', componentid: '120'},
    {name: 'reza', componentid: '120'}
  ];
  constructor() { }

  ngOnInit() {
//    this.arrayReplacerJsonStringify();
//    this.mapChangeArray();
 //   this.removeDuplicateFromArray();
  //  this.checkDuplicateToAdd();
  //  this.removeItemFromArray()
   // this.spliceItems()
 //   this.shiftArray()
  ///  this.sliceArray()
  //  this.splitArray()
    this.reverseString()
  }

 arrayReplacerJsonStringify(){
   const user = {
     'username': 'Ajax',
     'email': 'iras.user@gmail.com',
     'password': 'hash_me'
   }
   const userString = JSON.stringify(user, ['username', 'email'] )
   console.log(userString)
  }

  mapChangeArray(){
    const users = [{
      'username': 'Ajax',
      'email': 'iras.user@gmail.com',
      'password': 'hash_me'
    }]
    const mappedUser = users.map( (item) => ({
      'user': item.username,
      'pass': item.password
    } ))
    console.log(mappedUser)
  }
  removeDuplicateFromArray(){
    const array = [1,1,1,3,4,5,3,6,7,3,6,1];
    const uniqueArray =  Array.from(new Set(array));
    console.log(uniqueArray)
  }


  checkDuplicateToAdd(){
    let item = {name: 'ali', componentid: '120'};
    if (this.items.find((test) => test.name === item.name) === undefined) {
      this.items.push(item);
    }
    console.log(this.items)
  }


  removeItemFromArray(){
    let obj = {name: 'ali', componentid: '120'};
   // let filteredItems = this.items.filter(item => item.name != obj.name);
  //  console.log(filteredItems)
    const index = this.items.findIndex(item => item.name == obj.name)
    this.items.splice(index, 1);
    console.log(this.items)
  }


    // splice : array.splice(start, [deleteCount], [item1], [item2])
  spliceItems(){
    const array = ['A', 'B', 'C', 'D'];
   // array.splice(1,1,'z')
    array.splice(1,0,'z')
    console.log(array)
  }

  // remove 1 item at 0-index position, return the deleted item
  shiftArray(){
    const array = ['A', 'B', 'C', 'D'];
    let shifted = array.shift()
    console.log(shifted)
    console.log(array)
  }
sliceArray(){
  const array = ['A', 'B', 'C', 'D'];
  console.log(array.slice() ) //  Copy of Array
  console.log(array.slice(-1) )  // begin is negative 1, slice begins from the last one element to the length of array.
  console.log(array.slice(0,-1) ) // begin is zero, slice begins from index 0 to the first-to-last element.
  }

//string.split([separator[, limit]])  split() is a method of String Object. It splits a string by separator into a new array.
  splitArray(){
    const string = 'Hello World. How are you doing?';
    console.log(string.split(' ', 3))    //limit
    console.log(string.split(' '))   //unlimit
  }

  reverseString(){
    const string = 'Hello';
    console.log(string.split('').reverse().join(''))
  }
}

