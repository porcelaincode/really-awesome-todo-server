import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Query {
        todos(limit: Int): [Todo]
        todo(id: ID!): Todo
    }
    type Mutation {
        addTodo(text: String!): TodoResponse
        updateTodo(id: ID!, text: String): TodoResponse
        deleteTodo(id: ID!): TodoResponse
    }
    type Todo {
        _id: ID!
        text: String!
    }
    type Todos {
        todos: [Todo]
    }
    type TodoResponse {
        data: Todo
        error: String
        ok: Boolean
    }
`);

export default schema;
