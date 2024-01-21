import Image from "next/image";

const FakeCarousel = () => {
    return(
    <div className = "flex justify-center items-center pt-24 image-container" >
        <Image
            src="/carousel/arts_crafts.jpeg"
            width={650}
            height={700}
            // layout="fill"
            alt="carousel"
            className="rounded-xl"
          />

    </div>
    )
}
export default FakeCarousel;

