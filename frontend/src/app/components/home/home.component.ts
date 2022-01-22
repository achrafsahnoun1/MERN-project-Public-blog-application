import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { PostsComponent } from '../posts/posts.component';
import { TopbarComponent } from '../topbar/topbar.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
