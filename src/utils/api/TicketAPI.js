import AppUtils from '../AppUtils';

const TicketAPI = {
  list() {
    return new Promise((resolve, reject) => {
      fetch(`${AppUtils.getNodeApiUrlBase()}/tickets/list`)
        .then((res) => res.json())
        .then(
          (result) => resolve(result),
          (error) => reject(error)
        );
    });
  },

  search(searchCriteria) {
    return new Promise((resolve, reject) => {
      fetch(`${AppUtils.getNodeApiUrlBase()}/tickets/search`, {
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

export default TicketAPI;
