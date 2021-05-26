import { UrlRepository } from "../Repository/UrlRepository";

export const ResolveUrl = async (urlID) => {
  const urlRepo = new UrlRepository();
  const urlData = await urlRepo.findByShortID(urlID);
  return urlData.url;
};
