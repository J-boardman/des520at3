const renderComponents = async (filePath, querySelector) => {
  const data = await fetch(filePath).then((res) => res.text());

  document
    .querySelectorAll(querySelector)
    .forEach((element) => (element.innerHTML = data));
};

export default renderComponents