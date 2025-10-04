import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title = 'Nouveau titre';
  url1 =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6pXQTat5xa_jxh8xM2p-AKDEXFPYgRqOI2Q&s';
  url2 =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGakkUEbXyfann4M16v9CV-sTa915cUOdh9g&s';
  url = this.url1;
  changeLogo = () => {
    //console.log("Changing Logo ....")
    this.url = this.url === this.url1 ? this.url2 : this.url1;
  };
}
