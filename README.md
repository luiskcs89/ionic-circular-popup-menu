# Ionic-Circular-Popup-Menu directive (Ionic 2)

Ionic-Circular-Popup-Menu directive (Ionic 2)
Ionic directive that opens a menu with fabs arranged in a circular fashion

# Demo

https://luiskcs89.github.io/ionic-circular-popup-menu/demo/

# Usage

Install: `npm install ionic-circular-popup-menu --save`

Import the ionic-circular-popup-menu module:

```
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app/app.component';
import { CircularPopupMenuModule } from "ionic-circular-popup-menu";


@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        CircularPopupMenuModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ]
})
export class AppModule {}
```

Add the directive to a tag of the page, like a button

```
<button ion-button circular-popup-menu [buttonDetails]="this.buttons">Open Menu</button>
```

Add the button details on your page component

```
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
```

# Note

This menu only accepts 1 to 12 elements, anyway it doesn't fit more than 12 buttons


# Options for ButtonDetails

* label    
Label to show under the button.
* color    
Color value for the fab button.
* onclick    
Callback to run when the button is pressed.