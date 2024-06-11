import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //data from url
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
  groupId: any;
  storeData: any;
  details: any;

  //constructor
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  //functions
  ngOnInit(): void {
    this.groupId = this.activatedRoute.snapshot.params['groupId']; //data from url
    console.log('id', this.groupId);
    this.showData();
  }

  //get data from local strorage
  showData() {
    const storedDataString = localStorage?.getItem('storeData');
    this.storeData = storedDataString ? JSON.parse(storedDataString) : {};
    //get selected group
    this.details = this.storeData[this.groupId];
  }

  //form function and store in local storage
  handleregisterform(registerform: any) {
    const updatedValue = registerform.value;
    updatedValue.groupDate = this.storeData[this.groupId].groupDate;
    updatedValue.groupId = this.groupId;
    this.storeData[this.groupId] = updatedValue;
    localStorage.setItem('storeData', JSON.stringify(this.storeData));
    alert('Updated item successfully');
    //navigate to home page
    this.router.navigate(['/']);
  }
}
