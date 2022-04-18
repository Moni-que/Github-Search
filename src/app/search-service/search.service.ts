import { Injectable } from '@angular/core';
import { Username } from '../username';
import { Repository } from '../repository';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  username!:Username;
  repo!:Repository;

  constructor(private http:HttpClient) { 
    this.username = new Username("","",0,"")
    this.repo = new Repository("","","","",new Date())
  }
}
