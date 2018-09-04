import { Observable } from 'rxjs';
import { ALL_ENTERPRISES_QUERY, AllEnterprisesQuery, CREATE_ENTERPRISE_MUTATION, DELETE_ENTERPRISE_MUTATION } from './empresa.graphql';
import { Apollo } from 'apollo-angular';
import { Injectable } from "@angular/core";
import { EmpresaModel } from './EmpresaModel';
import { map } from 'rxjs/operators';

@Injectable()
export class EmpresaService {

  constructor(
    private apollo: Apollo
  ) { }

  allEnterprises(): Observable<EmpresaModel[]> {
    return this.apollo
      .query<AllEnterprisesQuery>({
        query: ALL_ENTERPRISES_QUERY
      }).pipe(
        map(res => res.data.allEnterprises)
      );
  }

  createEnterprise(enterprise: {cnpj: String, name: String, ie: String}): Observable<EmpresaModel> {
    delete enterprise['id'];
    return this.apollo.mutate({
      mutation: CREATE_ENTERPRISE_MUTATION,
      variables: enterprise
    }).pipe(
      map(res => res.data.createEnterprise)
    );
  }

  deleteEnterprise(id): Observable<EmpresaModel> {
    return this.apollo.mutate({
      mutation: DELETE_ENTERPRISE_MUTATION,
      variables: id
    }).pipe(
      map(res => res.data.deleteEnterprise)
    );
  }

}