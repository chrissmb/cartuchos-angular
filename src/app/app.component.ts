import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { JqueryService } from './shared/jquery.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private jqueryService: JqueryService) {}

  ngOnInit() {
    this.jqueryService.ativaSideBar();
  }
}
