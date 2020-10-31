import AppUtils from '../AppUtils';

const OrganizationAPI = {
  list() {
    return new Promise((resolve, reject) => {
      fetch(`${AppUtils.getNodeApiUrlBase()}/organizations/list`)
        .then((res) => res.json())
        .then(
          (result) => resolve(result),
          (error) => reject(error)
        );
    });
  },

  search(searchCriteria) {
    return new Promise((resolve, reject) => {
      fetch(`${AppUtils.getNodeApiUrlBase()}/organizations/search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(searchCriteria),
      })
        .then((res) => res.json())
        .then(
          (result) => resolve(result),
          (error) => reject(error)
        );
    });
  },
};

export default OrganizationAPI;
