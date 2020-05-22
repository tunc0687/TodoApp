import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    user = 'Duygu';
    items = [
        {description: "Spor", action: false},
        {description: "Kitap Okumak", action: false},
        {description: "Araştırma yapmak", action: false},
        {description: "Dil Öğrenmek", action: false},
    ];
}
