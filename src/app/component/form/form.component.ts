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
  groupId: any = 1;
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
    
    const gId = registerform.value.groupId;
    console.log('id', gId);
    this.groupId++;
    // const newItem = registerform.value;
    const newItem = { ...registerform.value };
    console.log('newitem', newItem);
    // Push the new item to the storedata object
    this.storeData[gId] = newItem;
    console.log('stotrrr', this.storeData);
    localStorage.setItem('storeData', JSON.stringify(this.storeData));
    alert('added');
    // this.router.navigate(['/']);
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
