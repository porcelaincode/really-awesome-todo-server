## About

Graphql server with basic CRUD application connected to MongoDB Atlas

### Queries

The Query contains books and book, denoting all books and a single book. Also, we add an optional parameter for the books query: limit (a number), which limits the output. Finally, the book query takes in ID, which searches for the requested Book.

```gql
query FetchTodos {
  todos(limit: Int) {
    id
    text
  }
}

query FetchTodo {
  todos(id: ID) {
    _id
    text
  }
}
```

### Mutations

The Mutation contains addBook, updateBook, and deleteBook declarations along with its parameters. They all have the same response type, Book since we’re dealing with a single book.

```gql
mutation AddTodo {
  addTodo(text: String!) {
    data {
        _id
        text
    }
    error
    ok
  }
}

mutation UpdateTodo {
    updateTodo(id: ID!, text: String!) {
    data {
        _id
        text
    }
    error
    ok
  }
}

mutation DeleteTodo {
  deleteTodo(id: ID!) {
    data {
        _id
        text
    }
    error
    ok
  }
}
```
