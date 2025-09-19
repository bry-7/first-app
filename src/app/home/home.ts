import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  title = 'Hello World!';
  URL = "https://web.dev/static/explore/angular/cover-wide.svg";
  URL1 = "https://web.dev/static/explore/angular/cover-wide.svg";
  URL2 = "https://onesolutionsweb.com/wp-content/uploads/2022/02/angular-icon-logo-284x300.png.webp";

  changeLog = () => {
    this.URL = (this.URL == this.URL1) ? this.URL2 : this.URL1;
  }
}
