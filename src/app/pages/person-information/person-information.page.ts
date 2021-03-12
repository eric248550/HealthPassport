import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router  } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-person-information',
  templateUrl: './person-information.page.html',
  styleUrls: ['./person-information.page.scss'],
})
export class  PersonInformationPage implements OnInit {
  data_person: any=[];
  get_id: string; //xinxing01
  person_id: string; // B10602201
  timeStamp: number; //unix
  url_person_info: string='https://smartcampus.et.ntust.edu.tw:5029/get/memberdata';
  url_dispenser_info: string='https://smartcampus.et.ntust.edu.tw:5029/get/display';
  constructor(
    private http: HttpClient,
    public loadingController: LoadingController,
    private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private Router : Router,
    ) { }
  
  ngOnInit() {
    this.get_id = this.activatedRoute.snapshot.paramMap.get('dispenserID');
    this.presentLoading();
    this.getInfo(this.get_id)
    //this.getPerson();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: '資料獲取中',
      duration: 100
    });
    await loading.present();

    //const { role, data } = await loading.onDidDismiss();
    //console.log('Loading dismissed!');
  }
  getInfo(id: string){
    // get dispenser
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': "content-type",
      'Dispenser': id,
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    //  console.log("data");
    this.http.get<any>(this.url_dispenser_info, requestOptions).subscribe(data => {
      this.person_id = data.Data[0].SchoolID;
      this.timeStamp = data.Data[0].Timestamp;
      console.log(this.timeStamp);
      console.log(Date.now()/1000);
      if((Date.now()/1000-this.timeStamp)>60){
        console.log(Date.now()/1000-this.timeStamp);
        this.presentPrompt();
      }
      else{
        //console.log(data);
      //get preson
      const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Access-Control-Allow-Headers": 'Content-Type',
        'SchoolID': this.person_id,
      }
      const requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(headerDict), 
      };
      this.http.get<any>(this.url_person_info, requestOptions).subscribe(data => {
        this.data_person = data;
        //console.log(data);
      });
      }
      
    });
  }
  presentPrompt() {
    let alert = this.alertCtrl.create({
      header: '錯誤',
      message: '請先在飲水機感應卡片後再按此按鈕',
      buttons: [
        {
          text: '確認',
          handler: data => {
            this.Router.navigate(['/menu',this.get_id]);
            console.log('send');
          }
        }
      ]
    }).then(alert=> alert.present());
  }
  /*
  getPerson(){
    //console.log(this.person_id);
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      "Access-Control-Allow-Headers": 'Content-Type',

      'SchoolID': this.person_id,
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    this.http.get<any>(this.url_person_info, requestOptions).subscribe(data => {
      this.data_person = data;
    });
  }
  */
  /*
  async get_json(){ 
    //const cors = 'https://cors-anywhere.herokuapp.com/'; // use cors-anywhere to fetch api data
    const url = 'http://140.118.121.201:5000/get/memberdata'; // origin api url
    //let URL='http://140.118.121.201:5000/get/memberdata';
    //this.url=cors+url_1;
    this.http.get<any>(this.url).subscribe(data => {
      this.data = data;
    });
  }
  */
}
