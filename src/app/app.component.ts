import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  product: icon[] = [
    {
      text: 'Dashboard',
      icon: 'home',
    },
    { text: 'Custermers', icon: 'person' },
    { text: 'Solutions', icon: 'school' },
    { text: 'Settings', icon: 'settings' },
  ];
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
originally bred for hunting.`;
}
interface icon {
  text: string;
  icon: string;
}
