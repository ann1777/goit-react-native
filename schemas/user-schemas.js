import Joi from "joi";
import {
  emailRegexp,
  nameRegexp,
  phoneRegexp,
} from "../constants/user-constants.js";

const userRegistrationSchema = Joi.object({
  name: Joi.string().pattern(nameRegexp).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().pattern(phoneRegexp).required(),
});

const userLogInSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().pattern(phoneRegexp).required(),
});

export default { userRegistrationSchema, userLogInSchema };
