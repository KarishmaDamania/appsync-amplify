/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook {
    onCreateBook {
      id
      title
      description
      price
      authord
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook {
    onUpdateBook {
      id
      title
      description
      price
      authord
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook {
    onDeleteBook {
      id
      title
      description
      price
      authord
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      books {
        items {
          id
          title
          description
          price
          authord
          createdAt
          updatedAt
        }
        nextToken
      }
      total
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      books {
        items {
          id
          title
          description
          price
          authord
          createdAt
          updatedAt
        }
        nextToken
      }
      total
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      books {
        items {
          id
          title
          description
          price
          authord
          createdAt
          updatedAt
        }
        nextToken
      }
      total
      createdAt
      updatedAt
    }
  }
`;
