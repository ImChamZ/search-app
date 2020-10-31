import AppUtils from '../AppUtils';

const UserAPI = {
  list() {
    return new Promise((resolve, reject) => {
      fetch(`${AppUtils.getNodeApiUrlBase()}/users/list`)
        .then((res) => res.json())
        .then(
          (result) => resolve(result),
          (error) => reject(error)
        );
    });
  },

  search(searchCriteria) {
    return new Promise((resolve, reject) => {
      fetch(`${AppUtils.getNodeApiUrlBase()}/users/search`, {
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

export default UserAPI;
