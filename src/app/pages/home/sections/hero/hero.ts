import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scroll } from '../../../../scroll';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  @ViewChild('homeSection') homeSection!: ElementRef;

  currentIndex = 0;
  intervalId: any;

  slides = [
    {
      tagline: 'Pure • Natural • Authentic',
      title: 'Experience the Power of Nature',
      description:
        'Premium quality products made with natural ingredients and traditional wisdom.',
      image: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6'
    },
    {
      tagline: 'Healthy Living',
      title: 'Care That Comes From Nature',
      description:
        'Chemical-free products crafted for a healthier and happier lifestyle.',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9'
    },
    {
      tagline: 'Tradition Meets Quality',
      title: 'Inspired by Ancient Wisdom',
      description: 'Rooted in tradition, made for modern homes.',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883'
    }
  ];

  constructor(private scrollService: Scroll) { }


  ngOnInit(): void {
    this.startAutoSlide();

    this.scrollService.scrollTohome$.subscribe(() => {
      this.homeSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    });


  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.stopAutoSlide(); // prevent duplicate intervals
    this.intervalId = setInterval(() => {
      this.next();
    }, 2000); // ⏱ 10 seconds
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.startAutoSlide();
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goTo(index: number): void {
    this.currentIndex = index;
    this.startAutoSlide(); // reset timer
  }
}
