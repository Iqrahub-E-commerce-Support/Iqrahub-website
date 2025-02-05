interface ImageCardProps {
  src: string;
  alt: string;
}
const ImageCard = (props: ImageCardProps) => {
  const { src, alt } = props;
  return (
    <div className="rounded-3xl">
      <img
        className="w-screen h-screen rounded-3xl object-cover"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default ImageCard;
