import { cn } from "@/lib/utils";
import Image from "next/image";

export function AcmNmitLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
        <Image src="/nmit_acm.jpg" alt="NMIT ACM Chapter Logo" width={40} height={40} className="h-10 w-auto rounded-md" />
        <div className="flex flex-col">
             <span className="text-lg font-bold text-primary">NMIT ACM</span>
             <span className="text-xs text-muted-foreground tracking-widest">STUDENT CHAPTER</span>
        </div>
    </div>
  );
}
