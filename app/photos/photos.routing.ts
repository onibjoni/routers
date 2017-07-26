import {Router, RouterModule} from '@angular/router';

import{PhotosComponent} from './photos.component';
import{PhotoDetailsComponent} from './photo-details.component';

//This is a Child so note forChild instead of forRoot
export const photosRouting = RouterModule.forChild([
    {path: 'photos/:id', component: PhotoDetailsComponent},
    {path: 'photos', component: PhotosComponent}
]);