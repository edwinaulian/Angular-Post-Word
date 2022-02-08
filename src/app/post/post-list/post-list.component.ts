import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostData } from '../models/post-models';
import { PostsServices } from '../posts.service';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {
  posts: PostData[] = [];
  private postSub: Subscription;

  constructor(
    public postServices: PostsServices,
  ) { }

  ngOnInit() {
    this.posts = this.postServices.getPosts();
    this.postSub = this.postServices.getPostUpdatedListenner().subscribe((post: PostData[]) => {
      this.posts = post;
    });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

  onEdit() {

  }

  onDelete() {
    
  }

}
