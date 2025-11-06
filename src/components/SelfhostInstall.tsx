import Link from "next/link";
import Image from "next/image";

const self: Item[] = [
  {
    title: "Docker",
    image: "/images/logos/docker-logo.svg",
    link: "/self-hosting/docker",
    label: "Self host",
  },
];

const oneclick: Item[] = [
  {
    title: "Railway",
    image: "/images/logos/railway-logo.svg",
    link: "/self-hosting/deployments/railway",
    label: "One click deploy",
  },
  {
    title: "Render",
    image: "/images/logos/render-logo.svg",
    link: "/self-hosting/deployments/render",
    label: "One click deploy",
  },
];

export function SelfhostInstall() {
  return (
    <div className="not-prose grid gap-8 grid-cols-1 md:grid-cols-2">
      {self.map((product) => (
        <Item
          key={product.title}
          title={product.title}
          image={product.image}
          label={product.label}
          link={product.link}
        />
      ))}
    </div>
  );
}

export function OneClickInstall() {
  return (
    <div className="not-prose grid gap-8 grid-cols-1 md:grid-cols-2">
      {oneclick.map((product) => (
        <Item
          key={product.title}
          title={product.title}
          image={product.image}
          label={product.label}
          link={product.link}
        />
      ))}
    </div>
  );
}

interface Item {
  title: string;
  image: string;
  link: string;
  label?: string;
}

function Item({ title, image, link, label }: Item) {
  return (
    <Link
      className="py-8 px-4 border border-gray-200 rounded-md text-center flex flex-col items-center bg-white hover:shadow-sm"
      href={link}
    >
      <div className="h-16">
        <Image src={image} alt={title} width={64} height={64} loading="lazy" />
      </div>
      <div className="text-gray-800 text-2xl tracking-tight font-medium mt-4">
        {title}
      </div>
      {label && <p className="text-zinc-500">{label}</p>}
    </Link>
  );
}
