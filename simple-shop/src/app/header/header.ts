import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  showCart() {

  }
}
