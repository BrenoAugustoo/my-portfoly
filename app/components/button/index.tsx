import { cn } from "@/app/lib/utils"
import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button 
      className={cn(
        'bg-emerald-600 py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 hover:bg-emerald-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      {...props} 
    >
      {children}
    </button>
  )
}