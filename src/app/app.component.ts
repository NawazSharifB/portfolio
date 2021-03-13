import { Router } from '@angular/router';
import { DataService } from './app-common-shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  private mediaSub: Subscription;
  loading = false;

  constructor(
    private mediaObserver: MediaObserver,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.mediaSub = this.mediaObserver.asObservable().subscribe( (change: MediaChange[]) => {
      console.log(change[0].mqAlias);
    });

    this.dataService.getAllData()
      .subscribe(data => {
        console.log(data);
        this.dataService.info.next(data);
        this.loading = false;
      }, error => {
        this.loading = false;
        alert('Something Went Wrong');
        this.router.navigate(['/server-error']);
      });
  }



}
