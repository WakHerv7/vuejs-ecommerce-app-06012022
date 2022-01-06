<template>
  <div v-if="cart.length > 0" id="shopping-cart" class="shopping-cart">
    <h2>Panier</h2>

    <div class="item-group">
      <div :key="product.id" v-for="(product, index) in cart" class="item">
        
        <div class="img-container">
          <img v-bind:src="product.img" alt="">
        </div>

        <div class="item-description">
          <h4>{{ product.description }}</h4>
          <p>{{ product.price }}€</p>
        </div>

        <div class="item-quantity">
          <h6>quantité: {{ product.quantity }}</h6>
          <div class="cart-icons">
            <button @click="cartPlusOne(product)">
              <i class="fa fa-plus"></i>
            </button>
            <button @click="cartMinusOne(product, index)">
              <i class="fa fa-minus"></i>
            </button>
            <button @click="cartRemoveItem(index)">
              <i class="fa fa-trash"></i>
            </button>
          </div>
        </div>      
      </div>
    </div>

    <div class="grand-total">
      <div class="total">
        <h2>Total</h2>
        <h2>{{ cartTotalAmount }}€</h2>
      </div>
      <h6>Total articles : {{ itemTotalAmount }}</h6>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Cart',
    props: {
        // product: Object,
        cart: Array
    },
    computed: {
      cartTotalAmount (){
            let total = 0;
            for (let item in this.cart) {
                total = total + (this.cart[item].quantity * this.cart[item].price)                
            }
            return total;
      },
      itemTotalAmount (){
            let itemTotal = 0;
            for (let item in this.cart) {
                itemTotal = itemTotal + (this.cart[item].quantity)                
            }
            return itemTotal;
      }
    },
    methods: {
        cartPlusOne(prod){
          this.$emit('cart-plus-one', prod)
        },
        cartMinusOne(prod, indx) {
          this.$emit('cart-minus-one', prod, indx)
        },
        cartRemoveItem(id) {
          this.$emit('cart-remove-item', id)
        }        
    }  
}
</script>