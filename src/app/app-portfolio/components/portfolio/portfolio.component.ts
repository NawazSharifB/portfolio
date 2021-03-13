import { NotificationService } from './../../../app-common-general/services/notification.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import * as AOS from 'aos';


import { InfoModel } from '../../../app-common-shared/models/info.model';
import { DataService } from '../../../app-common-shared/services/data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projectsInfo: InfoModel[] = [];
  dataExistsInSubject = false;

  constructor(
    private dataService: DataService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    AOS.init({
      duration: 700,
      offset: 250
    });

    this.dataService.info.pipe(
      switchMap(data => {
        if (data.length) {
          this.dataExistsInSubject = true;
          this.notificationService.showLoader.next(false);
          console.log('project is already in subject');
          return of(data);
        } else {
          console.log('no project in subject');
          this.notificationService.showLoader.next(true);
          this.dataExistsInSubject = false;
          return this.dataService.getAllData();
        }
      }),
      map(projects => {
        if (!this.dataExistsInSubject) {
          this.dataService.info.next(projects);
        }
        if (projects.length) {
          return projects;
        }
        return null;
      })
    )
    .subscribe( data => {
      this.projectsInfo = data;
    }, error => {
      this.router.navigate(['/server-error']);
    });
  }

  navigateTo(uid: string): void {
    this.router.navigate(['/project-details', uid]);
  }

}
