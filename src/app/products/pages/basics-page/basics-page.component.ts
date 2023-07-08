import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'eduard';
  public nameUpper: string = 'EDUARD';
  public fullNmae: string = 'eDuaRd fAriNYeS'

  public customDate: Date = new Date();


}
