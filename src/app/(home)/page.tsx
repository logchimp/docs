import Link from "next/link";
import { RocketIcon } from "lucide-react";

export default function HomePage() {
  return (
    <div className="px-4 py-16 lg:py-48 lg:pb-24 max-w-3xl mx-auto">
      <h1 className="block text-4xl font-medium text-center text-gray-900 dark:text-zinc-50 tracking-tight">
        LogChimp Documentation
      </h1>
      <p className="max-w-xl mx-auto px-4 mt-4 text-lg text-center text-gray-500 dark:text-zinc-500">
        Meet a next-generation software turning feedback into a future roadmap.
        LogChimp makes every customer voice count.
      </p>

      <div className="px-6 lg:px-0 mt-12 lg:mt-24 grid sm:grid-cols-2 gap-x-6 gap-y-4">
        {/* Getting started */}
        <div className="link group cursor-pointer p-6 border rounded-2xl bg-white hover:scale-105 transition-all">
          <Link
            href="/docs/install/getting-started"
            className="block text-lg font-medium text-gray-900 dark:text-zinc-50 hover:text-gray-600 dark:hover:text-zinc-400"
          >
            <div className="flex items-center justify-center">
              <RocketIcon className="size-12 md:size-24" aria-hidden="true" />
            </div>

            <h3 className="mt-5 text-gray-900 dark:text-zinc-50 font-medium">
              Quickstart
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-zinc-500">
              Learn how to get started with LogChimp.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
