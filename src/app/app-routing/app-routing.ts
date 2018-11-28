import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModSliceComponent } from '../mod-slice/mod-slice.component';

const routes: Routes = [
    {
        path: '',
        component: ModSliceComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
