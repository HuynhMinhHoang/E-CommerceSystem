import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HOST = "http://10.0.2.2:8000";

export const endpoints = {
  google_login: "/google-login/",
  facebook_login: "/facebook-login/",
  create_account: "/accounts/create_account/",
  current_account: "/accounts/current_account/",
  roles: "/roles/",
  store: "/stores/",
  stores: (id) => `/stores/${id}/`,
  create_store: "/stores/create_store/",
  products: "/products/",
  add_follow: (id) => `/stores/${id}/add_follow/`,
  get_list_follow_byUser: "/follows/get_list_follow_byUser/",
  count_follower: (id) => `/stores/${id}/count_follower/`,
  products_id: (id) => `/products/${id}/`,
  create_product: (id) => `/stores/${id}/add_product/`,
  add_attribute: (id) => `/products/${id}/add_attribute/`,
  add_image: (id) => `/products/${id}/add_image/`,
  update_product: (id) => `/products/${id}/update_product/`,
  get_product_by_category: "/products/get_product_by_category/",
  delete_attribute: (id) => `/attribute/${id}/`,
  delete_image: (id) => `/images/${id}/`,
  get_query: "/products/get_query/",
  categories: "/categories/",
  get_products_by_store_soldOut: (id) =>
    `/stores/${id}/get_products_by_store_soldOut/`,
  get_products_by_store_false: (id) =>
    `/stores/${id}/get_products_by_store_false/`,
  get_products_by_store_true: (id) =>
    `/stores/${id}/get_products_by_store_true/`,
  product_revenue_in_month: (id) => `/stores/${id}/product_revenue_in_month/`,
  product_revenue_in_quarter: (id) =>
    `/stores/${id}/product_revenue_in_quarter/`,
  product_revenue_in_year: (id) => `/stores/${id}/product_revenue_in_year/`,
  sort_by_name: "/products/sort_by_name/",
  sort_by_price_up: "/products/sort_by_price_up/",
  sort_by_price_down: "/products/sort_by_price_down/",
  sort_by_quantity_sold: "/products/sort_by_quantity_sold/",
  get_categories_by_store: (id) => `/stores/${id}/get_categories_by_store/`,
  category_revenue_in_month: (id) => `/stores/${id}/category_revenue_in_month/`,
  category_revenue_in_quarter: (id) =>
    `/stores/${id}/category_revenue_in_quarter/`,
  category_revenue_in_year: (id) => `/stores/${id}/category_revenue_in_year/`,
  create_order: "/orders/create_order/",
  paymentTypes: "/paymentTypes/",
  shippingTypes: "/shippingTypes/",
  create_orderdetail: (id) => `/orders/${id}/create_orderdetail/`,
  get_orders_noConfirm_by_account: "/orders/get_orders_noConfirm_by_account/",
  get_orders_confirm_by_account: "/orders/get_orders_confirm_by_account/",
  add_comment_product: (id) => `/comments/${id}/add_comment_product/`,
  reply_to_comment: (id) => `/comments/${id}/reply_to_comment/`,
  update_comment: (id) => `/comments/${id}/update_comment/`,
  delete_comment: (id) => `/comments/${id}/delete_comment/`,
  count_orders_and_comments: (id) => `/stores/${id}/count_orders_and_comments/`,
  get_orders_status_order_false: (id) =>
    `/stores/${id}/get_orders_status_order_false/`,
  update_order_status: (id) => `/stores/${id}/update_order_status/`,
  get_products_by_store: (id) => `/stores/${id}/get_products_by_store/`,
  get_comments_for_product: (id) => `/products/${id}/get_comments_for_product/`,
  get_replys_comments: (id) => `/comments/${id}/get_replys_comments/`,
};

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("accessToken");
    return token;
  } catch (error) {
    console.error("Lỗi khi lấy token từ AsyncStorage:", error);
    return null;
  }
};

export const authApi = async () => {
  const token = await getToken();
  console.log("AsyncStorage === Access Token:", token);
  return axios.create({
    baseURL: HOST,
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export default axios.create({
  baseURL: HOST,
});
