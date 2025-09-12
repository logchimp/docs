import { type ReactNode, useMemo } from "react";
import { clsx } from "clsx";
import {
  Info as InfoIcon,
  AlertTriangle as WarningIcon,
  XCircle as ErrorIcon,
} from "lucide-react";

interface Props {
  type: "tip" | "warning" | "error";
  title?: string;
  children: ReactNode;
}

export function Alert({ type, title, children }: Props) {
  const defaultTitle = useMemo(() => {
    if (type === "tip") {
      return "Tip";
    } else if (type === "warning") {
      return "Warning";
    } else if (type === "error") {
      return "Error";
    }
  }, [type]);

  return (
    <div
      className={clsx(
        "flex items-start gap-4 rounded-lg p-3",
        type === "tip" && "bg-green-50 border border-green-200",
        type === "warning" && "bg-yellow-50 border border-yellow-200",
        type === "error" && "bg-red-50 border border-red-200",
      )}
    >
      {type === "tip" ? (
        <InfoIcon
          className="size-5 flex-shrink-0 stroke-green-500"
          aria-hidden="true"
        />
      ) : type === "warning" ? (
        <WarningIcon
          className="size-5 flex-shrink-0 stroke-yellow-500"
          aria-hidden="true"
        />
      ) : (
        <ErrorIcon
          className="size-5 flex-shrink-0 stroke-red-500"
          aria-hidden="true"
        />
      )}

      <div className="not-prose">
        <p className="text-black font-medium text-md leading-5">
          {title || defaultTitle}
        </p>

        {children ? (
          <div className="text-sm text-gray-700 mt-2">{children}</div>
        ) : null}
      </div>
    </div>
  );
}
