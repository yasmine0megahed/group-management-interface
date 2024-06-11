import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  //data from url
import { Router } from '@angular/router'; //navigate
import { FormsModule } from '@angular/forms'; //form
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  //variable
  groupId:any;
  storeData: any;
  details:any;
  //constructor
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}
//functions
ngOnInit(): void {
    this.groupId = this.activatedRoute.snapshot.params['groupId']; //data from url
    this.showData();
    }
//get data from local strorage
showData() {
  const storedDataString = localStorage?.getItem('storeData');
  this.storeData = storedDataString ? JSON.parse(storedDataString) : {};
  this.details = this.storeData[this.groupId];

}
  //form function and store in local storage
  handleregisterform(registerform: any) {
    const gId = registerform.value.groupId;
    console.log('id', gId);
    this.groupId++;
    const newItem = registerform.value;
    console.log('newitem', newItem);
    // Push the new item to the storedata object
    this.storeData[gId] = newItem;
    console.log('stotrrr', this.storeData);
    localStorage.setItem('storeData', JSON.stringify(this.storeData));
    alert('updated succesufully');
    this.router.navigate(['/']);
  }


}
