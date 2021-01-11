const express = require("express")
/* const mysql = require("mysql") */
const session = require("express-session")

const app = express()
app.use(session({
  secret: "p4ketix"
}))

/* var connection = mysql.createConnection({
  host: 'localhost',
  port: '8111',
  user: 'root',
  password: '',
  database: 'paketix',
  multipleStatements: true
});

connection.connect(); */





app.get("/", (req, res) => {
  
/*   let cart=[]
  if(req.session.cart){
    cart=req.session.cart
  }
  connection.query('SELECT * FROM products; SELECT * FROM categories', function (error, results, fields) { */
    res.status(200).json({
      products: "orhan",
      categories: "orhan",
      cart:{
        items:"orhan",
        totalPrice:"orhan"
      }
    })
/* 
  }); */
})

/* app.post("/add-to-cart", (req, res) => {
  let product = req.body.product

  let cart = []

  if (req.session.cart) {
    cart = req.session.cart
  }

  if (cart.length > 0) {
    let itemIndex = cart.findIndex(item => item.idproducts == product.idproducts)
    if (itemIndex > -1) {
      cart[itemIndex].count += product.count
      cart[itemIndex].totalPrice = cart[itemIndex].count * cart[itemIndex].price
    } else {
      cart.push({
        ...product,
        totalPrice: product.count * product.price
      })
    }
  } else {
    cart.push({
      ...product,
      totalPrice: product.count * product.price
    })
  }



  req.session.cart = cart
  console.log(cart)

  res.status(200).json({
    cart:{
      items:req.session.cart,
      totalPrice:0.0
    }
  })
}) */






module.exports = {
  path: "/api",
  handler: app
}
