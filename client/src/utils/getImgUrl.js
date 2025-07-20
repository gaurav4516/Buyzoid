const getImgUrl = (name) => {
  return new URL(`../assets/bags/${name}`, import.meta.url);
};

export default getImgUrl;
