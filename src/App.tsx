import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LargeNumberLike } from 'crypto';
import Counter from './component/Counter';
import Users from './component/Users';

let student: string = 'Korim';
let age:number = 56;
let isSmart: boolean = false;

const peoples: string[] = ['Clinton', 'Kamala', 'Joe'];
const ages: number[] = [12, 33, 12, 44, 53];

interface Person {
  name: string,
  age: number,
  job?: string
  location: string | number
}
const person: Person = {
  name: 'Bill Gates',
  age: 32,
  job: 'Billionier',
  location: 'Samanta'
}

const handleAddUser = (firstName: string, total: number, address: string):number => {
  const age: number = 50;
  console.log(age);
  return total;
}

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

export default App;
