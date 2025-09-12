import Link from "next/link";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { logo } from "@/src/lib/layout.shared";

export default function NotFound() {
  return (
    <HomeLayout
      nav={{
        title: (
          <div className="flex items-center gap-2.5">
            {logo}
            <span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">
              LogChimp Documentation
            </span>
          </div>
        ),
      }}
      className="text-center py-32 justify-center"
    >
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-6xl font-bold text-fd-muted-foreground">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-fd-muted-foreground max-w-md">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="mt-4 px-4 py-2 rounded-lg bg-fd-primary text-fd-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </div>
    </HomeLayout>
  );
}
