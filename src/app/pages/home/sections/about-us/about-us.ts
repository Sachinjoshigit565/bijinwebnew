import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scroll } from '../../../../scroll';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.html',
  styleUrls: ['./about-us.scss']
})
export class AboutUsComponent {

  @ViewChild('aboutSection') aboutSection!: ElementRef;

 
    constructor(private scrollService: Scroll) { }

  ngOnInit() {

      this.scrollService.scrollToaboutus$.subscribe(() => {
      this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    });
  }  
}


