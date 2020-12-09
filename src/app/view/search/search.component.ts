import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

import { ColisService } from '../../service/colis.service';
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

    this.loading = this.storeService.getStoreLoading();

    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {

        var param = this.route.snapshot.paramMap.get('id');

        if(param) {
          this.showColis = true;
          this.colisService.getColis(param).subscribe(colis => {
            this.storeService.setStoreLoading(false);
            this.loading = this.storeService.getStoreLoading();
            this.colis = colis;
            this.textInput = '';
          });
        } else {
          this.storeService.setStoreLoading(false);
          this.loading = this.storeService.getStoreLoading();
          this.showColis = false;
        }

      }

    });
  }

  ngOnInit(): void {
  }

  search(value) {
    this.storeService.setStoreLoading(true);
    this.loading = this.storeService.getStoreLoading();
    this.router.navigate(['../search/', value]);
  }

}
