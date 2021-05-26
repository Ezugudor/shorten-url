import { urlModel } from "../Database/models/shorturl";

export class UrlRepository {
  constructor() {}

  async findByShortID(shortId) {
    const biz = await urlModel.findOne({ shortId });
    const a = await Promise.resolve(biz);
    return a;
  }

  async create(data) {
    const biz = urlModel.create(data);
    const a = await Promise.resolve(biz);
    return a;
  }
}
