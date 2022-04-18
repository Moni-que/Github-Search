import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { SearchService } from '../search-service/search.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  public userField!:string;
  @Output() searchingResult = new EventEmitter<any>()
  searchingUser(){
    this.searchingResult.emit(this.userField);
  }

  constructor() { }


  ngOnInit(): void {
  }

}
