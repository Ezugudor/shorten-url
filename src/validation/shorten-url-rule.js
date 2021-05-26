import joi from "@hapi/joi";

export const ShortenUrlRules = joi
  .object()
  .keys({
    url: joi.string().uri().required().label("Url is required"),
  })
  .required();
