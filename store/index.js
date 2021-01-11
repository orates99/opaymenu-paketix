import Vuex from "vuex"


const createStore =()=>{
    return new Vuex.Store({
        state:{
            products:[],
            categories:[],
            cart:[],
            totalPrice:0.0,
            snackbar: {
                show: false,
                text: null
              }
        },
        mutations:{
            setProducts(state,products){
                state.products=products
            },
            setCategories(state,categories){
                state.categories=categories
            },
            setCart(state,cart){
                state.cart=cart
            },
            setTotalPrice(state,totalPrice){
                state.totalPrice=totalPrice
            },
            showSnackbar(state, msg) {
                let timeout = 0
                if (state.snackbar.show) {
                  state.snackbar.show = false
                  timeout = 300
                }
                setTimeout(() => {
                  state.snackbar.show = true
                  state.snackbar.text = msg
                }, timeout);
                setTimeout(() => {
                    state.snackbar.show = false
                    
                  }, 1300);
        
              },
              hideSnackbar(state) {
                state.snackbar.show = false
              },
        },
        actions:{
            nuxtServerInit(vuexContext,context){
                return context.$axios.get("/")
                .then(response=>{
                   
                    vuexContext.commit("setProducts",response.data.products)
                    vuexContext.commit("setCategories",response.data.categories)
                    vuexContext.commit("setCart",response.data.cart.items)
                })
            },
            addToCart(vuexContext,product){
                console.log(product)
                this.$axios.post("/add-to-cart",{product:product})
                .then(response=>{
                    let msg="Ürün Sepete Eklendi"
                  vuexContext.commit("setCart",response.data.cart.items)
                  vuexContext.commit("showSnackbar",msg)
                })
            },
            removeProduct(){},
            changeCount(){

            }
        },
        getters:{
            getProducts(state){
                return state.products
            },
            getCategories(state){
                return state.categories
            },
            getCart(state){
                return state.cart
            },
            getTotalPrice(state){
                return state.totalPrice
            }
        }

    })
}

export default createStore