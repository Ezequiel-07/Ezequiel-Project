import { Component, Input, OnInit } from '@angular/core';
import { StylesService } from 'src/app/handlers/styles/styles.service';
import { styleBoxDef, styleHomeDef, styleNavDef } from 'src/app/style-values-model';
import values from './values';

@Component({
  selector: 'app-appearance',
  templateUrl: './appearance.component.html',
  styleUrls: ['./appearance.component.scss']
})
export class AppearanceComponent implements OnInit {
  @Input() background:any;
  nav:styleNavDef = {
    background: '#0c0c0c',
    nav: '#00000088',
    color: '#00ffea',
    shadow: '0 0 .5vw 0 #00ddb8, 0 0 .5vw 0 #009ccc, 0 0 .5vw 0 #00529e'
  };
  home:styleHomeDef = {
    background: '#004199',
    image_background: 'url("../../../assets/background-blue.svg");',
    letter_color: '#2eabff'
  }
  box:styleBoxDef = {
    letter_color: '#ffffff',
    iframe_color: '#000000'
  }

  constructor(private style_service:StylesService) { }

  values:any = values;

  selectBackground(event:any){
    // NAV
    this.nav.background = this.values[event.path[0].className].background;
    this.nav.nav = this.values[event.path[0].className].nav;

    // BOX
    this.box.letter_color = this.values[event.path[0].className].box_letter;
    this.box.iframe_color = this.values[event.path[0].className].box_iframe;

    // SEND STYLES
    this.style_service.NavDef(this.nav);
    this.style_service.BoxDef(this.box);
  }

  selectColor(event:any){
    // NAV
    this.nav.color = this.values[event.path[0].className].color;
    this.nav.shadow = this.values[event.path[0].className].shadow;
    this.nav.nav = this.values[event.path[0].className].nav;

    // HOME
    this.home.background = this.values[event.path[0].className].home_background;
    this.home.image_background = this.values[event.path[0].className].image_home;
    this.home.letter_color = this.values[event.path[0].className].home_letter;

    // SEND STYLES
    this.style_service.NavDef(this.nav);
    this.style_service.HomeDef(this.home);
  }

  ngOnInit(): void {
  }
}
