import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-colis',
  templateUrl: './colis.component.html',
  styleUrls: ['./colis.component.scss']
})
export class ColisComponent implements OnInit {

  @Input() coli: any;

  constructor() { }

  ngOnInit(): void { }

  setIcon(event: string): string {
    switch (event) {
      case 'Votre courrier/colis a été livré' : return 'check_circle';
      case 'Votre courrier/colis n\'a pas pu être livré' : return 'highlight_off';
      case 'Votre courrier/colis est en cours d\'acheminement.' : return 'flight';
      case 'Votre courrier/colis est arrivé dans le pays de destination' : return 'flight_land';
      case 'Votre courrier/colis a été pris en charge' : return 'local_post_office';
      case 'Votre courrier/colis est en cours de dédouanement' : return 'monetization_on';
      case 'Votre courrier/colis a quitté le pays d\'origine' : return 'flight_takeoff';
    }
  }

}
