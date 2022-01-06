<template>
  <div class="home-container">
    <h1>Articles Home</h1>

    <input type="search" v-model="searchKey" placeholder="Rechercher..." autocomplete="off" name="search" id="search">
    <span v-if="searchKey && filteredList.length >= 1 ">
      {{ filteredList.length }} résultat<span v-if="filteredList.length >= 2">s</span>
    </span>
    <div class="card-cart-container">
      <div class="card-container">
        <div :key="product.id" v-for="product in filteredList" class="card">
          
          <div class="img-container">
            <img v-bind:src="product.img" alt="">
          </div>
          <div class="card-text">
            <h3>{{ product.description }}</h3>
            <span>{{ product.price }}€</span>
          </div>

          <div class="card-icons">
            <div class="like-container">
              <input @click="setLikeCookie()" type="checkbox" name="checkbox" :id="product.id" :value="product.id" v-model="liked">
              <label  :for="product.id"><i class="fa fa-heart"></i></label>
            </div>
            <div class="add-to-cart">              
              <button @click="addToCart(product)">
                <i class="fa fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- no result message -->
        <div v-if="filteredList.length == []" class="no-result">
          <h3>Désolé</h3>
          <p>Aucun résultat trouvé !</p>
        </div>
      </div>

      <Cart 
      @cart-plus-one="cartPlusOne"
      @cart-minus-one="cartMinusOne" 
      @cart-remove-item="cartRemoveItem"
      :cart="cart"/>

    </div>
  </div>
</template>

<script>
import Products from "../Sdata/Products"
import VueCookies from 'vue-cookies'
import Cart from "./Cart"
// import oneImg2 from '../assets/quarz-luxe~1.jpg'
export default {
    name: 'Home',
    components: {
      Cart
    },
    data: () => {
      return {
        products:Products,
        oneImg: '../assets/quarz-luxe~1.jpg',
        searchKey: '',
        liked: [],
        cart:[]
      }
    },
    computed: {
      filteredList() {
        return this.products.filter((product) => {
          return product.description.toLowerCase().includes(this.searchKey.toLowerCase());
        })
      },
      getLikeCookie() {
        // let cookieValue = JSON.parse($cookies.get('like'));
        let cookieValue = JSON.parse(VueCookies.get('like'));
        console.log('cookieValue = ',cookieValue)
        cookieValue = null ? this.liked = [] : this.liked = cookieValue
      }
    },
    methods: {
      setLikeCookie() {
        document.addEventListener('input', () => {
          setTimeout(() => {
            VueCookies.set('like' , JSON.stringify(this.liked)) ;
            // $cookies.set('like', JSON.stringify(this.liked));
          }, 300);
        })
      },
      addToCart(product) {
        // Check if already in array
        for (let i = 0; i < this.cart.length; i++) {
          if (this.cart[i].id === product.id) {
            return this.cart[i].quantity++
          }
        }
        this.cart.push({
          id: product.id,
          img: product.img,
          description: product.description,
          price: product.price,
          quantity: 1
        })
      },
      cartPlusOne(product){
        product.quantity += 1;
      },
      cartMinusOne(product,indx){
        if (product.quantity == 1) {
          this.cartRemoveItem(indx);
        } else {
          product.quantity -= 1;
        }
      },
      cartRemoveItem(indx){
        this.$delete(this.cart, indx)
      }
    },
    mounted () {
      this.getLikeCookie
    },
}
</script>

<style>

</style>
