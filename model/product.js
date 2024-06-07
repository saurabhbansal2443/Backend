import { Schema , model } from "mongoose";

// Schema 

// this is basically a configuratiuon of a model 

const productSchema  = new Schema({
    title: {type : String , required : true ,unique : true } ,
    description :  String,
    price : {type:Number , min :[1,'Not avaialable '],required : true } ,
    discountPercentage : {type:Number , min :[0,'Very Low Discount'],max:[50,"Very High Discount"] },
    rating : {type:Number , min :[0,'Very Low Rating'],max:[5,"Very High Rating"] }, 
    brand : {type : String , required : true } ,
    category : {type : String , required : true } ,
    thumbnail :{type : String , required : true } ,
    images : [String]
  })
  // In this we are telling Product collection follow productSchema 
  const Product = model('Product' , productSchema);
  
  // Now we have to do operations on our Product that will be seen in our database 

  export default Product;
  