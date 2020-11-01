const organizationData = require('../dummy/organizationData');

const organizationDataActions = {
  getNameByUserID(organizationId) {
    const result = organizationData.find(({ _id }) => _id === organizationId);
    return result ? result.name : '';
  },
};

module.exports = organizationDataActions;
