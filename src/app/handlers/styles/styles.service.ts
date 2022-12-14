import { Injectable } from '@angular/core';
import { AsyncSubject, Subject } from 'rxjs';
import { styleBoxDef, styleHomeDef, styleNavDef } from 'src/app/style-values-model';

@Injectable({
  providedIn: 'root'
})
export class StylesService {

  constructor() { }

  styleNav = new Subject<styleNavDef>();
  styleHome = new Subject<styleHomeDef>();
  styleBox = new Subject<styleBoxDef>();

  NavDef(data:styleNavDef){
    this.styleNav.next(data);
  }

  HomeDef(data:styleHomeDef){
    this.styleHome.next(data);
  }

  BoxDef(data:styleBoxDef){
    this.styleBox.next(data);
  }
}
