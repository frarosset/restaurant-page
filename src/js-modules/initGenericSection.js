export default function initGenericSection(title, imgUrl, options = {}) {
  const defaultOptions = {
    withSideImage: false,
    imgAlternate: false,
    imgFirst: false,
    withFixedImage: false,
    hasSubsections: false,
    withBgImage: false,
  };

  options = Object.assign({},defaultOptions, options);

  //Init the section
  const section = document.createElement("section");
  const sectionCnt = document.createElement("div");
  sectionCnt.classList.add("section-container");
  section.appendChild(sectionCnt);

  // Text side: title (+ data, to be appended on the returned object)

  const txtSide = document.createElement("div");
  txtSide.classList.add("txt-side");

  if (title) {
    const titleH3 = document.createElement("h3");
    titleH3.textContent = title;
    txtSide.appendChild(titleH3);
  }

  sectionCnt.appendChild(txtSide);

  const returnObject = [section, txtSide];

  // Image side
  if (options.withSideImage) {
    section.classList.add("with-side-image");

    const imgSide = document.createElement("div");
    imgSide.classList.add("img-side");
    imgSide.style.backgroundImage = `url(${imgUrl})`;
    sectionCnt.appendChild(imgSide);

    if (options.withFixedImage) section.classList.add("img-fixed");
    if (options.imgAlternate) section.classList.add("img-alternate");
    if (options.imgFirst) section.classList.add("img-first");

    returnObject.push(imgSide);
  } else if (options.withBgImage) {
    section.classList.add("with-bg-image");

    section.style.backgroundImage = `url(${imgUrl})`;

    if (options.withFixedImage) section.classList.add("img-fixed");
  }

  if (options.hasSubsections) {
    section.classList.add("has-subsections");
  }

  return returnObject;
}
