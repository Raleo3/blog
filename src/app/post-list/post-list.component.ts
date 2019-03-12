import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../shared/models/post.interface';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostListComponent {
  @Input() posts: Array<Post>;

  constructor(
    private router: Router
  ) { }

  readPost(post: Post) {
    this.router.navigate([`/posts/${post.id}`]);
  }

  createPost() {
    this.router.navigate(['/posts/create']);
  }
}
