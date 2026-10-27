import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";

const self: Item[] = [
  {
    title: "Docker",
    image: "/images/logos/docker-icon.svg",
    link: "/self-hosting/docker",
    label: "Install LogChimp using Docker Compose with all required services.",
  },
  {
    title: "Coolify",
    image: "/images/logos/coolify-icon.svg",
    link: "/self-hosting/deployments/coolify",
    label:
      "Deploy LogChimp using Coolify's platform for simplified container management.",
  },
];

const oneclick: Item[] = [
  // Official
  {
    title: "Railway",
    image: "/images/logos/railway-icon.svg",
    link: "/self-hosting/deployments/railway",
    label: "One click deploy",
    official: true,
  },
  {
    title: "Render",
    image: "/images/logos/render-icon.svg",
    link: "/self-hosting/deployments/render",
    label: "One click deploy",
    official: true,
  },
  // Community-driven
  {
    title: "Easypanel",
    image: "/images/logos/easypanel-icon.svg",
    link: "https://easypanel.io/templates/logchimp",
    label: "",
  },
  {
    title: "Railyard",
    image: "/images/logos/railyard-icon.svg",
    link: "https://railyard.run/templates/logchimp",
    label: "",
  },
];

export function InstallSelfManaged() {
  return (
    <div className="not-prose grid gap-8 grid-cols-1 md:grid-cols-2">
      {self.map((product) => (
        <FeaturedItem
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

export function OneClickOfficialInstalls() {
  return (
    <div className="not-prose grid gap-8 grid-cols-1 md:grid-cols-2">
      {(oneclick || [])
        .filter((i) => i.official === true)
        .map((product) => (
          <FeaturedItem
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

export function OneClickUnofficialInstalls() {
  return (
    <div className="not-prose grid gap-8 grid-cols-1 md:grid-cols-2">
      {(oneclick || [])
        .filter((i) => i?.official === false || i.official === undefined)
        .map((product) => (
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
  featured?: boolean;
  official?: boolean;
}

function FeaturedItem({ title, image, link, label }: Item) {
  return (
    <Link
      className="py-8 px-4 border border-neutral-300 rounded-lg text-center flex flex-col items-center bg-white hover:shadow-xs"
      href={link}
    >
      <div className="h-16">
        <Image src={image} alt={title} width={64} height={64} loading="lazy" />
      </div>
      <div className="text-gray-800 text-2xl tracking-tight font-medium mt-4">
        {title}
      </div>
      {label && <p className="text-neutral-500">{label}</p>}
    </Link>
  );
}

function Item({ title, image, link, label }: Item) {
  const isExternal = useMemo(() => link.startsWith("http"), [link]);

  return (
    <Link
      className="px-4 py-2 border border-neutral-300 rounded-lg flex items-center justify-between bg-white hover:shadow-xs"
      href={link}
      target={isExternal ? "_blank" : "_self"}
    >
      <div className="flex items-center space-x-4">
        <div className="size-10">
          <Image
            src={image}
            alt={title}
            width={64}
            height={64}
            loading="lazy"
          />
        </div>
        <div className="text-left">
          <div className="text-gray-800 text- tracking-tight font-medium">
            {title}
          </div>
          <p className="text-neutral-500 text-sm">
            {label ? label : `Deploy LogChimp on ${title}.`}
          </p>
        </div>
      </div>

      <div>
        {isExternal ? (
          <div aria-hidden="true">
            <ArrowUpRightIcon className="size-5 stroke-neutral-600" />
          </div>
        ) : null}
      </div>
    </Link>
  );
}
