const modelName = "api::view-counter.view-counter";
const idValue = 1;
const viewCountField = "view_count";

const _getViewCount = async () => {
  const viewCountModel = await strapi.entityService.findOne(
    modelName,
    idValue,
    {
      fields: [viewCountField],
    }
  );
  const viewCount = viewCountModel ? viewCountModel[viewCountField] : 0;
  return viewCount;
};

module.exports = {
  getViewCount: async () => {
    try {
      return await _getViewCount();
    } catch (err) {
      return err;
    }
  },

  incrementViewCount: async () => {
    try {
      const tableName = "view_counters";
      const idField = "id";

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
      } else {
        await strapi.db
          .connection(tableName)
          .where(idField, idValue)
          .increment(viewCountField, 1);
      }

      return await _getViewCount();
    } catch (err) {
      return err;
    }
  },
};
