import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PostsService } from '../services/posts.service';
import { Post } from '../shared/models/post.interface';


@Component({
  selector: 'app-post-read',
  templateUrl: './post-read.component.html',
  styleUrls: ['./post-read.component.scss']
})
export class PostReadComponent implements OnInit {
  @Input() post: Post;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit() {
  if (!this.post) {
    this.route.params.subscribe(
      (params: {postId: number}) => {
        if (params.postId) {
          this.postsService.getPost(params.postId).subscribe(post => {
              this.post = post;
          });
        }
      },
      (err: any) => console.log('route param error', err)
    );
  }
 }

  editPost(id: number) {
    this.router.navigate([`posts/${id}/edit`]);
  }

  deletePost(id: number) {
    this.postsService.deletePost(id).subscribe(
      (data: any) => this.refreshContent(),
      (err: any) => {
        if (err.status === 200) {
          this.refreshContent();
        } else {
          console.log('err during deletion', err);
        }
      }
    );
  }

  refreshContent() {
    this.postsService.refreshPostsSubject.next(true);
    this.router.navigate([`posts`]);
  }
}
