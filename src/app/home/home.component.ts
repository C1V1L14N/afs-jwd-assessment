import { Component, OnInit } from '@angular/core';
import { HomeModule } from '../home.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
