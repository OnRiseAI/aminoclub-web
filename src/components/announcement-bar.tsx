import { CreditCard } from "lucide-react";

export function AnnouncementBar({ message }: { message: string }) {
  return (
    <div className="w-full bg-success-500 text-white">
      <div className="container-page flex items-center justify-center gap-2 py-2 text-[13px] font-medium">
        <CreditCard className="h-4 w-4" strokeWidth={2} />
        <span>{message}</span>
      </div>
    </div>
  );
}
