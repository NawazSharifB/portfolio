import { Router } from '@angular/router';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  items: MenuItem[] = [
    {label: 'Portfolio', routerLink: '/portfolio'},
    {label: 'about', routerLink: '/about'},
    {label: 'GitHub', url: 'https://github.com/NawazSharifB', target: '_blank'},
  ];

  ngOnInit(): void {
  }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }

  goToGithub(): void {
    window.open('https://github.com/NawazSharifB', '_blank');
  }


}
