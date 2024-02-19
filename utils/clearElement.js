const clearElement = (...erased) => {
  erased.forEach((elem) => {
    document.querySelector(elem).innerHTML = '';
  });
};

export default clearElement;
