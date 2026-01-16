import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from '../../pages/home/sections/products/products';
import { Scroll } from '../../scroll';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductsComponent],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {

  constructor(private scrollService: Scroll) {}

  goToProducts() {this.scrollService.scrollToProduct();}

  goToContact() {this.scrollService.scrollToContact();}

    goToAboutus() {this.scrollService.scrollToaboutus();}

    goToHome() {this.scrollService.scrollTohome();}


  

}
