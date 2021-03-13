import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';


import { InfoModel } from '../../../app-common-shared/models/info.model';
import { DataService } from '../../../app-common-shared/services/data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projectInfo: InfoModel[];

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    AOS.init({
      duration: 700,
      offset: 250
    });

    this.dataService.info.subscribe(data => this.projectInfo = data);
  }

  navigateTo(uid: string): void {
    this.router.navigate(['/project-details', uid]);
  }

}
