import AppUtils from '../AppUtils';

const AuthAPI = {
  userLogin() {
    return new Promise((resolve, reject) => {
      fetch(`${AppUtils.getNodeApiUrlBase()}/auth/login`)
        .then((res) => res.json())
        .then(
          (result) => resolve(result),
          (error) => reject(error)
        );
    });
  },
};

export default AuthAPI;
