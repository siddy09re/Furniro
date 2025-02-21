

const useShowShop = (data, itemsnumber) => {
  const paginateddata = data.slice(0, itemsnumber);
  console.log("slice", itemsnumber, paginateddata);

  return { paginateddata };
};

export default useShowShop;
