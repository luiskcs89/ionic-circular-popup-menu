import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CircularPopupMenuDirective } from './circular-popup-menu.directive';
import { CircularMenuPage } from './circular-menu/circular-menu';

@NgModule({
    declarations: [
        CircularPopupMenuDirective,
        CircularMenuPage
    ],
    imports: [
		IonicModule
	],
	entryComponents: [
		CircularMenuPage
	],
    exports: [
        CircularPopupMenuDirective
    ]
})
export class CircularPopupMenuModule{}