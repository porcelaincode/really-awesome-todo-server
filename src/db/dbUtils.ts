import TodoModel from "./model";

export const getAllTodos = async (limit: number) => {
  return await TodoModel.find({}).limit(limit);
};

export const getTodoById = async (id: string) => {
  return await TodoModel.findById(id);
};

export const createTodo = async ({ text }: { text: string }) => {
  return await TodoModel.create({ text });
};

export const updateTodo = async (id: string, { text }: { text: string }) => {
  const update: { text?: string } = {};
  if (text) update.text = text;
  return await TodoModel.findByIdAndUpdate(id, update);
};

export const deleteTodo = async (id: string) => {
  return await TodoModel.findByIdAndDelete(id);
};
