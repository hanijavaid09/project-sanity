import { defineQuery } from "next-sanity";

export const allproducts = defineQuery(`
    *[_type == "products"]{
      _id,
      name,
      description,
      price,
      discountPercentage,
      priceWithoutDiscount,
      rating,
      ratingCount,
      tags,
      sizes,
      image {
        asset->{
          url
        }
      }
    }
  `);
  

export const forpro = defineQuery(`
  *[_type == "products"]{
      _id,
      name,
      description,
      price,
      discountPercentage,
      priceWithoutDiscount,
      rating,
      ratingCount,
      tags,
      sizes,
      image {
        asset->{
          url
        }
      }
    }
  `);