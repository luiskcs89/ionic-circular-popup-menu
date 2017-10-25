import { Directive, ElementRef, Input, Renderer } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { CircularMenuPage } from './circular-menu/circular-menu';
import { ButtonDetails } from './model/button-details';

@Directive({
 selector: '[circular-popup-menu]',
 inputs: ['buttonDetails'],
 host: {
    '(click)': 'onClick()'
 }
})
export class CircularPopupMenuDirective {

    constructor(public modalCtrl: ModalController, public el: ElementRef, public renderer: Renderer) {}

    @Input() buttonDetails: ButtonDetails[];

    onClick() {
        this.presentCicularMenuModal();
    }

    presentCicularMenuModal() {
        const circularMenuModal = this.modalCtrl.create(CircularMenuPage, { buttonDetails: this.buttonDetails });
        circularMenuModal.present();
    }
}