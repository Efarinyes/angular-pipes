import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommons-page',
  templateUrl: './uncommons-page.component.html',
  styleUrls: ['./uncommons-page.component.css']
})
export class UncommonsPageComponent {

  // i18n Select pipe
  public name: string = 'Eduard';
  public gender: 'male' | 'female' = 'male'
  public invitationMap = {
    'male': 'convidar-lo',
    'female': 'convidar-la'
  }

  changeClient(): void {
    this.name = 'Montserrat'
    this.gender = 'female'
  }
  // i18n Plural pipe

  public clients: string[] = ['Maria', 'Ferran', 'Josep', 'Jordi', 'Anna', 'Júlia', 'Idoia', 'Antonia']
  public clientsMap = {
    '=0': 'No hi ha clients esperant',
    '=1': 'Hi ha un client esperant',
    'other': 'Hi ha # clients esperant'
  }
  deleteClient(): void {
   this.clients.shift()
  }
  // KeyValue Pipe
  public person = {
    name: 'Ferran',
    age: 45,
    adress: 'Mataró, Catalonia'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap', value))
  )

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout( () => {
      resolve('Tenim dades a la promesa ')
      console.log('Tenim dades a la promesa')
    }, 2500)
  } )
}
