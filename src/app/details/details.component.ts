import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SShoeinfoService } from '../s-shoeinfo.service';
import { Shoedetails } from '../Shoedetails';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
<img class="listing-photo" [src]="routerid?.photo">
<section class="listing-discription">
<h2 class="listing-heading">{{routerid?.model}}</h2>
<p class="listing-location">{{routerid?.make}},
{{routerid?.Year}}</p>
</section>
<section class="listing-features">
<h2 class="section-heading">Detials about these Shoes</h2>
<ul>
<li>How many pairs are available
{{routerid?.availableUnits}}</li>
<li>Is the shoe used ?
{{routerid?.used}}</li>
<li>Is it available for resale?
{{routerid?.resale}}</li>
</ul>
</section>
</article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route:ActivatedRoute =inject(ActivatedRoute);
  

  shoeinfoService = inject (SShoeinfoService);
  routerid:Shoedetails | undefined;
  

  constructor(){
    const routerid
    =Number(this.route.snapshot.params['id']);
    this.routerid = this.shoeinfoService.getShoeinformationById(routerid);
  }

}
