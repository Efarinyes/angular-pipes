import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFlay: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFlay: false,
      color: Color.black
    },
    {
      name: 'Dardevil',
      canFlay: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFlay: false,
      color: Color.red
    },
    {
      name: 'Linterna Verde',
      canFlay: true,
      color: Color.green
    },
  ]

  toogleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase
  }

  changeOrder( value: keyof Hero ) {
    this.orderBy = value
  }

}
