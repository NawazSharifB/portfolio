import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { InfoModel } from '../models/info.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = [
    {
      title: 'make a type specimen book. It has survived',
      images: [
        'https://i2.wp.com/fancycrave.com/wp-content/uploads/2019/12/Free-Nature-Pictures-min.jpg?fit=730%2C486&quality=99&ssl=1',
        'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
        'https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg'
      ],
      details: ['it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages ', 'and more recently with desktop publishing'],
      links: {
        livePreview: 'http://google.com',
        github: 'http://google.com'
      },
      actionAvailable: true,
      uid: 'string',
      tools: 'string',
      id: 1
    },
    {
      title: 'make a type specimen book. It has survived',
      images: [
        'https://i2.wp.com/fancycrave.com/wp-content/uploads/2019/12/Free-Nature-Pictures-min.jpg?fit=730%2C486&quality=99&ssl=1',
        'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
        'https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg'
      ],
      details: ['it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages ', 'and more recently with desktop publishing'],
      links: {
        livePreview: 'http://google.com',
        github: 'http://google.com'
      },
      actionAvailable: true,
      uid: 'string',
      tools: 'string',
      id: 2
    },
    {
      title: 'make a type specimen book. It has survived',
      images: [
        'https://i2.wp.com/fancycrave.com/wp-content/uploads/2019/12/Free-Nature-Pictures-min.jpg?fit=730%2C486&quality=99&ssl=1',
        'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
        'https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg'
      ],
      details: ['it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages ', 'and more recently with desktop publishing'],
      links: {
        livePreview: 'http://google.com',
        github: 'http://google.com'
      },
      actionAvailable: true,
      uid: 'string',
      tools: 'string',
      id: 3
    },
    {
      title: 'make a type specimen book. It has survived',
      images: [
        'https://i2.wp.com/fancycrave.com/wp-content/uploads/2019/12/Free-Nature-Pictures-min.jpg?fit=730%2C486&quality=99&ssl=1',
        'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
        'https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg'
      ],
      details: ['it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages ', 'and more recently with desktop publishing'],
      links: {
        livePreview: 'http://google.com',
        github: 'http://google.com'
      },
      actionAvailable: true,
      uid: 'string',
      tools: 'string',
      id: 4
    },
    {
      title: 'make a type specimen book. It has survived',
      images: [
        'https://i2.wp.com/fancycrave.com/wp-content/uploads/2019/12/Free-Nature-Pictures-min.jpg?fit=730%2C486&quality=99&ssl=1',
        'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
        'https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg'
      ],
      details: ['it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages ', 'and more recently with desktop publishing'],
      links: {
        livePreview: 'http://google.com',
        github: 'http://google.com'
      },
      actionAvailable: true,
      uid: 'string',
      tools: 'string',
      id: 5
    },
    {
      title: 'make a type specimen book. It has survived',
      images: [
        'https://i2.wp.com/fancycrave.com/wp-content/uploads/2019/12/Free-Nature-Pictures-min.jpg?fit=730%2C486&quality=99&ssl=1',
        'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
        'https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg'
      ],
      details: ['it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages ', 'and more recently with desktop publishing'],
      links: {
        livePreview: 'http://google.com',
        github: 'http://google.com'
      },
      actionAvailable: true,
      uid: 'string',
      tools: 'string',
      id: 6
    },
    {
      title: 'make a type specimen book. It has survived',
      images: [
        'https://i2.wp.com/fancycrave.com/wp-content/uploads/2019/12/Free-Nature-Pictures-min.jpg?fit=730%2C486&quality=99&ssl=1',
        'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
        'https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg'
      ],
      details: ['it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages ', 'and more recently with desktop publishing'],
      links: {
        livePreview: 'http://google.com',
        github: 'http://google.com'
      },
      actionAvailable: true,
      uid: 'string',
      tools: 'string',
      id: 7
    },
    {
      title: 'make a type specimen book. It has survived',
      images: [
        'https://i2.wp.com/fancycrave.com/wp-content/uploads/2019/12/Free-Nature-Pictures-min.jpg?fit=730%2C486&quality=99&ssl=1',
        'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg',
        'https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg'
      ],
      details: ['it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages ', 'and more recently with desktop publishing'],
      links: {
        livePreview: 'http://google.com',
        github: 'http://google.com'
      },
      actionAvailable: true,
      uid: 'string',
      tools: 'string',
      id: 8
    },
  ];

  // info = new BehaviorSubject<InfoModel[]>(this.data);
  info = new BehaviorSubject<InfoModel[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  getAllData(): Observable<any> {
    return this.http.get(`${environment.url}/get-all-project`);
  }

  getSingleProject(uid: string): Observable<any> {
    return this.http.get(`${environment.url}/get-single-project/${uid}`);
  }




}
