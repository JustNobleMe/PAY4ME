import Slider from "react-slick";

export default function Partners() {
   const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };

  const partners: string[] = [
    "paystack",
    "monify",
    "stripe",
    "techstars_",
    "mastercard",
    "larva",
    "nobtech",
  ];

  const partnerDisplay = partners.map(brands => {
    return(
          <div className="inline-block">
            <div className="bg-gray-100 m-4 text-gray-400 text-lg font-bold px-8 py-8 text-center rounded-xl">{brands}</div>
          </div>
    )
  })
  return (
    <section className="px-8 py-12" id="partners">
      <h1 className="text-center font-bold text-4xl mb-4">Our Patners</h1>
      <Slider {...settings}>
        {partnerDisplay}
      </Slider>
    </section>
  );
}
