// var product = 'Socks'

var app = new Vue({
  el: '#app',
  data: {
    product: 'Scocks',
    image: './assets/img/image1.jpg',
    url: '/example.com',
    product_name:'Test Name',
    inStock:false,
    inventory:10,
    details: [
      'Lorem ipsum',
      'Dolar kalis',
      'Small Test',
      'Big Test'
    ],
    variants: [
      {
        variantId: 2234,
        variatnColor: "green",
        variantImage: './assets/image2.jpg'
      },
      {
        variantId: 2235,
        variatnColor: "blue",
        variantImage: './assets/image3.jpg'
      }    
    ],
    cart:0,
    methods: {
      addToCart: function() {
        this.cart += 1;
      }
    }
  }
})

