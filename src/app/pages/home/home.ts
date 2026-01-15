import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header';
import { FooterComponent } from '../../layout/footer/footer';

import { HeroComponent } from './sections/hero/hero';
import { CategoriesComponent } from './sections/categories/categories';
import { ProductsComponent } from './sections/products/products';
import { WhyUsComponent } from './sections/why-us/why-us';
import { NewsletterComponent } from './sections/newsletter/newsletter';
import { AboutUsComponent  } from './sections/about-us/about-us';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    CategoriesComponent,
    ProductsComponent,
    WhyUsComponent,
    NewsletterComponent,
    AboutUsComponent 
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {}
