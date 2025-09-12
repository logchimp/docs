import { generateOGImage } from "fumadocs-ui/og";
import { guideSource } from "@/src/lib/source";
import { notFound } from "next/navigation";

export async function GET(
	_req: Request,
	{ params }: RouteContext<"/guide-og/[...slug]">,
) {
	const { slug } = await params;
	const page = guideSource.getPage(slug.slice(0, -1));
	if (!page) notFound();

	return generateOGImage({
		title: page.data.title,
		description: page.data.description,
		site: "My App",
	});
}

export function generateStaticParams() {
	return guideSource.generateParams().map((page) => ({
		...page,
		slug: [...page.slug, "image.png"],
	}));
}
