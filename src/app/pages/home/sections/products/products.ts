import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scroll } from '../../../../scroll';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.scss']
})
export class ProductsComponent {
  @ViewChild('productsSection') productsSection!: ElementRef;

  constructor(private scrollService: Scroll) { }

  ngOnInit() {
            console.log("indised inside product ngonit")

    this.scrollService.scrollToProduct$.subscribe(() => {
      this.productsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    });
  }

}
