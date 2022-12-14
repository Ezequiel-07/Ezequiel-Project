import { Component, OnInit } from '@angular/core';
import { StylesService } from 'src/app/handlers/styles/styles.service';
import { styleBoxDef } from 'src/app/style-values-model';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  constructor(private style_service:StylesService) { }

  ngOnInit(): void {
  }

  styleData:styleBoxDef = {
    letter_color: '#ffffff',
    iframe_color: '#000000'
  }
  style = this.style_service.styleBox.asObservable().subscribe(data => {
    this.styleData = data;
  });
}
