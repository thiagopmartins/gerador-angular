import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { combineAll } from 'rxjs/operator/combineAll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  loading = false;

  ngOnInit(): void{
    this.loading = true;
  }
  ngDestroy(): void{
    this.loading = false;
  }

  constructor(
    private apollo: Apollo,
  ) {
    //this.createUser();
  }

  createUser(): void {
    this.apollo.mutate({
      mutation: gql`
        mutation createUser($input: UserCreateInput!){
          createUser(input: $input) {
            id
            name
            email
          }
        }      
      `,
      variables: {
        input: {
          name: "3teste",
          email: "3este@teste",
          password: "123456"
        }
      }
    }).subscribe(res => console.log(res));
  }


}
