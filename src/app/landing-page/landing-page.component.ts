// src/app/landing-page/landing-page.component.ts

import { Component, OnInit } from '@angular/core';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faStrava
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'b2s-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  faFilePdf = faFilePdf;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faStrava = faStrava;

  constructor() {}

  ngOnInit(): void {}
}
