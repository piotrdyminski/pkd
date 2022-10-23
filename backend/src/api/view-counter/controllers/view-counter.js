module.exports = {
  async getViewCount(ctx) {
    try {
      const viewCount = await strapi
        .service("api::view-counter.view-counter")
        .getViewCount();

      ctx.body = viewCount;
    } catch (err) {
      ctx.badRequest("View Counter controller error (getViewCount)", {
        moreDetails: err,
      });
    }
  },

  async incrementViewCount(ctx) {
    try {
      const viewCount = await strapi
        .service("api::view-counter.view-counter")
        .incrementViewCount();

      ctx.body = viewCount;
    } catch (err) {
      ctx.badRequest("View Counter controller error (incrementViewCount)", {
        moreDetails: err,
      });
    }
  },
};
