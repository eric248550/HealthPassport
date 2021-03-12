import { Injectable } from '@angular/core';
import { Dispenser } from './dispenser.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Globals} from '../../globals'

@Injectable({
  providedIn: 'root'
})
export class DispenserService {
  //Man-made Data
  //private cant be access
  url_dispenser_info: string='https://smartcampus.et.ntust.edu.tw:5029/get/display/all'; // get all dispensers
  dispenserInfo: Dispenser[];
  private globals: any;
  data_dispensers: any;
  
  constructor(private http: HttpClient,globals: Globals) {
    //this.globals = globals;
    this.dispenserInfo = globals.dispenserInfo;// assign global variables value
  }
  /*
  public dispenser_api(){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': "content-type",
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    this.http.get<any>(this.url_dispenser_info, requestOptions).subscribe(data => {

    });
  }
  */
  /*
  GetAllDispensers(){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': "content-type",
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    this.http.get<any>(this.url_dispenser_info, requestOptions).subscribe(data => {
      this.dispenserInfo = data;
    });
    console.log(...this.dispenserInfo)
    return [...this.dispenserInfo];
  }
  */
  /*
  GetDispenser(surroundDispenserID: string){
    return {
      ...this.dispenserInfo.find(dispenser => {
        return dispenser.Dispenser === surroundDispenserID;
      })
    };
  }
  */
}
