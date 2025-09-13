import {
	type AnchorHTMLAttributes,
	type PropsWithChildren,
	useMemo,
} from "react";
import Link from "next/link";
import {logo} from "@/src/lib/layout.shared";

type LProps = AnchorHTMLAttributes<HTMLAnchorElement>;

function L({children, ...props}: PropsWithChildren<LProps>) {
	return (
		<a className="text-gray-500 hover:text-gray-700" {...props}>
			{children}
		</a>
	);
}

export function Footer() {
	const currentYear = useMemo(() => new Date().getFullYear(), []);

	return (
		<footer className="pb-16">
			<div className="grid gap-8 grid-cols-2 lg:grid-cols-4">
				{/* LogChimp */}
				<div className="footer-nav">
					<h6 className="font-medium">LogChimp</h6>

					<ul className="mt-4">
						<li className="mt-2.5">
							<L href="https://logchimp.codecarrot.net">Home</L>
						</li>
						<li className="mt-2.5">
							<L href="https://logchimp.codecarrot.net/mission">Our mission</L>
						</li>
						{/* <li className="mt-2.5">
              <a
                className="text-gray-500 hover:text-gray-700"
                href="/changelog"
              >
                Changelog
              </a>
            </li> */}
						<li className="mt-2.5">
							<L href="https://logchimp.codecarrot.net/partners">Partners</L>
						</li>
						<li className="mt-2.5">
							<L href="https://logchimp.codecarrot.net/team">Team</L>
						</li>
						<li className="mt-2.5">
							<L href="https://logchimp.codecarrot.net/brand">Brand</L>
						</li>
					</ul>
				</div>

				{/* Use Cases */}
				<div className="footer-nav">
					<h6 className="font-medium">Use Cases</h6>

					<ul className="mt-4">
						{/* <li className="mt-2.5">
              <a className="text-gray-500 hover:text-gray-700" href="#">
                Feature request management
              </a>
            </li>
            <li className="mt-2.5">
              <a className="text-gray-500 hover:text-gray-700" href="#">
                Idea management
              </a>
            </li> */}
						<li className="mt-2.5">
							<L href="https://logchimp.codecarrot.net/features/roadmaps">
								Public roadmap
							</L>
						</li>
					</ul>
				</div>

				{/* Getting Started */}
				<div className="footer-nav">
					<h6 className="font-medium">Getting Started</h6>

					<ul className="mt-4">
						{/*<li className="mt-2.5">*/}
						{/*  <Link href="/guide">Guide</Link>*/}
						{/*</li>*/}
						<li className="mt-2.5">
							<Link
								className="text-gray-500 hover:text-gray-700"
								href="/docs/install/getting-started"
							>
								Installation
							</Link>
						</li>
					</ul>
				</div>

				{/* Community */}
				<div className="footer-nav">
					<h6 className="font-medium">Community</h6>

					<ul className="mt-4">
						{/* <li className="mt-2.5">
              <a
                className="text-gray-500 hover:text-gray-700"
                href="https://feedback.logchimp.codecarrot.net"
                target="_blank"
                rel="noreferrer"
                aria-label="Share your feedback"
              >
                Feedback
              </a>
            </li> */}
						<li className="mt-2.5">
							<a
								className="text-gray-500 hover:text-gray-700"
								href="https://github.com/logchimp/logchimp"
								target="_blank"
								rel="noreferrer"
								aria-label="Go to GitHub"
							>
								GitHub
							</a>
						</li>
						<li className="mt-2.5">
							<a
								className="text-gray-500 hover:text-gray-700"
								href="https://discord.com/invite/N34We6e"
								target="_blank"
								rel="noreferrer"
								aria-label="Go to Discord"
							>
								Discord
							</a>
						</li>
						<li className="mt-2.5">
							<a
								className="text-gray-500 hover:text-gray-700"
								href="https://twitter.com/logchimp"
								target="_blank"
								rel="noreferrer"
								aria-label="Go to Twitter"
							>
								Twitter
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="flex items-center justify-between border-t border-gray-200 pt-10 mt-16">
				{logo}

				<p className="text-sm text-gray-700">
					© {currentYear} Shinkly Private Limited (SPL)

					<a
						target="_blank"
						href="https://codecarrot.net"
						aria-label="Go to CodeCarrot"
						rel="noreferrer"
					>
						CodeCarrot
					</a>
					.
				</p>
			</div>
		</footer>
	);
}
