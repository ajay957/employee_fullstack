import { Component } from '@angular/core';

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

  readValue=()=>{
    let data:any={"emp_code":this.emp_code,"emp_name":this.emp_name,"designation":this.designation,"salary":this.salary,"com_name":this.com_name,"mob_no":this.mob_no,"username":this.username,"password":this.password}
    console.log(data)
  }

}
