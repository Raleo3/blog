import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogRollComponent } from './blog-roll/blog-roll.component';
import { PostReadComponent } from './post-read/post-read.component';
import { PostWriteComponent } from './post-write/post-write.component';


export const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: BlogRollComponent },
  { path: 'posts/create', component: PostWriteComponent },
  { path: 'posts/:postId', component: PostReadComponent },
  { path: 'posts/:postId/edit', component: PostWriteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
