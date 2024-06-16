import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Component() {
  return (
    <div className="flex flex-1 items-center h-screen justify-center rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">Sorry Page Not Found!</h3>
        <p className="text-sm text-muted-foreground max-w-96">
          Sorry We couldn't find the page you are looking for. Perhaps you've mistyped the URL? Be
          sure to check your spelling.
        </p>
        <Button className="mt-4">
          <Link href="/"> Go to Home </Link>
        </Button>
      </div>
    </div>
  );
}
