import { cn } from "@/app/lib/utils";

interface HorizontalDividerProps {
  className?: string
}

export function HorizontalDivider ({className}: HorizontalDividerProps) {
  return (
    <div className={cn('w-full my-8 border-b border-gray-800', className)}/>
  )
}