module.exports = {
  incrementViewCount: async () => {
    try {
      const tableName = "view_counters";
      const modelName = "api::view-counter.view-counter";
      const idValue = 1;
      const idField = "id";
      const viewCountField = "view_count";

      const viewCountExists = await strapi.entityService.findOne(
        modelName,
        idValue
      );
      if (!viewCountExists) {
        await strapi.entityService.create(modelName, {
          data: {
            id: idValue,
            view_count: 1,
          },
        });
      }

      await strapi.db
        .connection(tableName)
        .where(idField, idValue)
        .increment(viewCountField, 1);

      const viewCountModel = await strapi.entityService.findOne(
        modelName,
        idValue,
        {
          fields: [viewCountField],
        }
      );

      const viewCount = viewCountModel[viewCountField];
      return viewCount;
    } catch (err) {
      return err;
    }
  },
};
