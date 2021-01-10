export { default as Logo } from '../..\\components\\Logo.vue'
export { default as VuetifyLogo } from '../..\\components\\VuetifyLogo.vue'
export { default as Cartitem } from '../..\\components\\cart\\cartitem.vue'
export { default as Carts } from '../..\\components\\cart\\carts.vue'
export { default as AddCart } from '../..\\components\\dialogs\\addCart.vue'
export { default as Categories } from '../..\\components\\menu\\categories.vue'
export { default as Product } from '../..\\components\\menu\\product.vue'
export { default as Products } from '../..\\components\\menu\\products.vue'
export { default as Snackbar } from '../..\\components\\Shared\\Snackbar.vue'

export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components_VuetifyLogo" */).then(c => c.default || c)
export const LazyCartitem = import('../..\\components\\cart\\cartitem.vue' /* webpackChunkName: "components_cart/cartitem" */).then(c => c.default || c)
export const LazyCarts = import('../..\\components\\cart\\carts.vue' /* webpackChunkName: "components_cart/carts" */).then(c => c.default || c)
export const LazyAddCart = import('../..\\components\\dialogs\\addCart.vue' /* webpackChunkName: "components_dialogs/addCart" */).then(c => c.default || c)
export const LazyCategories = import('../..\\components\\menu\\categories.vue' /* webpackChunkName: "components_menu/categories" */).then(c => c.default || c)
export const LazyProduct = import('../..\\components\\menu\\product.vue' /* webpackChunkName: "components_menu/product" */).then(c => c.default || c)
export const LazyProducts = import('../..\\components\\menu\\products.vue' /* webpackChunkName: "components_menu/products" */).then(c => c.default || c)
export const LazySnackbar = import('../..\\components\\Shared\\Snackbar.vue' /* webpackChunkName: "components_Shared/Snackbar" */).then(c => c.default || c)
