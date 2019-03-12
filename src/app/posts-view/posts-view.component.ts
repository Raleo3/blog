import { Component, Input } from '@angular/core';

import { Post } from '../shared/models/post.interface';

import * as _ from 'lodash';


@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.scss']
})
export class PostsViewComponent {
  @Input() posts: Array<Post>;

  constructor( ) { }
}
