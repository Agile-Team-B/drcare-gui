import { Component, OnInit } from '@angular/core';
import { GeneralPractitionerService } from './general-practitioner.service';

@Component({
  selector: 'app-general-practitioner',
  templateUrl: './general-practitioner.component.html',
  styleUrls: ['./general-practitioner.component.css']
})
export class GeneralPractitionerComponent implements OnInit {

  constructor(public gpService: GeneralPractitionerService) { }
  public gpUser;

  ngOnInit() {
    this.fetchAllGP();
  }


  fetchAllGP() {
      this.gpService.fetchAllGP().subscribe(res => this.gpUser = res);
  }

}
