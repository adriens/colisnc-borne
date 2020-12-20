import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

import { ColisService } from '../../service/colis.service';
import { Colis } from '../../model/colis.model';

import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  elementType = 'url';
  val = '';

  title = 'colisnc-borne';

  textInput = '';

  loading: boolean;

  colis = [];
  showColis: boolean;

  qrCode: string = null;
  scan: boolean;

  exampleForm = new FormGroup({
    requiredInput: new FormControl('', [Validators.email]),
    disabledInput: new FormControl({value: 'Value from formcontrol', disabled: true}),
    textInput: new FormControl(''),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private colisService: ColisService,
    private storeService: LocalStorageService,
  ) {

    // initialisation des état des variables
    this.loading = this.storeService.getStoreLoading();
    this.scan = this.storeService.getStoreScan();
    this.qrCode = this.storeService.getStoreQrCode();

    // router events
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {

        // récupération du paramètre de l'url (itemId)
        var param = this.route.snapshot.paramMap.get('id');

        if(param) {

          this.colisService.getColis(param).subscribe(colis => {

            // arrêt du chargement
            this.storeService.setStoreLoading(false);
            this.loading = this.storeService.getStoreLoading();

            // récupération de tous les résultats du colis
            var allColis = colis;

            if(colis.length != 0) {

              // instanciation de la première et dernière étape du colis
              // instanciation d'un colis vide pour combler les étapes non affichées
              var first = new Colis(allColis[0]['itemId'], allColis[0]['typeEvenement'], allColis[0]['localisation'], allColis[0]['pays'], allColis[0]['date']);
              var second = new Colis(allColis[0]['itemId'], '...', '', '', '');
              var third = new Colis(allColis[allColis.length-1]['itemId'], allColis[allColis.length-1]['typeEvenement'], allColis[allColis.length-1]['localisation'], allColis[allColis.length-1]['pays'], allColis[allColis.length-1]['date']);

              // création d'un tableau de colis temporaire et ajout des colis dans celui-ci
              var tmpColis = [];
              tmpColis.push(first);
              tmpColis.push(second);
              tmpColis.push(third);

              // ajout du tableau temporaire aux résultats
              this.colis = tmpColis;
              // remise à zéro du tableau temporaire
              tmpColis = [];

              // affichage des résultats
              this.showColis = true;

              // mise à jour du qrCode avec l'itemId du colis
              this.storeService.setStoreQrCode(param);
              this.qrCode = this.storeService.getStoreQrCode();

            } else {
              // mise à vide du tableau de colis (aucun recherche effectuée)
              this.colis = [];
              // remise à zéro de la barre de recherche
              this.textInput = '';
              // affichage des résultats
              this.showColis = true;
            }

          });

        } else {

          // qrCode est une chaîne vide. (condition d'affichage du qrCode)
          this.storeService.setStoreQrCode('');
          this.qrCode = this.storeService.getStoreQrCode();
          // arrêt du chargement
          this.storeService.setStoreLoading(false);
          this.loading = this.storeService.getStoreLoading();
          // désactiver l'affichage des résultats
          this.showColis = false;
        }

      }

    });
  }

  ngOnInit(): void { }

  search(value) {
    // début du chargement
    this.storeService.setStoreLoading(true);
    this.loading = this.storeService.getStoreLoading();
    // arrêt de l'affichage du scan de qrCode
    this.storeService.setStoreScan(false);
    this.scan = this.storeService.getStoreScan();
    // mise à chaîne vide du qrCode
    this.storeService.setStoreQrCode('');
    this.qrCode = this.storeService.getStoreQrCode();
    // naviger vers l'écran des résultats du colis
    this.router.navigate(['../search/', value]);
  }

  scanSuccessHandler(e) {
    // rechercher un qrCode lorsque celui à été lu
    this.search(e);
  }

  readQrcode() {
    // toggle de l'affichage du scan de qrCode
    this.storeService.setStoreScan(!this.scan);
    this.scan = this.storeService.getStoreScan();
    // toggle de l'affichage des résultats du colis
    if(this.scan) this.showColis = false;
    else this.showColis = true;
  }

}
