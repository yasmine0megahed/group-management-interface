import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; //form
import { Router } from '@angular/router'; //navigate
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  //variables
  groupDescription: string = '';
  groupName: string = '';
  groupId: number = 0;
  storeData: any = {};
  currentDate: any;
  //constructor
  constructor(private router: Router) {}
  // functions
  ngOnInit() {
    this.setCurrentDate();
  }
  //form function and store in local storage
  handleregisterform(registerform: any) {
    // Get the created group id
    // Get the current store data
    const storeData = JSON.parse(localStorage.getItem('storeData') || '{}');
    const lastId = localStorage.getItem('lastId');
    const parsedLastId = lastId ? parseInt(lastId) : 0;
    //increase group id
    const gId = parsedLastId + 1;
    // Push the new item to the storedata object
    storeData[gId] = { ...registerform.value, groupId: gId };
    //store data in local storage
    localStorage.setItem('storeData', JSON.stringify(storeData));
    localStorage.setItem('lastId', gId.toString());

    alert('Added new item successfully');
    //navigate to home page
    this.router.navigate(['/']);
  }
  //create date function
  setCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    this.currentDate = `${day}-${month}-${year}`;
  }
}
