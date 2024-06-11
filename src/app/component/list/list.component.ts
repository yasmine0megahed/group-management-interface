import { Component } from '@angular/core';
import { Router } from '@angular/router'; //navigate
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  //variable
  storeData: { [key: string]: any } = {};
  //constructor
  constructor(private router: Router) {}
  //functions
  ngOnInit() {
    this.showData();
  }
  //get data from local strorage
  showData() {
    if (typeof localStorage != 'undefined') {
      const storedDataString = localStorage.getItem('storeData');
      this.storeData = storedDataString ? JSON.parse(storedDataString) : {};
    }
  }
  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  //edit group function
  editGroup(groupId: number) {
    this.router.navigate(['/edit', groupId]);
  }
  //delete group function
  deleteGroup(groupId: number) {
    delete this.storeData[groupId];
    localStorage.setItem('storeData', JSON.stringify(this.storeData));
  }
}
