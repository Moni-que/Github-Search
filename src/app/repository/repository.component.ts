import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { Username } from '../username';
import { SearchService } from '../search-service/search.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  username:Username;
  repo:any;

  constructor(public searchService: SearchService,) {

   }
  ngOnInit(): void {
    this.searchService.getUserRepository("Moni-que").subscribe((data)=>{
      this.repo=data
    })

  }

}
