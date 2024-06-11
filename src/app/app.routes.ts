import { Routes } from '@angular/router';
import { FormComponent } from './component/form/form.component';
import { ListComponent } from './component/list/list.component';
import { EditComponent } from './component/edit/edit.component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    title: 'Home page',
  },
  {
    path: 'form',
    component: FormComponent,
    title: 'add group',
  },
  {
    path: 'edit/:groupId',
    component: EditComponent,
    title: 'edit group',
  },
];
