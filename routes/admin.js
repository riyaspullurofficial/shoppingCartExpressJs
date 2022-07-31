var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  let products=[
    {
      name:"phone11",
      description:"Apple",
      imglink:"https://www.aptronixindia.com/media/catalog/product/i/p/iphone1164gbpurple_2.png",
      price:"RS : 46,999"
  
    },
  
    {
      name:"phone13",
      description:"Apple",
      imglink:"https://m.media-amazon.com/images/I/71gm8v4uPBL._SL1500_.jpg",
      price:"RS : 68,999"
  
    },
    {
      name:"A74 5G",
      description:"Oppo",
      imglink:"https://images-eu.ssl-images-amazon.com/images/I/41iHN9Y07cS._SX300_SY300_QL70_FMwebp_.jpg",
      price:"RS : 14,999"
  
    },
  
    {
      name:"OPPO A31",
      description:"Apple",
      imglink:"https://m.media-amazon.com/images/I/71KCwNV6MuL._SX679_.jpg",
      price:"RS : 11,990"
  
    }
   ];

  res.render('admin/view-products',{dataadmin:true,products})
});


router.get('/add-product',(req,res)=>{
  res.render('admin/add-product')
})

router.post('/add-product',(req,res,err)=>{
  console.log(req.body)

  //file check

  console.log(req.files.file)


})







module.exports = router;
