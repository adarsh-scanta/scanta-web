import $ from "jquery";
import "./styles.css";
import "antd/dist/antd.css";
import { useEffect } from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "300px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const ProductArt = () => (
  useEffect(() => {
    $(".option").on("click", function () {
      $(".option").removeClass("active");
      $(this).addClass("active");
    });
  }, []),
  (
    <>
      <div className="small-art">
        <Carousel>
          <div
            className="option "
            // style={{
            //   background:
            //     'url("/img/icons/product1.png") no-repeat center center',
            //   backgroundSize: "cover",
            // }}
            // style="--optionBackground:url(https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg);"
          >
            <img
              src="/img/icons/product1.png"
              width="100%"
              style={{ borderRadius: "20px" }}
              alt="product"
            />
          </div>
          <div
            className="option "
            // style={{
            //   background:
            //     'url("/img/icons/product1.png") no-repeat center center',
            //   backgroundSize: "cover",
            // }}
            // style="--optionBackground:url(https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg);"
          >
            <img
              src="/img/icons/product2.png"
              width="100%"
              style={{ borderRadius: "20px" }}
              alt="product"
            />
          </div>
          <div
            className="option "
            // style={{
            //   background:
            //     'url("/img/icons/product1.png") no-repeat center center',
            //   backgroundSize: "cover",
            // }}
            // style="--optionBackground:url(https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg);"
          >
            <img
              src="/img/icons/product3.png"
              width="100%"
              style={{ borderRadius: "20px" }}
              alt="product"
            />
          </div>
          <div
            className="option "
            // style={{
            //   background:
            //     'url("/img/icons/product1.png") no-repeat center center',
            //   backgroundSize: "cover",
            // }}
            // style="--optionBackground:url(https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg);"
          >
            <img
              src="/img/icons/product4.png"
              width="100%"
              style={{ borderRadius: "20px" }}
              alt="product"
            />
          </div>
          <div
            className="option "
            // style={{
            //   background:
            //     'url("/img/icons/product1.png") no-repeat center center',
            //   backgroundSize: "cover",
            // }}
            // style="--optionBackground:url(https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg);"
          >
            <img
              src="/img/icons/product5.png"
              width="100%"
              style={{ borderRadius: "20px" }}
              alt="product"
            />
          </div>
        </Carousel>
      </div>

      <div className="options">
        <div
          className="option "
          style={{
            background:
              'url("/img/icons/product1.png") no-repeat center center',
            backgroundSize: "cover",
          }}
          // style="--optionBackground:url(https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg);"
        >
          <div className="shadow"></div>
          {/* <div className="label">
          <div className="icon">
            <i className="fas fa-walking"></i>
          </div>
          <div className="info">
            <div className="main">Blonkisoaz</div>
            <div className="sub">Omuke trughte a otufta</div>
          </div>
        </div> */}
        </div>
        <div
          className="option"
          style={{
            background:
              'url("/img/icons/product2.png")  no-repeat center center',
            backgroundSize: "cover",
          }}
          // style="--optionBackground:url(https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg);"
        >
          <div className="shadow"></div>
          {/* <div className="label">
          <div className="icon">
            <i className="fas fa-snowflake"></i>
          </div>
          <div className="info">
            <div className="main">Oretemauw</div>
            <div className="sub">Omuke trughte a otufta</div>
          </div>
        </div> */}
        </div>
        <div
          className="option active"
          style={{
            background:
              'url("/img/icons/product3.png")  no-repeat center center',
            backgroundSize: "cover",
          }}
          // style="--optionBackground:url(https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg);"
        >
          <div className="shadow"></div>
          {/* <div className="label">
          <div className="icon">
            <i className="fas fa-tree"></i>
          </div>
          <div className="info">
            <div className="main">Iteresuselle</div>
            <div className="sub">Omuke trughte a otufta</div>
          </div>
        </div> */}
        </div>
        <div
          className="option"
          style={{
            background:
              'url("/img/icons/product4.png")  no-repeat center center',
            backgroundSize: "cover",
          }}
          // style="--optionBackground:url(https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg);"
        >
          <div className="shadow"></div>
          {/* <div className="label">
          <div className="icon">
            <i className="fas fa-tint"></i>
          </div>
          <div className="info">
            <div className="main">Idiefe</div>
            <div className="sub">Omuke trughte a otufta</div>
          </div>
        </div> */}
        </div>
        <div
          className="option"
          style={{
            background:
              'url("/img/icons/product5.png")  no-repeat center center',
            backgroundSize: "cover",
          }}
          // style="--optionBackground:url(https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg);"
        >
          <div className="shadow"></div>
          {/* <div className="label">
          <div className="icon">
            <i className="fas fa-sun"></i>
          </div>
          <div className="info">
            <div className="main">Inatethi</div>
            <div className="sub">Omuke trughte a otufta</div>
          </div>
        </div> */}
        </div>
      </div>
    </>
  )
);

export default ProductArt;
