import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ButtonDetails } from 'ionic-circular-popup-menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  buttons: ButtonDetails[];

  constructor() { 
    this.buttons = [
      {label: "Add", icon: "add", color: "primary", onclick: function() {console.log("Add")}},
      {label: "Close", icon: "close", color: "primary", onclick: function() {console.log("Close")}},
      {label: "Approve", icon: "checkmark", color: "primary", onclick: function() {console.log("Approve")}},
      {label: "Upload", icon: "cloud-upload", color: "primary", onclick: function() {console.log("Upload")}},
      {label: "Download", icon: "cloud-download", color: "primary", onclick: function() {console.log("Download")}},
      {label: "Flag", icon: "flag", color: "primary", onclick: function() {console.log("Flag")}}
    ]
  }

}
