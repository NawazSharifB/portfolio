import { NotificationService } from './../../../app-common-general/services/notification.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../app-common-shared/services/data.service';
import { InfoModel } from './../../../app-common-shared/models/info.model';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import * as AOS from 'aos';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  numberOfDataToDisplay = 3;
  infoArray: InfoModel[] = [];
  dataExistsInSubject = false;
  profileImage = {
    url: 'https://storage.googleapis.com/protfolio-f1efb.appspot.com/product-image/b44c171a-0335-42d8-b19d-cbf4a6435e4b%7C%7C%7C1615454379010?GoogleAccessId=firebase-adminsdk-d2kce%40protfolio-f1efb.iam.gserviceaccount.com&Expires=16446996000&Signature=HtlDK6lhFougryx%2B1ogeL2x%2Fgth3R0PhpOecRVZ3%2FIeyLgm5qz8meZxZoPWSKia4CsbT%2BmRIZuwliMLhol1lCoaioi9Z5qFaIdF9dKLmxGr37Se%2B5wwKQSiKaIztqnz3sEHUUgwBnvEkZzvqc5RUKQeAQd6igLqvCPItzZo9Fh0dccF9phW2LCMrMUbgY6cR0JUIoq44AuELrSfUkqsmjHfLzANKfEbgY7B2vVCUbwntlEQaXwow2RqV0SWViL87szvnyowTzN5FY2x98zkvzHJx7Gi1TSfxPqQAbiEetZGKa45V%2FbYyG4lcB%2F8%2FNW8XwMEJM%2F1i3psQjVNfJjF0YA%3D%3D',
    fileName: 'product-image/b44c171a-0335-42d8-b19d-cbf4a6435e4b|||1615454379010'
  };



// img = [
//   'https://i2.wp.com/fancycrave.com/wp-content/uploads/2019/12/Free-Nature-Pictures-min.jpg?fit=730%2C486&quality=99&ssl=1',
//   'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
//   'https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg'
// ];

  constructor(
    private dataService: DataService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    AOS.init({
      duration: 600,
      offset: 200
    });
    this.dataService.info.pipe(
      switchMap(data => {
        if (data.length) {
          console.log('project is already in subject');
          this.dataExistsInSubject = true;
          this.notificationService.showLoader.next(false);
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
          projects.sort((a, b) => b.id - a.id);
          return projects.slice(0, this.numberOfDataToDisplay);
        }
        return null;
      })
    )
    .subscribe( data => {
      this.infoArray = data;
    }, error => {
      this.router.navigate(['/server-error']);
    });
  }

  goToLink(url: string): void {
    window.open(url, '_blank');
  }

  navigateTo(uid: string): void {
    this.router.navigate(['/project-details', uid]);
  }

}
