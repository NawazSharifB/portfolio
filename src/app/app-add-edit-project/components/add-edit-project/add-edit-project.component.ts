import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageUploadModel } from '../../models/image-upload.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-add-edit-project',
  templateUrl: './add-edit-project.component.html',
  styleUrls: ['./add-edit-project.component.scss']
})
export class AddEditProjectComponent implements OnInit {

  projectForm: FormGroup;
  imageInputForm: FormGroup;

  projectImages: ImageUploadModel[] = [];


  constructor(
    private fb: FormBuilder,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.createImageInputform();
  }

  createForm(): void {
    this.projectForm = this.fb.group({
      title: [null, [Validators.required]],
      id: [null, [Validators.required]],
      links: this.fb.group({
        livePreview: [null],
        github: [null]
      }),
      images: [[], [Validators.required]],
      actionAvailable: [false],
      tools: [null, [Validators.required]],
      details: [null, [Validators.required]]
    });
  }

  createImageInputform(): void {
    this.imageInputForm = this.fb.group({
      url: [],
      fileName: []
    });
  }

  get imageUrl(): AbstractControl {
    return this.imageInputForm.get('url');
  }
  get imageFileName(): AbstractControl {
    return this.imageInputForm.get('fileName');
  }

  uploadImage(event): void {
    console.log('upload image', event);
    const img = event.target.files[0];
    console.log(img.type);

    if (img.type === 'image/jpg' ||
        img.type === 'image/jpeg' ||
        img.type === 'image/JPG' ||
        img.type === 'image/JPEG' ||
        img.type === 'image/PNG' ||
        img.type === 'image/png' &&
        img.size <= 5242880) {

        const formDate = new FormData();
        formDate.set('image', img);

        this.adminService.uploadImage(formDate)
          .subscribe((uploadData: ImageUploadModel) => {
              console.log(uploadData);
              this.imageInputForm.get('url').setValue(uploadData.url);
              this.imageInputForm.get('fileName').setValue(uploadData.fileName);
              this.projectImages.push(uploadData);
          }, error => {
            console.log(error);
            alert('Image Upload Error');
          });

    } else {
      alert('file type problem');
    }

  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.projectImages, event.previousIndex, event.currentIndex);
  }

  updatePorjectImages(): void {
    this.projectForm.get('images').setValue(this.projectImages);
  }


  submit(): void {
    if (this.projectForm.invalid) {
      alert('Fill Up the Form Properly');
      return;
    }
    const project = this.projectForm.value;
    console.log(project);

    this.adminService.addProject(project)
      .subscribe( data => {
        console.log(data);
        alert('successful');
      });
  }

}
