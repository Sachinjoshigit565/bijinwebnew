import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scroll } from '../../../../scroll';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newsletter.html',
  styleUrls: ['./newsletter.scss']
})
export class NewsletterComponent {
  @ViewChild('contactSection') contactSection!: ElementRef;

 
    constructor(private scrollService: Scroll) { }

  ngOnInit() {

      this.scrollService.scrollToContact$.subscribe(() => {
      this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    });
  }
  
}
