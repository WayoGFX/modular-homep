import { cn } from "@/lib/utils"
import Image from "next/image"

export function Logo({ className, width = 120, height = 40 }: { className?: string, width?: number, height?: number }) {
  return (
    <div className={cn("flex items-center text-foreground", className)}>
      <Image src="/logo.webp" alt="Company Logo" width={width} height={height} />
    </div>
  )
}
