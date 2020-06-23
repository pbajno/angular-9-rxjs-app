import { Component } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'gitrepo';
  repos:String[];
  user:String;

  constructor(private githubService:GithubService) {}

  getRepositories(user:String) {
    this.githubService.getRepositories(user)
    .subscribe((data) => {
      console.log(data);
      this.repos = data;
    })
  }

}
