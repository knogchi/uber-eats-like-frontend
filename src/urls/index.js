const DEFAULT_API_LOCALHOST = process.env.REACT_APP_API_HOST

export const restaurantsIndex = `${DEFAULT_API_LOCALHOST}/restaurants`
export const foodsIndex = (restaurantId) =>
  `${DEFAULT_API_LOCALHOST}/restaurants/${restaurantId}/foods`
export const orderFoods = `${DEFAULT_API_LOCALHOST}/order_foods`;
export const orderFoodsReplace = `${DEFAULT_API_LOCALHOST}/order_foods/replace`;
export const orders = `${DEFAULT_API_LOCALHOST}/orders`;
