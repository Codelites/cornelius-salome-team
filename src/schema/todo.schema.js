// import dependencies
import Joi from "joi";

// define handler
const todoValidationSchema = Joi.object({
  title: Joi.string().min(3).max(10).required(),
  task: Joi.string().min(3).max(20).required(),
  overdue: Joi.bool(),
  completed: Joi.bool(),
});

// export handler
export default todoValidationSchema;
