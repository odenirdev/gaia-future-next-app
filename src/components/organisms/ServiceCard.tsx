import Image from "next/image";
import { Card } from "../molecules/Card";
import Typography from "../atoms/Typography";
import { ComponentProps } from "react";

type ServiceCardProps = ComponentProps<typeof Card.Root> & {
  imageUrl: string;
  title: string;
  description: string;
};

export const ServiceCard = ({
  imageUrl,
  title,
  description,
  ...props
}: ServiceCardProps) => {
  return (
    <Card.Root
      className="space-y-2 p-8  bg-zinc-950 bg-opacity-45 backdrop-blur-sm"
      {...props}
    >
      <Image
        src={imageUrl}
        alt=""
        className="w-10 h-10"
        width={96}
        height={96}
      />

      <Card.Title as="h4" className="text-zinc-100 font-medium">
        {title}
      </Card.Title>

      <Typography as="p" className="text-zinc-400 md:text-base">
        {description}
      </Typography>
    </Card.Root>
  );
};
