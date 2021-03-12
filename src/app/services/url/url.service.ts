import { Injectable } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(
      private activatedRoute: ActivatedRoute
  ) { }

  getId(id: string){
    return this.activatedRoute.snapshot.paramMap.get('dispenserID');
  }
}
