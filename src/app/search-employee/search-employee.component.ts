import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {
  emp_code=""

  searchData:any=[]

  constructor(private api:ApiService){}

  readValue=()=>{
    let data:any={"emp_code":this.emp_code}
    console.log(data);
    this.api.searchEmployee(data).subscribe(
      (response:any)=>{
        console.log(response);
        if (response.length == 0) {
          alert("invalid employee code")
          
        } else {
          this.searchData=response
          
        }

      }
    )
  }

}
