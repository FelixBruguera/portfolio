import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const SmallImage = ({ index, image, isSelected, setSelectedImage }) => {
    return (
        <li
        className={`flex w-full max-w-30 border-3 border-transparent hover:border-blue-400 rounded-lg transition-colors ${isSelected && "border-blue-400!"}` }
        onClick={() =>
            document.startViewTransition({
            update: () => setSelectedImage(index),
            types: ["image"],
            })
        }
        >
        <img
            className="aspect-auto w-full rounded-sm hover:cursor-pointer"
            src={image}
            loading="lazy"
        />
        </li>
    )
}

const Arrow = ({ disabled, onClick, children }) => {
    return (
        <button
            className="bg-transparent border-none size-fit not-disabled:bg-blue-800 rounded-3xl p-2 text-white not-disabled:hover:text-stone-200 not-disabled:hover:cursor-pointer disabled:text-gray-600 transition-colors"
            onClick={() =>
                document.startViewTransition({
                update: () => onClick(),
                types: ["image"],
                })
            }
            aria-hidden={disabled}
            disabled={disabled}
            >
            {children}
        </button>
    )

}

const ImageCarousel = ({ images, alt }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const bigImg = useRef(null);
  const previousImage = () =>
    setSelectedImage((selected) => (selected > 0 ? selected - 1 : selected));
  const nextImage = () =>
    setSelectedImage((selected) =>
      selected < images.length - 1 ? selected + 1 : selected,
    );
  const previousButtonHidden = selectedImage === 0;
  const nextButtonHidden = selectedImage >= images.length - 1;
  return (
    <div className="w-full">
      <dialog ref={bigImg} className="m-auto bg-transparent backdrop:backdrop-blur-sm backdrop:bg-black/50">
        <button onClick={() => bigImg.current.close()} title="Close" aria-label="Close">
            <X
              className="text-white border border-transparent rounded-md p-1 hover:cursor-pointer hover:text-red-600 transition-colors h-full w-fit"
            />
        </button>
        <div className="w-full flex gap-2 items-center justify-center">
          <Arrow
            onClick={previousImage}
            disabled={previousButtonHidden}
          >
            <ChevronLeft className="h-full w-fit" />
          </Arrow>
          <img
            className="aspect-auto w-9/10"
            src={images[selectedImage]}
            loading="lazy"
            alt={alt}
          />
          <Arrow
            onClick={nextImage}
            disabled={nextButtonHidden}
          >
            <ChevronRight className="h-full w-fit" />
          </Arrow>
        </div>
      </dialog>
      <div
        className="flex w-full h-full"
        onClick={() => {
          document.startViewTransition({
            update: () => bigImg.current.showModal(),
            types: ["image"],
          });
        }}
      >
        <img
          className="aspect-auto size-fit rounded-lg hover:cursor-pointer"
          src={images[selectedImage]}
          loading="lazy"
          alt={alt}
        />
      </div>
      {images.length > 1 && (
        <ul className="flex items-start justify-start p-0 w-fit max-w-7/10 mt-2 mx-auto gap-1">
          {images.map((image, index) => {
            return (
              <SmallImage key={index} image={image} index={index} isSelected={selectedImage === index} setSelectedImage={setSelectedImage}/>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ImageCarousel;