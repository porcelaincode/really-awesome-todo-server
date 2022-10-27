import { Schema, model, Model, Document } from "mongoose";

const todoSchema: Schema = new Schema<ITodo>({
  text: {
    type: String,
    required: true,
  },
  lastUpdated: {
    type: String,
    required: true,
  },
});

export interface ITodo extends Document {
  _id: string;
  text: string;
  lastUpdated: string;
}

const TodoModel: Model<ITodo> = model("Todo", todoSchema);

export default TodoModel;
