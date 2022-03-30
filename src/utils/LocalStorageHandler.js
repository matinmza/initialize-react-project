const LocalStorageHandler = (name) => {
  const value = () => {
    return JSON.parse(localStorage.getItem(name));
  };
  const setValue = (newValue) => {
    const stringValue = JSON.stringify(newValue);
    localStorage.setItem(name, stringValue);
  };
  const removeValue = () => {
    localStorage.removeItem(name);
  };
  return [value, setValue, removeValue];
};

export default LocalStorageHandler;
