import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Ana_full from "../assets/Ana_full.svg";

export default function NewCarousel() {
  return (
    <>
      {/* For Mobile Phone */}
      <div className="lg:hidden flex justify-center ">
        <h1 className=" mt-10 text-3xl font-bold whitespace-nowrap mb-6 text-frumos text-white">
          Juriu
        </h1>
      </div>
      <div className="lg:hidden mx-8">
        <Carousel
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          emulateTouch={true}
          autoPlay
          interval={5000}
          infiniteLoop
        >
          {/* Slide 1 */}
          <div className=" grid">
            <img src={Ana_full} alt="Image 1" className=" rounded-lg" />
          </div>
          {/* Slide 2 */}
          <div className=" grid">
            <img src={Ana_full} alt="Image 1" className=" rounded-lg" />
          </div>
        </Carousel>
      </div>
      {/* For Desktop */}
      <div className="hidden lg:block ">
        <div className=" flex justify-center ">
          <h1 className="mt-10 text- text-frumos font-bold whitespace-nowrap p-4 mb-6 text-white">
            Juriu
          </h1>
        </div>
        <Carousel
          showStatus={false}
          showThumbs={false}
          emulateTouch={true}
          interval={5000}
          autoPlay
        >
          {/* Slide 1 */}
          <div className=" flex justify-between mt-5 gap-8">
            <div className="w-1/3">
              <img src={Ana_full} alt="Image 1" />
            </div>
            <div className="w-1/3">
              <img src={Ana_full} alt="Image 2" />
            </div>
            <div className="w-1/3">
              <img src={Ana_full} alt="Image 3" />
            </div>
          </div>
          {/* Slide 2 */}
          <div className=" flex justify-between mt-5 gap-8">
            <div className="w-1/3">
              <img src={Ana_full} alt="Image 1" />
            </div>
            <div className="w-1/3">
              <img src={Ana_full} alt="Image 2" />
            </div>
            <div className="w-1/3">
              <img src={Ana_full} alt="Image 3" />
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}
