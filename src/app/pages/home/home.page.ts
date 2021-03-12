import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Dispenser } from '../dispenser/dispenser.model';
import { DispenserService } from '../dispenser/dispenser.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  url_dispenser_info: string='https://smartcampus.et.ntust.edu.tw:5029/get/display/all'; // get all dispensers
  dispenserInfo: Dispenser[];
  data_dispensers: any=[];

  dispensers: Dispenser[];
  id: string;
  constructor(
    private DispenserService: DispenserService,
    public navCtrl: NavController,
    private http: HttpClient,
    ) { }

  ngOnInit() {
    //this.dispensers = this.DispenserService.GetAllDispensers();
    this.GetAllDispensers();
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
