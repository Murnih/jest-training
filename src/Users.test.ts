
import { isObjectLiteralElement } from "typescript";
import {getEmployee_age, getId} from "./logic/UsersEmployee";

it('returns the title of the first album', async () => {
  const response = await getId(); //kenapa menggunakan await? karena methodenya menggunakan async.
  console.log("RESULT :", response.data.data)

  //response.data.data.reduce(); for find average age data employee
  const total = response.data.data.reduce((sum: any, current: any): any => sum + current.employee_age, 0);
  console.log('cari total list === ' + total);
  
  let average = total / response.data.data.length;
  console.log('cari AVERAGE list === ' + average);

  //this function for find empty data profile image
  let count=0;
  response.data.data.forEach((element:any) => {
    if(element.profile_image == ""){
      count++
    }
  });

  console.log("kaka hasilya: ",count)
  
  return average;
});





