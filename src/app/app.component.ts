import {Component, AfterViewInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';

import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

import { ColisService } from './service/colis.service';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  title = 'colisnc-borne';

  textInput = '';

  loading: boolean = false;

  colis = [];
  showColis: boolean = false;

  exampleForm = new FormGroup({
    requiredInput: new FormControl('', [Validators.email]),
    disabledInput: new FormControl({value: 'Value from formcontrol', disabled: true}),
    textInput: new FormControl(''),
  });

  constructor(private router: Router, private colisService: ColisService) { }

  search(value) {
    this.loading = true;
    this.textInput = value;
    this.colisService.getColis(this.textInput).subscribe(colis => {
      this.colis = colis;
      this.showColis = true;
      this.loading = false;
    });
  }

}
