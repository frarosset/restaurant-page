export default function initGenericSection(title, imgUrl, options = {}) {
  const defaultOptions = {
    withSideImage: false,
    imgAlternate: false,
    imgFirst: false,
    withFixedImage: false,
    hasSubsections: false,
  };

  options = Object.assign(defaultOptions, options);

  //Init the section
  const section = document.createElement("section");
  const sectionCnt = document.createElement("div");
  sectionCnt.classList.add("section-container");
  section.appendChild(sectionCnt);

  // Text side: title (+ data, to be appended on the returned object)
  const titleH3 = document.createElement("h3");
  titleH3.textContent = title;

  const txtSide = document.createElement("div");
  txtSide.classList.add("txt-side");
  txtSide.appendChild(titleH3);
  sectionCnt.appendChild(txtSide);

  const returnObject = [section, txtSide];

  // Image side
  if (options.withSideImage) {
    section.classList.add("with-side-image");

    const imgSide = document.createElement("div");
    imgSide.classList.add("img-side");
    imgSide.style.backgroundImage = `url(${imgUrl})`;
    sectionCnt.appendChild(imgSide);

    if (options.withFixedImage) section.classList.add("img-side-fixed");
    if (options.imgAlternate) section.classList.add("img-alternate");
    if (options.imgFirst) section.classList.add("img-first");

    returnObject.push(imgSide);
  }

  if (options.hasSubsections) {
    section.classList.add("has-subsections");
  }

  return returnObject;
}
