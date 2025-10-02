import { useId } from "react";
import { clsx } from "clsx";

export function GridPattern({ className }: { className?: string }) {
  const id = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="402"
      height="402"
      viewBox="0 0 400 400"
      aria-hidden="true"
      className={clsx(
        "absolute -z-10",
        "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        className,
      )}
    >
      <title>grid</title>
      <defs>
        {/*change width/height to adjust spacing, stroke to change line color, stroke-width for line thickness*/}
        <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke-width="1" />
        </pattern>
      </defs>

      {/*background*/}
      <rect width="100%" height="100%" fill="#ffffff" />
      {/*grid*/}
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
