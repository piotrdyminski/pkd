module.exports = {
  routes: [
    {
      method: "GET",
      path: "/view-counter",
      handler: "view-counter.getViewCount",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/view-counter",
      handler: "view-counter.incrementViewCount",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
