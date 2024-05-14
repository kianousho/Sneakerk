import { Injectable } from '@angular/core';
import { Shoedetails } from './Shoedetails';
@Injectable({
  providedIn: 'root'
})
export class SShoeinfoService {
  protected ShoedetailList:Shoedetails[] = [
    {
      id: 0,
      model: 'AirJordan 3 Fear',
      make: 'Nike',
      Year: '2023',
      photo: `../assets/images/AirJordan3Fear.png`,
      availableUnits: 4,
      used: true,
      resale: true
    },
    {
      id: 1,
      model: 'Air Jordan 1 high University Blue',
      make: 'Nike',
      Year: '2018',
      photo: `../assets/images/AirJordan1highUniversityBlue.jpg`,
      availableUnits: 2,
      used: true,
      resale: true
    },
    {
      id: 2,
      model: 'Air Jordan1 low TravisScott Fragment',
      make: 'Nike',
      Year: '2019',
      photo: `../assets/images/AirJordan1lowTravisScottFragment.jpg`,
      availableUnits: 2,
      used: true,
      resale: true
    },
    {
      id: 3,
      model: 'Air Jordan 3 white Cement',
      make: 'Nike',
      Year: '2020',
      photo: `../assets/images/AirJordan3whiteCement.jpg`,
      availableUnits: 6,
      used: false,
      resale: true
    },
    {
      id: 4,
      model: 'Air Jordan 4 Military Black',
      make: 'Nike',
      Year: '2017',
      photo: `../assets/images/AirJordan4MilitaryBlack.png`,
      availableUnits: 8,
      used: true,
      resale: true
    },
    {
      id: 5,
      model: 'NewBalance 9060',
      make: 'NewBalance',
      Year: '2022',
      photo: `../assets/images/NewBalance9060.png`,
      availableUnits: 10,
      used: true,
      resale: true
    },
    {
      id: 6,
      model: 'SB Dunk Travis Scott',
      make: 'Nike',
      Year: '2017',
      photo: `../assets/images/SBDunkTravisScott.png`,
      availableUnits: 2,
      used: true,
      resale: true
    },
    {
      id: 7,
      model: 'SB low Chicago 1',
      make: 'Nike',
      Year: '2021',
      photo: `../assets/images/SBlowChicago1.png`,
      availableUnits: 5,
      used: true,
      resale: true
    },
    {
      id: 8,
      model: 'SB X Jordan 4 PineGreen',
      make: 'Nike',
      Year: '2015',
      photo: `../assets/images/SBXJordan4PineGreen.png`,
      availableUnits: 2,
      used: true,
      resale: true
    },
    {
      id: 9,
      model: 'Yeezy 500',
      make: 'Adidas',
      Year: '2004',
      photo: `../assets/images/Yeezy500.png`,
      availableUnits: 3,
      used: true,
      resale: true
    }
  ];
  constructor() { }

  getAllShoeDetails():Shoedetails[]{
    return this.ShoedetailList;
  }
  getShoeinformationById(id:Number) : Shoedetails | undefined{
    return this.ShoedetailList.find(Shoedetails=>Shoedetails.id === id);
  }
}
