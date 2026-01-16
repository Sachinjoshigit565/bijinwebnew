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
        'At Bijin Healthcare, we believe your skincare should be as pure as the world around us. Our premium collection blends traditional wisdom with modern dermatology to bring you a glow that’s rooted in nature. No harsh chemicals—just botanical brilliance.',
      image: 'assets/images/bannner1.png'
    },
    {
      tagline: 'Healthy Living',
      title: 'Care That Comes From Nature',
      description:
        'True wellness starts at the source. At Bijin Healthcare, we spend years researching the purest botanicals to ensure you never have to choose between safety and results. Our chemical-free formulas are meticulously crafted for a healthier, happier you.',
      image: 'assets/images/bannner2.png'
    },
    {
      tagline: 'Tradition Meets Quality',
      title: 'Inspired by Ancient Wisdom',
      description: 'Inspired by ancient wisdom, our creations honor time-tested practices while embracing uncompromising quality. Every detail reflects a legacy of craftsmanship passed down through generations, thoughtfully refined for the modern world.',
      image: 'assets/images/bannner3.png'
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
