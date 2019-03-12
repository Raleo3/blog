import { Component, OnInit } from '@angular/core';

import { PostsService } from '../services/posts.service';
import { Post } from '../shared/models/post.interface';


@Component({
  selector: 'app-blog-roll',
  templateUrl: './blog-roll.component.html',
  styleUrls: ['./blog-roll.component.scss']
})
export class BlogRollComponent implements OnInit {
  public posts: Array<Post> = [];

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.fetchPosts();

    this.postsService.refreshPostsSubject.subscribe({
          next: (keyboardEnabled) => {
              this.fetchPosts();
          }
      });
  }

  fetchPosts() {
    this.postsService.getPosts().subscribe(
      (posts: Array<Post>) => this.posts = posts,
      (err: any) => console.log('error fetching posts', err)
    );
  }
}
