export function getProductList(apiResponse) {
  if (!apiResponse) {
    return [];
  }

  const adaptedProductList = apiResponse.map((product) => {
    return {
      id: product.id,
      image: product.image,
      title: product.title,
      description: product.description,
      price: product.price,
    };
  });

  return adaptedProductList;
}

export function getProductDetails(apiResponse) {
  if (!apiResponse) {
    return {};
  }
  const adaptedProductDetails = {
    title: apiResponse.title,
    description: apiResponse.description,
    category: apiResponse.category,
    image: apiResponse.image,
    price: apiResponse.price,
  };
  return adaptedProductDetails;
}
