import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  emp_code=""
  emp_name=""
  designation=""
  salary=""
  com_name=""
  mob_no=""
  username=""
  password=""

  constructor(private api:ApiService){}

  readValue=()=>{
    let data:any={"emp_code":this.emp_code,"emp_name":this.emp_name,"designation":this.designation,"salary":this.salary,"com_name":this.com_name,"mob_no":this.mob_no,"username":this.username,"password":this.password}
    console.log(data)
    this.api.addEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success"){
          alert("employee added successfully")
          this.emp_code=""
          this.emp_name=""
          this.designation=""
          this.salary=""
          this.com_name=""
          this.mob_no=""
          this.username=""
          this.password=""
        }
      }
    )
  }

}
