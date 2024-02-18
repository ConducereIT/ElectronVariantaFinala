import JuriuText from "../assets/Juriu.svg"
import Carousel from "../components/Carousel.component.tsx";
export const JuriuSection = () => {

    const slides = [
        <div key="1" className="h-full w-full bg-white">Slide 1 content</div>,
        <div key="2" className="h-full w-full bg-white">Slide 1 content</div>,
        <div key="3" className="h-full w-full bg-white">Slide 1 content</div>,
    ];

    return (
        <div className="flex justify-center items-center h-screen relative">
            <img src={JuriuText} className="absolute top-20" alt=""/>
            <Carousel slides={slides} />
        </div>
    );
}
