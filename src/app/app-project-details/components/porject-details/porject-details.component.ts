import { InfoModel } from './../../../app-common-shared/models/info.model';
import { DataService } from './../../../app-common-shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, of } from 'rxjs';
import { switchMap, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-porject-details',
  templateUrl: './porject-details.component.html',
  styleUrls: ['./porject-details.component.scss']
})
export class PorjectDetailsComponent implements OnInit {

  project: InfoModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  // ngOnInit(): void {
  //   combineLatest([
  //     this.route.paramMap,
  //     this.dataService.info
  //   ]).pipe(
  //     switchMap(value => {
  //       const projects = value[1];
  //       if (projects.length) {
  //         console.log('project length already exists');
  //         return combineLatest([
  //           this.route.paramMap,
  //           this.dataService.info
  //         ]);
  //       } else {
  //         console.log('no project length');
  //         const uid = value[0].get('id');
  //         return combineLatest([
  //           this.route.paramMap,
  //           this.dataService.getSingleProject(uid)
  //         ]);
  //       }
  //     }),
  //     take(1),
  //   ).subscribe(data => {
  //     const param = data[0];
  //     const info = data[1];
  //     const id = param.get('id');
  //     if (id) {
  //       // console.log(id);
  //       console.log('info', info);
  //       const project = info.filter(p => p.uid === id);
  //       if (project.length) {
  //         this.project = project[0];
  //       } else if (info.length) {
  //         // console.log('project doesnt exist', project);
  //         this.router.navigate(['/not-found']);
  //       }
  //     } else {
  //       // this.router.navigate(['/not-found']);
  //     }
  //   }, error => {
  //     console.log('from error');
  //     console.log(error);
  //   });

    
  // }

  ngOnInit(): void {
    combineLatest([
      this.route.paramMap,
      this.dataService.info
    ]).subscribe(data => {
      const param = data[0];
      const info = data[1];
      const id = param.get('id');
      if (id) {
        // console.log(id);
        const project = info.filter(p => p.uid === id);
        if (project.length) {
          this.project = project[0];
        } else if (info.length) {
          // console.log('project doesnt exist', project);
          this.router.navigate(['/not-found']);
        }
      } else {
        this.router.navigate(['/not-found']);
      }
    });
  }


  goToLink(url: string): void {
    window.open(url, '_blank');
  }

}
