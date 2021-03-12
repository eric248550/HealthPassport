import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Dispenser } from '../dispenser/dispenser.model';
//import service
import { DispenserService } from '../dispenser/dispenser.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})

export class MenuPage implements OnInit {
  LoddedDispenser: Dispenser;
  get_id: string;
  // private recipes: Dispenser[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private Router : Router,
    private DispenserService: DispenserService,
    public navCtrl: NavController,
    private AlertCtrl: AlertController
    //private http: HttpClient
    //private AlertCtrl : AlertController
  ) { }
  async ngOnInit() {
    /*
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('dispenserID')){
        // re-direct
        this.Router.navigate(['/menu']);
        return;
      }
      // extract from service
      const dispenserID = paramMap.get('dispenserID');
      this.LoddedDispenser = this.DispenserService.GetDispenser(dispenserID);
    });
    */
    //this.get_id = this.urlService.getId('dispenserID');
    this.get_id = this.activatedRoute.snapshot.paramMap.get('dispenserID');
  }
  // popup window for input card

  InputCard(){
    this.AlertCtrl.create({
      header: '讀取中',
      message: '請將學生證靠近讀卡機',
      inputs: [
        {
          name: 'card',
          placeholder: '輸入卡號',
          value: ""
        }
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: data => {
            console.log('cancel');
          }
        },
        {
          text: '送出',
          handler: data => {
            let url: string = "test";
            url=String(data['card']);
            console.log('post to api: ' + url);
            //console.log(this.GetInformation());
          }
        }
      ]
    }).then(alert=> alert.present());
  }


}

