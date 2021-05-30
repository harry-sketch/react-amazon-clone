import React from "react";
import "../home/Home.scss";
import MainCard from "../maincard/MainCard";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import SingleCard from "../singlecard/SingleCard";
import UniqueCard from "../uniquecard/UniqueCard";
import Card from "../card/Card";

const Home = () => {
  return (
    <div className="home">
      <div className="home__first">
      <UniqueCard
          heading="Sign in for your best experience"
          sign="Sign in Securely"
          img="./images/picks/pick-6.jpg"
        />
        
        <SingleCard
          heading="Top rated electronics & accessories"
          img="./images/picks/pick-5.jpg"
          cardlink="See more"
          cardicon={<DoubleArrowIcon />}
        />
        <MainCard
          heading="Top Picks For Your Home"
          img1="./images/picks/pick-1.jpg"
          img2="./images/picks/pick-2.jpg"
          img3="./images/picks/pick-3.jpg"
          img4="./images/elec/elec-9.jpg"
          brandhead1="ACs"
          brandhead2="Refrigerators"
          brandhead3="Televisions"
          brandhead4="Tableware"
          cardlink="See more"
          cardicon={<DoubleArrowIcon />}
        />
        <MainCard
          heading="Amazon Brands & More"
          img1="./images/brand/brand-1.jpg"
          img2="./images/brand/brand-2.jpg"
          img3="./images/brand/brand-3.jpg"
          img4="./images/brand/brand-4.jpg"
          brandhead1="Home products"
          brandhead2="Kitchen & dining"
          brandhead3="Daily essentials"
          brandhead4="Clothing essentials"
          cardlink="See more"
          cardicon={<DoubleArrowIcon />}
        />
        
      </div>

      <h3 className="home__heading">Amazon's response to COVID</h3>
      <div className="home__second">
        <Card img="./images/respone/res-1.jpg" />
        <Card img="./images/respone/res-2.jpg" />
        <Card img="./images/respone/res-3.jpg" />
        <Card img="./images/respone/res-4.jpg" />
        <Card img="./images/respone/res-5.jpg" />
        <Card img="./images/respone/res-6.jpg" />
      </div>
      <div className="home__third">
        <SingleCard
          heading="Masks & faceshields"
          img="./images/elec/elec-1.jpg"
          cardlink="See more"
          cardicon={<DoubleArrowIcon />}
        />
        <MainCard
          heading="Electronic devices for your work from home"
          img1="./images/elec/elec-2.jpg"
          img2="./images/elec/elec-3.jpg"
          img3="./images/elec/elec-4.jpg"
          img4="./images/elec/elec-5.jpg"
          brandhead1="Smart watches & fitness tracker"
          brandhead2="Tablets"
          brandhead3="Laptops"
          brandhead4="Monitors"
          cardlink="See more"
          cardicon={<DoubleArrowIcon />}
        />
        <MainCard
          heading="Cookware & dining"
          img1="./images/elec/elec-6.jpg"
          img2="./images/elec/elec-7.jpg"
          img3="./images/elec/elec-8.jpg"
          img4="./images/elec/elec-9.jpg"
          brandhead1="Gas stoves"
          brandhead2="Cookware"
          brandhead3="Kitchen storage"
          brandhead4="Tableware"
          cardlink="See more"
          cardicon={<DoubleArrowIcon />}
        />

        <MainCard
          heading="latest healthcare"
          img1="./images/elec/elec-10.jpg"
          img2="./images/elec/elec-11.jpg"
          img3="./images/elec/elec-12.jpg"
          img4="./images/elec/elec-13.jpg"
          brandhead1="Nano-ionic facial steamers"
          brandhead2="Weighing scales"
          brandhead3="handheld massangers"
          brandhead4="Grooming"
          cardlink="See more"
          cardicon={<DoubleArrowIcon />}
        />
      </div>
      <div className="home__fifth">
        <h3>Explore Everyday Essentials</h3>
        <div className="home__fifthInside">
          <Card img="./images/center/cen-1.jpg" />
          <Card img="./images/center/cen-2.jpg" />
          <Card img="./images/center/cen-3.jpg" />
          <Card img="./images/center/cen-4.jpg" />
          <Card img="./images/center/cen-5.jpg" />
          <Card img="./images/center/cen-6.jpg" />
        </div>
      </div>

      <div className="home__third">
        <MainCard
          heading="Food & Beverages"
          img1="./images/brand/brand-5.jpg"
          img2="./images/brand/brand-6.jpg"
          img3="./images/brand/brand-7.jpg"
          img4="./images/brand/brand-8.jpg"
          brandhead1="Cereals & oats"
          brandhead2="Tea & coffee"
          brandhead3="Spreads & honey"
          brandhead4="Snack store"
          cardlink="See more"
          cardicon={<DoubleArrowIcon />}
        />

        <MainCard
          heading="Styles for Women | Up to 70% off"
          img1="./images/brand/brand-9.jpg"
          img2="./images/brand/brand-10.jpg"
          img3="./images/brand/brand-11.jpg"
          img4="./images/brand/brand-12.jpg"
          brandhead1="Womens's clothing"
          brandhead2="Handbags "
          brandhead3="Watches"
          brandhead4="Fashion jewellery"
          cardlink="See more"
          cardicon={<DoubleArrowIcon />}
        />
        <MainCard
          heading="Styles for Men | Up to 70% off"
          img1="./images/brand/brand-13.jpg"
          img2="./images/brand/brand-14.jpg"
          img3="./images/brand/brand-15.jpg"
          img4="./images/brand/brand-16.jpg"
          brandhead1="Clothing"
          brandhead2="Footwear"
          brandhead3="Watches"
          brandhead4="Bags & luggage"
          cardlink="See more"
          cardicon={<DoubleArrowIcon />}
        />

        <MainCard
          heading="Everyday essentials"
          img1="./images/brand/brand-17.jpg"
          img2="./images/brand/brand-18.jpg"
          img3="./images/brand/brand-19.jpg"
          img4="./images/brand/brand-20.jpg"
          brandhead1="Cleaning essentials"
          brandhead2="Immunity & healthcare"
          brandhead3="Women's personal care"
          brandhead4="Men's grooming"
          cardlink="See more"
          cardicon={<DoubleArrowIcon />}
        />
      </div>
      <div className="home__fifth">
        <h3>Everyday essentials that you might like</h3>
        <div className="home__fifthInside">
          <Card img="./images/mix/mix-1.jpg" />
          <Card img="./images/mix/mix-2.jpg" />
          <Card img="./images/mix/mix-3.jpg" />
          <Card img="./images/mix/mix-4.jpg" />
          <Card img="./images/mix/mix-5.jpg" />
          <Card img="./images/mix/mix-6.jpg" />
        </div>
      </div>
      <div className="home__third">
        <SingleCard
          heading="Masks Combo | Below ₹299"
          img="./images/mix/mix-7.jpg"
          cardlink="See more"
          cardicon={<DoubleArrowIcon />}
        />
        <SingleCard
          heading="Digital thermometers | Starting ₹299"
          img="./images/mix/mix-8.jpg"
          cardlink="See more"
          cardicon={<DoubleArrowIcon />}
        />
        <MainCard
          heading="For your pets"
          img1="./images/mix/mix-9.jpg"
          img2="./images/mix/mix-10.jpg"
          img3="./images/mix/mix-11.jpg"
          img4="./images/mix/mix-12.jpg"
          brandhead1="Dog supplies"
          brandhead2="Cat supplies"
          brandhead3="Aquatic supplies"
          brandhead4="Bird supplies"
          cardlink="See more"
          cardicon={<DoubleArrowIcon />}
        />
        <SingleCard
          heading="Effective dishwashing for Indian cooking"
          img="./images/mix/mix-13.jpg"
          cardlink="See more"
          cardicon={<DoubleArrowIcon />}
        />
      </div>
      <div className="home__sixth">
        <img src="./images/last-banner.jpg" alt="banner" />
      </div>
    </div>
  );
};

export default Home;
