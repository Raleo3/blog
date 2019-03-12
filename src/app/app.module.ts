import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { BlogRollComponent } from './blog-roll/blog-roll.component';
import { PostsViewComponent } from './posts-view/posts-view.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostReadComponent } from './post-read/post-read.component';
import { PostWriteComponent } from './post-write/post-write.component';

import { PostsService } from './services/posts.service';


@NgModule({
  declarations: [
    AppComponent,
    BlogRollComponent,
    PostsViewComponent,
    PostListComponent,
    PostReadComponent,
    PostWriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
