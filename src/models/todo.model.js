// import dependencies
import { Schema, model } from "mongoose";

// define handler
const TodoSchema = new Schema(
  {
    id: {
      type: String,
    },

    title: {
      type: String,
      required: true,
    },
    task: {
      type: String,
      required: true,
    },
    overdue: {
      type: Boolean,
      default: false,
    },

    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Todo = model("Todo", TodoSchema);

// export handler
export default Todo;
