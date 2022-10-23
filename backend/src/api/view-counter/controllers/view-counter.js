module.exports = {
  async incrementViewCount(ctx) {
    try {
      const viewCount = await strapi
        .service("api::view-counter.view-counter")
        .incrementViewCount();

      ctx.body = viewCount;
    } catch (err) {
      ctx.badRequest("View Counter controller error", { moreDetails: err });
    }
  },
};
