const DEFAULT_API_HOST = 'https://uber-eats-like.onrender.com/'

export const restaurantsIndex = `${DEFAULT_API_HOST}/restaurants`
export const foodsIndex = (restaurantId) =>
  `${DEFAULT_API_HOST}/restaurants/${restaurantId}/foods`
export const orderFoods = `${DEFAULT_API_HOST}/order_foods`;
export const orderFoodsReplace = `${DEFAULT_API_HOST}/order_foods/replace`;
export const orders = `${DEFAULT_API_HOST}/orders`;
