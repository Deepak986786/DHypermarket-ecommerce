import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.showNext();
    },4000)
  }

  images: string[] = [
    'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b076c9bff65b2d6e.png?q=20',
    'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9f2d8a698cd97710.jpg?q=20',
    'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4eed11b0faee9cec.jpg?q=20',
    'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/d5a2a6481656bb58.jpeg?q=20'
  ];
  currentIndex = 0;

  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  showPrevious() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

}
