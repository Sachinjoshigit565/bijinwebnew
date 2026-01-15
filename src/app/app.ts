import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header';
import { FooterComponent } from './layout/footer/footer';

import { HeroComponent } from './pages/home/sections/hero/hero';
import { CategoriesComponent } from './pages/home/sections/categories/categories';
import { ProductsComponent } from './pages/home/sections/products/products';
import { WhyUsComponent } from './pages/home/sections/why-us/why-us';
import { NewsletterComponent } from './pages/home/sections/newsletter/newsletter';
import { AboutUsComponent } from './pages/home/sections/about-us/about-us';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HeroComponent, CategoriesComponent,
    ProductsComponent, WhyUsComponent, NewsletterComponent, AboutUsComponent
  ],
  templateUrl: './app.html'
})
export class AppComponent { }
