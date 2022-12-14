import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StylesService } from './handlers/styles/styles.service';
import { styleNavDef } from './style-values-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'cover-letter';

  constructor(private style_service:StylesService){}

  ngOnInit(){
  }

  styleData:styleNavDef = {
      background:'#040404',
      nav:'white',
      color: '#ff00000',
      shadow: '0 0 .5vw 0 #ff0000, 0 0 .5vw 0 #9e0000, 0 0 .5vw 0 #800000'
  }
  style = this.style_service.styleNav.asObservable().subscribe(data => {
    this.styleData = data;
  });
}
