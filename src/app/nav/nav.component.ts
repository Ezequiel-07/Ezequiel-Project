import { Component, OnInit } from '@angular/core';
import { StylesService } from '../handlers/styles/styles.service';
import { styleNavDef } from '../style-values-model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  status:boolean = false;
  animation:string = '';
  count:number = 0;

  constructor(private style_service:StylesService) { }

  ngOnInit(): void {
    this.relog();
  }

  styleData:styleNavDef = {
    background: '#0c0c0c',
    nav: '#00000088',
    color: '#00ffea',
    shadow: '0 0 .5vw 0 #00ddb8, 0 0 .5vw 0 #009ccc, 0 0 .5vw 0 #00529e',
  }
  style = this.style_service.styleNav.asObservable().subscribe(data => {
    this.styleData = data;
  });

  relog(){
    setInterval(()=>{
      this.count += 1;
    }, 1000)
  }

  appearance(){
    if(this.count < 2){
      return;
    }
    this.count = 0;

    if(this.status == true){
      this.animation = 'disappear 1.1s ease'
      setTimeout(()=>{
        this.status = false;
        this.animation = 'appear 1s ease';
      }, 1000);
    }

    this.status = true;
  }
}
