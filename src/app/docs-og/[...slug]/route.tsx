import { generateOGImage } from "fumadocs-ui/og";
import { docsSource } from "@/src/lib/source";
import { notFound } from "next/navigation";

export async function GET(
	_req: Request,
	{ params }: RouteContext<"/docs-og/[...slug]">,
) {
	const { slug } = await params;
	const page = docsSource.getPage(slug.slice(0, -1));
	if (!page) notFound();

	return generateOGImage({
		title: page.data.title,
		description: page.data.description,
		site: "My App",
	});
}

export function generateStaticParams() {
	return docsSource.generateParams().map((page) => ({
		...page,
		slug: [...page.slug, "image.png"],
	}));
}
