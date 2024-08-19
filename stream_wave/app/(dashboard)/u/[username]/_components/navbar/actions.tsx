import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Clapperboard, LogOut } from "lucide-react";
export const Actions = () => {
  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      <Button
        size="sm"
        variant="ghost"
        className="text-muted-foreground hover:text-primary"
      >
        <Link href="/">
          <LogOut className="h-5 w-5 mr-2" />
        </Link>
      </Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
