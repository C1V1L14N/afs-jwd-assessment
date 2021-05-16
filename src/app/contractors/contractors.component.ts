import { Component, OnInit } from '@angular/core';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.scss']
})
export class ContractorsComponent implements OnInit {

    async callAllToDos() {
      const allTodos = await API.graphql({ query: queries.listTodos });
      console.log(allTodos);
    }

  

  constructor() { }

  ngOnInit(): void {
    this.callAllToDos();
  }

}
