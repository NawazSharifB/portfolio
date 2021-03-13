import { NotificationService } from './../../services/notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
  }

  dataCopied(message: string): void {
    this.notificationService.openSnackBar(message);
  }

}
