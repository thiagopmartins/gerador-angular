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

export const CREATE_ENTERPRISE_MUTATION = gql `
    mutation CreateEnterpriseMutation($cnpj: String!, $name: String!, $ie: String!){
        createEnterprise(
            cnpj: $cnpj
            name: $name
            ie: $ie
        ){
            id
            name
            cnpj
            ie
        }
    }
`;

export const DELETE_ENTERPRISE_MUTATION = gql `
    mutation DeleteEnterpriseMutation($id: String!){
        deleteEnterprise(
            id: $id
        ){
            id
        }
    }
`;