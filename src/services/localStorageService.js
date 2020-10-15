const LocalStorageService = (keyItem) => {
  const _setToken = (auth_params) => {
    localStorage.setItem(keyItem, JSON.stringify(auth_params));
  };

  const _getAccessToken = () => {
    return JSON.parse(localStorage.getItem(keyItem)) || {};
  };

  const _clearToken = () => {
    localStorage.removeItem(keyItem);
  };

  return {
    setToken : _setToken,
    clearToken : _clearToken,
    getAccessToken : _getAccessToken,
  };
};

export default LocalStorageService;