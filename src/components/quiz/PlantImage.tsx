interface PlantImageProps {
  imageUrl: string;
  alt: string;
}

export function PlantImage({ imageUrl, alt }: PlantImageProps) {
  return (
    <div className="relative w-full max-w-md mx-auto animate-scale-in">
      <div className="aspect-square overflow-hidden rounded-lg border-2 border-border bg-card shadow-lg">
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-secondary rounded-full opacity-50 -z-10" />
      <div className="absolute -top-2 -left-2 w-12 h-12 bg-primary/20 rounded-full -z-10" />
    </div>
  );
}
