import { NotificationService } from './../../../app-common-general/services/notification.service';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  image = {
    // url: 'https://d3tv8y14ogpztx.cloudfront.net/pulses/images/000/033/217/show_box/canali-ss16-adv1-blue-elegant-suit.jpg',
    url: 'https://storage.googleapis.com/protfolio-f1efb.appspot.com/product-image/9fcf1310-1a8f-476b-a4dd-f65495c64406%7C%7C%7C1615454472214?GoogleAccessId=firebase-adminsdk-d2kce%40protfolio-f1efb.iam.gserviceaccount.com&Expires=16446996000&Signature=dMCHPd0UrJk5cqXfLlcN2CBvU0M45YTUz9YseyXLNtSROaD3QS48H8LMng%2FFwZfl12wPIXnaCkP9BGQ7YotzpF6uhSfimQ5Q7j6ZEk6XfWZIWrvHk76FnzbbxfHn6O83iW2OP1kBsDiQYahQsL%2BIk3Y3mAVZJJA%2FEO6VhZlTwo8I7FfizkMBRWLn7IgSZY3I7a4AF48hodnF2OROPhQoCt4ghpqYH6yXSjFCyhwAl5jfkmobK%2B%2FFT4atESGDhspfcnfxv%2BgRzC%2FGELh0of0f8fVWKJEazGxvYc4Viw4RenjcuJ5udjk%2Bql3TYCtlwjFcp4K3gYOfUrfdE5T9UY%2B3ZA%3D%3D',
    fileName: 'product-image/9fcf1310-1a8f-476b-a4dd-f65495c64406|||1615454472214'
  };

  personalInformation = {
    name: 'Md Nawaz Sharif',
    email: 'naw.srif@gmail.com',
    phone: '+880 17 18 88 29 27',
    nationality: 'Bangladeshi',
    skills: [
      {name: 'Angular', year: 2},
      {name: 'Typescript', year: 2},
      {name: 'Javascript', year: 3},
      {name: 'Node.js (Express)', year: 2},
      {name: 'HTML', year: 5},
      {name: 'CSS', year: 5},
      {name: 'Bootstrap', year: 4},
      {name: 'jQuery', year: 3},
      {name: 'SCSS', year: 3},
      {name: 'No SQL', year: 2},
      {name: 'SQL', year: 1},
      {name: 'Php', year: 1},
      {name: 'Ruby on Rails', year: 1},
    ],
    otherSkills: [
      {skill: 'Office Application', tools: ['Microsoft Office Application']},
      {skill: 'Version Control', tools: ['Git', 'GitHub']},
      {skill: 'Tools', tools: ['Adobe Photoshop', 'Adobe Illustrator']},
    ],
    details: `it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing,
    it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing,
    it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing`
  };

  constructor(
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    AOS.init({
      duration: 700
    });
  }

  dataCopied(message: string): void {
    this.notificationService.openSnackBar(message);
  }

}
