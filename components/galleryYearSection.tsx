import ScrollTransition from "./scroll-transition";

interface GalleryImage {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
}

interface GalleryYearSectionProps {
  images: GalleryImage[];
  year: string;
}

const GalleryYearSection = ({ images, year }: GalleryYearSectionProps) => {
  return (
    <>
      <h3 className="text-lg font-semibold my-4">{year}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <ScrollTransition key={image.id}>
            <div className="relative hover:shadow-xl transition duration-300">
              <a
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${image.imageUrl})` }}
                />
                <div className="bg-opacity-75 bg-black text-white py-2 text-center">
                  {image.title.toUpperCase()}
                </div>
              </a>
            </div>
          </ScrollTransition>
        ))}
      </div>
    </>
  );
};

export default GalleryYearSection;
