import { Component, OnInit } from '@angular/core';
import { StylesService } from 'src/app/handlers/styles/styles.service';
import { styleHomeDef } from 'src/app/style-values-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  circles = ['circle-1', 'circle-2', 'circle-3', 'circle-2 cir-1', 'circle-1 cir-2'];

  constructor(private style_service:StylesService) { }

  styleData:styleHomeDef = {
    background: '#004199',
    image_background: 'assets/background-blue.svg',
    letter_color: '#2eabff'
  }
  style = this.style_service.styleHome.asObservable().subscribe(data => {
    this.styleData = data;
  });

  ngOnInit(): void {
  }
}