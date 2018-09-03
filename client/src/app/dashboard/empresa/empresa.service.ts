import { Observable } from 'rxjs';
import { ALL_ENTERPRISES_QUERY, AllEnterprisesQuery } from './empresa.graphql';
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

}