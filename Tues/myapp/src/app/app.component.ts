import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  counter = 0;

  data = [];
  test() {
    this.counter += 1;
  }

  constructor(public httpClient: HttpClient){
    this.httpClient.get('./../assets/test.json').subscribe((res: any) => {console.log('res = ',res); this.data = res;});
  }

  getAPIID(){
    // const url=`https://ntcustwebapi.azurewebsites.net/api/Item`
    const url=`https://shermanshentestapi1.azurewebsites.net/#/buyer/items`
    this.httpClient.get(`${url}/`).subscribe((res)=>{
      console.log(`接到資料`,res)
    })
  }

  getAPIpost(item){
    console.log(item)
    // const url = `https://ntcustwebapi.azurewebsites.net/api/Item/${item.id}`;
    const url = `https://shermanshentestapi1.azurewebsites.net/#/buyer/items/${item.id}`;
    item.barcode = 'nutc';
    this.httpClient.put(url, item).subscribe((res) =>{
      console.log(`修改資料`)
    });
}
}
