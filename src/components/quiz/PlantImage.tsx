interface PlantImageProps {
  imageUrl: string;
  alt: string;
}

export function PlantImage({ imageUrl, alt }: PlantImageProps) {
  return (
    <div className="relative w-full max-w-sm mx-auto opacity-0 animate-scale-in">
      <div className="aspect-square overflow-hidden rounded-2xl bg-muted shadow-card">
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
