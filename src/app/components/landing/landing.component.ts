import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  catFilenames: string[] = [
    'capple.gif',
    'cat-22.gif',
    'cat-holding-head-cat.gif',
    'cat-nori.gif',
    'cat-smacking-other-cat-cat.gif',
    'catkiss-cat.gif',
    'gato-pato.gif',
    'huh-cat-huh-m4rtin.gif',
    'kitty.gif',
    'no-no-no-no.gif',
    'plink-cat-blink.gif',
    'wiggle-cat-wiggle.gif',
  ];
}
