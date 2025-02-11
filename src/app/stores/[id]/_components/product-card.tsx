import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import NextImage, { StaticImageData } from "next/image";

type BaseType = {
  className?: string;
};

type ProductImageProps = BaseType & {
  image: StaticImageData;
};

function Image({ image, className }: ProductImageProps) {
  return (
    <NextImage
      src={image}
      alt="Product"
      className={cn("aspect-7/5 object-cover rounded-xl w-full", className)}
      width={100}
      height={100}
    />
  );
}

type DescriptionProps = BaseType & {
  children: React.ReactNode;
};

function Description({ children, className }: DescriptionProps) {
  return (
    <span
      className={cn("text-secondary font-medium text-xs text-wrap", className)}
    >
      {children}
    </span>
  );
}

type ContentProps = BaseType & {
  children: React.ReactNode;
};

function Content({ children, className }: ContentProps) {
  return (
    <CardContent className={cn("flex gap-4 p-0", className)}>
      {children}
    </CardContent>
  );
}

type ProductCardProps = BaseType & {
  children: React.ReactNode;
};

export function ProductCard({ children, className }: ProductCardProps) {
  return (
    <Card className={cn(" border-none shadow-none", className)}>
      {children}
    </Card>
  );
}

type PricingProps = BaseType & {
  children: React.ReactNode;
};

function Pricing({ children, className }: PricingProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-1 text-primary font-semibold text-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

type ProductInfoProps = BaseType & {
  children: React.ReactNode;
};

function ProductInfo({ children, className }: ProductInfoProps) {
  return (
    <div className={cn("flex flex-1 flex-col gap-2 w-full", className)}>
      {children}
    </div>
  );
}

type NameProps = BaseType & {
  children: React.ReactNode;
};

function Name({ children, className }: NameProps) {
  return (
    <h3
      className={cn(
        "text-primary text-xs font-medium leading-[0.8]",
        className
      )}
    >
      {children}
    </h3>
  );
}

type DiscountedPriceProps = BaseType & {
  children: React.ReactNode;
};

function DiscountedPrice({ children, className }: DiscountedPriceProps) {
  return (
    <span className={cn("text-tertiary text-[11px] line-through", className)}>
      {children}
    </span>
  );
}

type PriceProps = BaseType & {
  children: React.ReactNode;
};

function Price({ children, className }: PriceProps) {
  return (
    <span className={cn("text-primary text-xs font-semibold", className)}>
      {children}
    </span>
  );
}

type DiscountTagProps = BaseType & {
  children: React.ReactNode;
};

function DiscountTag({ children, className }: DiscountTagProps) {
  if (children === null) return null;
  return (
    <span
      className={cn(
        " text-xs rounded-full px-1.5 py-1 text-blue-primary bg-blue-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}

ProductCard.Image = Image;
ProductCard.Description = Description;
ProductCard.Content = Content;
ProductCard.Pricing = Pricing;
ProductCard.DiscountedPrice = DiscountedPrice;
ProductCard.Price = Price;
ProductCard.ProductInfo = ProductInfo;
ProductCard.Name = Name;
ProductCard.DiscountTag = DiscountTag;
