import { Injectable } from '@angular/core';
import { Dispenser } from './pages/dispenser/dispenser.model';

@Injectable()
export class Globals {
  role: string = 'test1';
  dispenserInfo: Dispenser[] = [
    {
      Dispenser: 'xinxing01',
      Location: 'EE 6F 601-5',
      ColdTemp: 9,
      WarmTemp: 25,
      HotTemp: 97,
      SchoolID: 'B1062201',
      Timestamp: '1611848108'
    },
    {
      Dispenser: 'xinxing02',
      Location: 'EE 8F 809',
      ColdTemp: 5,
      WarmTemp: 40,
      HotTemp: 99,
      SchoolID: 'B1062201',
      Timestamp: '1611848108'
    }
  ];
}