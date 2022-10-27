import db from "../db";

const query = {
  todos: async ({ limit }: { limit: number }, context: any) => {
    return await db.todos.getAllTodos(limit);
  },
  todo: async ({ id }: { id: string }, context: any) => {
    return await db.todos.getTodoById(id);
  },
};

export default query;
