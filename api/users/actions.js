const userData = require('../dummy/userData');

const userDataActions = {
  getNameByID(userId) {
    const result = userData.find(({ _id }) => _id === userId);
    return result ? result.name : '';
  },

  getOrganizationUserList(organizationId) {
    const result = [];
    userData.forEach(({ organization_id, name }) => {
      if (organization_id === organizationId) {
        result.push(name);
      }
    });
    return result;
  },
};

module.exports = userDataActions;
