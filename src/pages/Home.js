import React, { useContext } from "react";
//components
import Carousel from "../components/Carousel";
import CategoryBlock from "../components/CategoryBlock";
import News from "../components/News";
import NewProducts from "../components/NewProducts";
import Special from "../components/Special";
import Menbership from "../components/Menbership";
import MembershipRank from "../components/MembershipRank";
import SkeletonHome from "../components/SkeletonHome";
//context
import { ProductContext } from "../contexts/ProductContext";
//assets
import slide1 from "../assets/slide/slide1.png";
import slide2 from "../assets/slide/slide2.png";
import slide3 from "../assets/slide/slide3.png";
import slide4 from "../assets/slide/slide4.png";
import slide5 from "../assets/slide/slide5.png";
import slide6 from "../assets/slide/slide6.png";

const Home = () => {
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6];
  const { loading } = useContext(ProductContext);
  return (
    <>
      {loading ? (
        <SkeletonHome />
      ) : (
        <div>
          {/* Carousel */}
          <Carousel slides={slides} />
          {/* 產品分類*/}
          <CategoryBlock />
          {/* 最新活動消息*/}
          <News />
          {/* new arrival */}
          <NewProducts />
          {/* 特輯一覽 */}
          <Special />
          {/* 會員一覽 */}
          <Menbership />
          <MembershipRank />
        </div>
      )}
    </>
  );
};
export default Home;
