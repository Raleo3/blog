import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

import { environment } from '../../environments/environment';

import { Post } from '../shared/models/post.interface';


@Injectable()
export class PostsService {

  public refreshPostsSubject: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(environment.baseURL);
  }

  getPost(id: number) {
    return this.http.get(environment.baseURL + `${id}`);
  }

  updatePost(post: Post) {
    return this.http.post(environment.baseURL + `${post.id}`, post);
  }

  createPost(post: Post) {
    return this.http.post(environment.baseURL, post);
  }

  deletePost(id: number) {
    return this.http.delete(environment.baseURL + `${id}`);
  }
}
