import { EmpresaModel } from './EmpresaModel';
import gql from 'graphql-tag';

export interface AllEnterprisesQuery {
    allEnterprises: EmpresaModel[];
}

export const ALL_ENTERPRISES_QUERY = gql`
    query AllEnterprisesQuery{
        allEnterprises {
            id
            name
            cnpj
            ie
            createdAt
            updatedAt
        }
    }
`;