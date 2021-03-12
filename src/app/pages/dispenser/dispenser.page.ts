import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dispenser } from './dispenser.model';
import { DispenserService } from './dispenser.service';
import {Globals} from '../../globals'
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-dispenser',
  templateUrl: './dispenser.page.html',
  styleUrls: ['./dispenser.page.scss'],
})
export class DispenserPage implements OnInit {
  url_dispenser_info: string='https://smartcampus.et.ntust.edu.tw:5029/get/display/all'; // get all dispensers
  dispenserInfo: Dispenser[];
  data_dispensers: any=[];

  get_id: string;
  dispenser_id: string;
  dispensers: Dispenser[];
  globals: any;
  
  constructor(
    private DispenserService: DispenserService,
    private activatedRoute: ActivatedRoute,
    globals: Globals,
    private http: HttpClient,

    ) {
      this.globals = globals;
    }

  ngOnInit() {
    this.GetAllDispensers();
    //this.DispenserService.dispenser_api();
    //this.dispensers = this.DispenserService.GetAllDispensers();
    this.get_id = this.activatedRoute.snapshot.paramMap.get('dispenserID');
    this.dispenser_id = this.activatedRoute.snapshot.paramMap.get('ID');
  }
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
      this.data_dispensers = data;
      //console.log(data);
      //console.log(this.data_dispensers);
    });
  }
}
