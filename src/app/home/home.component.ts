import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoeinformationComponent } from '../shoeinformation/shoeinformation.component';
import { Shoedetails } from '../Shoedetails';
import { SShoeinfoService } from '../s-shoeinfo.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ShoeinformationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Search by name">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-shoeinformation
        *ngFor="let v2  of ShoeinformationList"
        [V_ShoeInformation]="v2">
      </app-shoeinformation>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  ShoeinformationList: Shoedetails[] = [];

  shoeinformation: SShoeinfoService = inject(SShoeinfoService);


  constructor(){
    this.ShoeinformationList = this.shoeinformation.getAllShoeDetails();
  }
}
