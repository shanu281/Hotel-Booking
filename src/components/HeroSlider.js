// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import { EffectFade, Autoplay } from "swiper";
// import Img1 from "../assets/img/heroSlider/1.jpg";
// import Img2 from "../assets/img/heroSlider/2.jpg";
// import Img3 from "../assets/img/heroSlider/3.jpg";
// import autoprefixer from "autoprefixer";

// const slides = [
//   {
//     title: "Your Luxury Hotel for Vaccation",
//     bg: Img1,
//     btnText: "SEE OUR ROOMS",
//   },
//   {
//     title: "Your Luxury Hotel for Vaccation",
//     bg: Img2,
//     btnText: "SEE OUR ROOMS",
//   },
//   {
//     title: "Your Luxury Hotel for Vaccation",
//     bg: Img3,
//     btnText: "SEE OUR ROOMS",
//   },
// ];
// const HeroSlider = () => {
//   return (
//     <Swiper
//       modules={[EffectFade, Autoplay]}
//       effect={"fade"}
//       loop={true}
//       autoplay={{ delay: 3000, disableOnInteraction: false }}
//       className="heroSlider h-[600px] lg:h-[860px]"
//     >
//       {slides.map((slide, index) => {
//         const { title, bg, btnText } = slide;
//         return (
//           <SwiperSlide
//             key={index}
//             className="h-full  relative flex justify-center items-center"
//           >
//             <div className="z-20 text-white text-center">
              
//               <div className="uppercase font-tertiary tracking-[6px] mb-5">
//                 Just enjoy and relax
//               </div>
//               <h1 className="text-[32px]  font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6">
//                 {title}
//               </h1>
//               <button className="btn btn-lg btn-primary mx-auto">
//                 {btnText}
//               </button>
//             </div>
//             <div className="absolute top-0 w-full h-full">
//               <img className="object-cover h-full w-full" src={bg} alt="image" />
//             </div>
//             {/* Overlay */}
//             <div className="absolute w-full h-full bg-black/70"></div>
//           </SwiperSlide>
//         );
//       })}
//     </Swiper>
//   );
// };

// export default HeroSlider;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
 import "swiper/css";
 import "swiper/css/effect-fade";
 import { EffectFade, Autoplay } from "swiper";
import Img1 from "../assets/img/heroSlider/1.jpg";
import Img2 from "../assets/img/heroSlider/2.jpg";
 import Img3 from "../assets/img/heroSlider/3.jpg";
 import autoprefixer from "autoprefixer";

 const slides = [
     {
       title: "Your Luxury Hotel for Vaccation",
       bg: Img1,
       btnText: "SEE OUR ROOMS",
     },
     {
       title: "Your Luxury Hotel for Vaccation",
       bg: Img2,
     btnText: "SEE OUR ROOMS",
     },
     {
       title: "Your Luxury Hotel for Vaccation",
       bg: Img3,
       btnText: "SEE OUR ROOMS",
     },
    ];

const HeroSlider = () => {
  return (
  <Swiper className="heroSlider h-[600px] lg:h-[860px]">
    {
      slides.map((slide, index) => {
        const {title, bg, btnText} = slide;
        return <SwiperSlide className="h-full bg-pink-300 relative flex justify-center items-center" key={index}>
          <div className="z-20 text-white">
            <div>Just enjoys and relax</div>
          </div>
          <div className="absolute top-0 w-full h-full">
            <img className="object-cover h-full w-full" src={bg} />
          </div>
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/70"></div>
        </SwiperSlide>
      })
    }
  </Swiper>
  )
  }
  export default HeroSlider;