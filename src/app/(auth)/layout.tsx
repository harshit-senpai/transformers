export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-background">
      {children}
    </main>
  );
}
