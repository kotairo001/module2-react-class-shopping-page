import React, {Component} from "react";
const ArrayProduct = [
    {
      img: "images/p1.png",
      name: "Sale",
      price: "$120.00",
      details: "Passage of Lorem Ipsum, you",
    },
    {
      img: "images/p2.png",
      name: "Sale",
      price: "$110.00",
      details: "Passage of Lorem Ipsum, you",
    },
    {
      img: "images/p3.png",
      name: "Sale",
      price: "$150.00",
      details: "Passage of Lorem Ipsum, you",
    },
    {
      img: "images/p4.png",
      name: "Sale",
      price: "$150.00",
      details: "Passage of Lorem Ipsum, you",
    },
    {
      img: "images/p5.png",
      name: "Sale",
      price: "$120.00",
      details: "Passage of Lorem Ipsum, you",
    },
    {
      img: "images/p6.png",
      name: "Sale",
      price: "$150.00",
      details: "Passage of Lorem Ipsum, you",
    },
    {
      img: "images/p7.png",
      name: "Sale",
      price: "$180.00",
      details: "Passage of Lorem Ipsum, you",
    },
    {
      img: "images/p8.png",
      name: "Sale",
      price: "$150.00",
      details: "Passage of Lorem Ipsum, you",
    },
    {
      img: "images/p9.png",
      name: "Sale",
      price: "$120.00",
      details: "Passage of Lorem Ipsum, you",
    },
    {
      img: "images/p10.png",
      name: "Sale",
      price: "$190.00",
      details: "Passage of Lorem Ipsum, you",
    },
    {
      img: "images/p11.png",
      name: "Sale",
      price: "$120.00",
      details: "Passage of Lorem Ipsum, you",
    },
    {
      img: "images/p12.png",
      name: "Sale",
      price: "$150.00",
      details: "Passage of Lorem Ipsum, you",
    },
  ];
class ListProduct extends Component {
    render() {
        return(
<section className="products_section">
        <div className="heading_container">
          <h2>New Products In Store</h2>
          <p>Featured Product Just Arrived</p>
        </div>
        <div className="container layout_padding">
          <div className="product_container">
          {ArrayProduct.map((product) => (
              <a href="">
                <div className="product_box">
                  <div className="product_img-box">
                    <img src={product.img} alt="" />
                    <span> {product.name} </span>
                  </div>
                  <div className="product_detail-box">
                    <span> {product.price} </span>
                    <p>{product.details}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
        )
    }
}
export default ListProduct