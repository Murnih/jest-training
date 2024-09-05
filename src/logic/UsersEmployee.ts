
import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

export async function getId() {
  return await axios.get('https://dummy.restapiexample.com/api/v1/employees');
}

export async function getEmployee_age(p0: (sum: any, employee_age: any) => any, p1: number, ages: number[]) {
  return await axios.get('https://dummy.restapiexample.com/api/v1/employees');
}



