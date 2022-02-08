import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsServices } from '../posts.service';

@Component({
  selector: 'post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {

  constructor(
    public postServices: PostsServices,
  ) { }

  postData = (form: NgForm) => {
    if (form.invalid) {
      return;
    }
    this.postServices.addPostsMethode(form.value.title, form.value.content);
    form.resetForm();
  }

}
