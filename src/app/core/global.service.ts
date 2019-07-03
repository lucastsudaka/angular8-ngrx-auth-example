import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public  env = environment;
  constructor() { 
  } 



  getTagData(TAGS, type, item) 
  {
    if(item) {
      return TAGS[type].find((data)=> {
        return data.name == item;
      });
    }
    else {
      return '';
    }


  }

}
