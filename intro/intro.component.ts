import { Component } from '@angular/core';

@Component({
    selector: 'intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css']
})
export class IntroComponent{

    txt = '';

    showtext = (event :Event) => {
        this.txt = (<HTMLInputElement>event.target).value;
    }
}