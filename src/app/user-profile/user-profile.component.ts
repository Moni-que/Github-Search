import { Component, OnInit } from '@angular/core';
import { Username } from '../username';
import { Repository } from '../repository';
import { SearchService } from '../search-service/search.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  username:Username;
  repo:any;

  constructor(public searchService: SearchService) { 

  }

  searchUser(username:string){
    this.searchService.getUserProfile(username).then((success)=>{
     this.username = this.searchService.username;
    },
    (error)=>{
      console.log(error)
    });
    this.searchService.getUserProfile(this.repo).then((success)=>{
     this.repo = this.searchService.repo;
    },
    (error)=>{
      console.log(error)
    });
  }

  ngOnInit(): void {
    this.searchUser("Moni-que");
  }
  
}
