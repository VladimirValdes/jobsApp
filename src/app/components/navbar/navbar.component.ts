import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  check: boolean;

  constructor( private darkMode: DarkModeService) {
    this.check = this.darkMode.getActive();
    this.siwtchActive( this.check );
  }

  ngOnInit(): void {
  }

  siwtchActive( active: boolean ): void {
    this.darkMode.addDarkMode( active );
  }

}
