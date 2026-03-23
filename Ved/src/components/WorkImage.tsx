import { useEffect, useMemo, useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image?: string;
  images?: string[];
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fallbackImage = "/images/placeholder.webp";

  const galleryImages = useMemo(() => {
    if (props.images && props.images.length > 0) {
      return props.images;
    }
    if (props.image) {
      return [props.image];
    }
    return [fallbackImage];
  }, [props.image, props.images]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [galleryImages.length]);

  useEffect(() => {
    if (galleryImages.length <= 1) return;
    const timer = window.setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, [galleryImages]);

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target="_blank"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <img
          src={galleryImages[currentImageIndex]}
          alt={`${props.alt ?? "Project"} preview ${currentImageIndex + 1}`}
        />
        {galleryImages.length > 1 && (
          <div className="work-image-dots" data-cursor="disable">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`work-image-dot ${
                  index === currentImageIndex ? "work-image-dot-active" : ""
                }`}
                aria-label={`Show image ${index + 1}`}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentImageIndex(index);
                }}
              />
            ))}
          </div>
        )}
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </a>
    </div>
  );
};

export default WorkImage;
