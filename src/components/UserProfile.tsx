import { auth, signOut } from '@/auth';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export async function UserProfile() {
  const session = await auth();
  if (!session?.user) return null;
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>YB</AvatarFallback>
      </Avatar>
      <h3 className="text-xl font-bold tracking-tight">{session?.user.name}</h3>
      <p className="text-sm text-muted-foreground">{session?.user.email} </p>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  );
}
