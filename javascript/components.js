const renderComponents = async (filePath, querySelector, anonFunction) => {
  const data = await fetch(filePath).then((res) => res.text());

  document
    .querySelectorAll(querySelector)
    .forEach((element) => (element.innerHTML = data));

  anonFunction && anonFunction();
};

export default renderComponents

const add = (dog,cat) => dog + cat;

