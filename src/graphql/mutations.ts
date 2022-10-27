import db from "../db";

const mutation = {
  addTodo: async ({ text }: ToDo, context: any) => {
    try {
      const todo = await db.todos.createTodo({ text });
      return {
        data: todo,
        ok: true,
        error: "",
      };
    } catch (error: any) {
      return {
        data: null,
        ok: false,
        error: error.message,
      };
    }
  },
  updatetodo: async ({ id, text }: ToDo & { id: string }, context: any) => {
    try {
      const todo = await db.todos.updateTodo(id, {
        text,
      });
      if (!todo) {
        return {
          data: null,
          ok: false,
          error: "todo item not found",
        };
      }
      return {
        data: todo,
        ok: true,
        error: "",
      };
    } catch (error: any) {
      return {
        data: null,
        ok: false,
        error: error.message,
      };
    }
  },
  deletetodo: async ({ id }: { id: string }, contex: any) => {
    try {
      const todo = await db.todos.deleteTodo(id);
      if (!todo) {
        return {
          data: null,
          ok: false,
          error: "todo item not found",
        };
      }
      return {
        data: todo,
        ok: true,
        error: "",
      };
    } catch (error: any) {
      return {
        data: null,
        ok: false,
        error: error.message,
      };
    }
  },
};

interface ToDo {
  text: string;
}

export default mutation;
