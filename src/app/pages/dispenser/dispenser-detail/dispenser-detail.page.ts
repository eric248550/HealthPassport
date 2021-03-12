import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Globals } from 'src/app/globals';
import { Dispenser } from '../dispenser.model';
//import service
import { DispenserService } from '../dispenser.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-dispenser-detail',
  templateUrl: './dispenser-detail.page.html',
  styleUrls: ['./dispenser-detail.page.scss'],
})
export class DispenserDetailPage implements OnInit {
  url_dispenser_info: string='https://smartcampus.et.ntust.edu.tw:5029/get/display'; // get all dispensers
  dispenserInfo: Dispenser[];
  data_dispensers: any=[];

  LoddedDispenser: Dispenser;
  get_id: string;
  get_dispenserID: string;
  globals: any;
  //private recipes: Dispenser[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private Router : Router,
    private DispenserService: DispenserService,
    globals: Globals,
    private http: HttpClient,
    //private AlertCtrl : AlertController
  ) {
    this.globals = globals;
   }

  ngOnInit() {
    this.get_id = this.activatedRoute.snapshot.paramMap.get('dispenserID');
    this.get_dispenserID = this.activatedRoute.snapshot.paramMap.get('ID');

    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('ID')){
        //re-direct
        this.Router.navigate(['/dispenser']);
        return;
      }
      //extract from service
      // 'ID' for show dispenser detail
      const dispenserID = paramMap.get('ID');
      //this.LoddedDispenser = this.activatedRoute.snapshot.paramMap.get('dispenserID');
      //this.LoddedDispenser = this.DispenserService.GetDispenser(dispenserID);
    });
    // dispenserID for initiated setting
    this.getDispenser(this.get_dispenserID);
  }

  getDispenser(dispenserID: string){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': "content-type",
      'Dispenser': dispenserID
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
