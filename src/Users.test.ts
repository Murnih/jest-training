
import { getEmployee_age, getId } from "./logic/UsersEmployee";

it('returns the title of the first album', async () => {
  const response = await getId(); //kenapa menggunakan await? karena methodenya menggunakan async.
  console.log("RESULT :", response.data.data)

  //response.data.data.reduce();
  const total = response.data.data.reduce((sum: any, current: any): any => sum + current.employee_age, 0);
  console.log('cari total list === ' + total);

  
  let average = total / response.data.data.length;
  console.log('cari AVERAGE list === ' + average);

   return average;
});



