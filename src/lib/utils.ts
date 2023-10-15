import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function classNamesMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
