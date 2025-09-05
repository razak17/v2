import { Shell } from "../shell";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Shell className="relative flex h-dvh flex-col items-center justify-center overflow-hidden font-mono">
      {children}
    </Shell>
  );
}
