import { Component, Input } from '@angular/core';
import { Shoedetails } from '../Shoedetails';
import { DetailsComponent } from '../details/details.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-shoeinformation',
  standalone: true,
  imports: [DetailsComponent, RouterModule],
  template: `
    <section class="listing">
    <img class="listing-photo" [src]="V_ShoeInformation.photo" alt = "Exterior photo of" >
    <h2 class="listing-heading"> {{V_ShoeInformation.model}}</h2>
    <p class="listing-location">{{V_ShoeInformation.make}}, {{V_ShoeInformation.Year}}</p>
    <a [routerLink]="['/details',V_ShoeInformation.id]">Learn More</a>
  </section>
  `,
  styleUrl: './shoeinformation.component.css'
})
export class ShoeinformationComponent {
  @Input() V_ShoeInformation!: Shoedetails;
}
