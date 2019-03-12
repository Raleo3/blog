import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PostsService } from '../services/posts.service';
import { Post } from '../shared/models/post.interface';


@Component({
  selector: 'app-post-write',
  templateUrl: './post-write.component.html',
  styleUrls: ['./post-write.component.scss']
})
export class PostWriteComponent implements OnInit {
  public post: Post = {
    title: '',
    text: ''
  };
  public isNewPost = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService
  ) { }

  ngOnInit() {
   this.route.params.subscribe(
     (params: {postId: number}) => {
       if (params.postId) {
         this.isNewPost = false;
         this.postsService.getPost(params.postId).subscribe(
           (post: Post) => this.post = post,
           (err: any) => console.log('err fetching post', err)
         );
       }
     },
     (err: any) => console.log('route param error', err)
   );
  }

  savePost() {
    if (this.isNewPost) {
      this.postsService.createPost(this.post).subscribe(
        (response: any) => this.router.navigate(['/posts']),
        (err: any) => console.log('err creating new post', err)
      );
    } else {
      this.postsService.updatePost(this.post).subscribe(
        (response: any) => this.router.navigate(['/posts']),
        (err: any) => console.log('err updating post', err)
      );
    }
  }
}
