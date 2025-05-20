import $api from "./index";

export const createCategory = async (category) => {
  const { data } = await $api.post("api/category", category);
  return data;
};

export const fetchCategories = async () => {
  const { data } = await $api.get("api/category");
  return data;
};

export const fetchOneCategory = async (id) => {
  const { data } = await $api.get("api/category/" + id);
  return data;
};

export const updateCategory = async (id, formData) => {
  const { data } = await $api.put(`api/category/${id}`, formData);
  return data;
};

export const deleteCategory = async (id) => {
  const { data } = await $api.delete(`api/category/${id}`);
  return data;
};


export const createProduct = async (product) => {
  const { data } = await $api.post("api/product", product);
  return data;
};

export const deleteProduct = async (id) => {
  const { data } = await $api.delete(`api/product/${id}`);
  return data;
};

export const fetchProducts = async (categoryId) => {
  const { data } = await $api.get("api/product", {
    params: {
      categoryId,
    },
  });
  return data;
};

export const fetchOneProduct = async (id) => {
  const { data } = await $api.get("api/product/" + id);
  return data;
};

export const updateProduct  = async (id, formData) => {
  const { data } = await $api.put(`api/product/${id}`, formData);
  return data;
}

export const createCarousel = async (carousel) => {
  const { data } = await $api.post("api/carousel", carousel);
  return data;
};

export const fetchCarousels = async () => {
  const { data } = await $api.get("api/carousel");
  return data;
};

export const deleteCarousel = async (id) => {
  const { data } = await $api.delete(`api/carousel/${id}`);
  return data;
};