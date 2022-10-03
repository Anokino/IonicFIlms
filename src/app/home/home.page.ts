import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { NavigationExtras} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lstfilms:any;
  constructor(private router: Router) {
    fetch('assets/json/films.json').then(res => res.json())
    .then(json => {
      this.lstfilms = json;
    }
    );
  }

  affDetail(film){
    console.log(film);
    //ouvrir page detail
    //envoyer le param à la page detail
    let navExtras: NavigationExtras = {
      state: {
        film:film
      }
    };
    this.router.navigate(['/detail'], navExtras);


  }

}
