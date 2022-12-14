import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() style:any;
  src:string = '';
  animation:string = 'appear 1s ease';

  constructor() { }

  ngOnInit(): void {
  }

  appearIframe(src:string){
    this.src = src;
  }

  close(){
    this.animation = 'disappear 1.1s ease'
    setTimeout(()=>{
      this.src = '';
      this.animation = 'appear 1s ease';
    }, 1000);
  }
}
