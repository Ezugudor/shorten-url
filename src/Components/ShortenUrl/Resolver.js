import { validator } from "../../utility/validator";
import { ShortenUrlRules } from "../../validation/shorten-url-rule";
import shortID from "short-id-gen";
import { UrlRepository } from "../../Repository/UrlRepository";
import { request } from "express";
import { UrlRegex } from "../../utility/regex";

//TODO : Move to a class

export const ShortenUrlResolver = (parent, args) => {
  const { url } = args;
  const baseUrl = process.env.BASE_URL;

  const urlExpression = UrlRegex();
  const regex = new RegExp(urlExpression);
  const newShortID = shortID.generate(6);

  const newURL = `${baseUrl}/${newShortID}`;

  //TODO: move this to a middleware
  try {
    validator({ url }, ShortenUrlRules);
  } catch (error) {
    console.log(error);
  }

  //check for valid url
  if (!url.match(regex)) {
    throw new Error("Not a valid url");
  }

  try {
    const createUrl = async () => {
      const urlRepo = new UrlRepository();
      const res = await urlRepo.create({
        shortId: newShortID,
        url,
      });
    };
    createUrl();
  } catch (error) {
    console.log(error);
  }

  return {
    url: newURL,
  };
};
