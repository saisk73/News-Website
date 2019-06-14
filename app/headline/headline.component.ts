import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{} from 'rxjs';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {
  KEY = 'f413e325768844ad8bd111b59c856f04';
  baseurl ='https://newsapi.org/v2/top-headlines?country=in'; //headlines
  baseurl1 ='https://newsapi.org/v2/top-headlines?country=in&category=technology'; //technology
  baseurl2 ='https://newsapi.org/v2/top-headlines?country=in&category=business'; //business
  baseurl3 = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment'; //entertainment
  baseurl4 = 'https://newsapi.org/v2/top-headlines?country=in&category=science'; //science
  baseurl5 ='https://newsapi.org/v2/top-headlines?country=in&category=sports'; //sports
  headlineText = "Latest Headlines";
  url;url1;url2;url3;url4;url5;
  news;news1;news2;news3;news4;news5;

  constructor(private http:HttpClient) { 
    this.url = this.baseurl + '&apikey=' + this.KEY; 
    this.url1 = this.baseurl1 + '&apikey=' + this.KEY;    
  }

  ngOnInit() {
    this.fetchAll();
  }
  fetchAll(){
    this.fetchNews();
    this.fetchNews1();
    this.fetchNews2();
    this.fetchNews3();
    this.fetchNews4();
    this.fetchNews5();
  }
  fetchNews()
  {
    this.http.get(this.url)
    .subscribe(data => this.news = data['articles']);
  }
  fetchNews1()
  {
    this.http.get(this.url1)
    .subscribe(data => this.news1 = data['articles']);
  }
  fetchNews2()
  {
    this.http.get(this.url2)
    .subscribe(data => this.news2 = data['articles']);
  }
  fetchNews3()
  {
    this.http.get(this.url3)
    .subscribe(data => this.news3 = data['articles']);
  }
  fetchNews4()
  {
    this.http.get(this.url4)
    .subscribe(data => this.news4 = data['articles']);
  }
  fetchNews5()
  {
    this.http.get(this.url5)
    .subscribe(data => this.news5 = data['articles']);
  }
  
  

}
