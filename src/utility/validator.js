import joi from "@hapi/joi";

export const validator = (obj, rule) => {
  const result = rule.validate(obj, { abortEarly: false });
  if (result.error) {
    result.error.message = "Validation Error";
    throw result.error;
  }
};
