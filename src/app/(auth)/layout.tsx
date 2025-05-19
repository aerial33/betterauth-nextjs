export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="flex h-screen flex-col items-center justify-center">
        {children}
      </div>
    </main>
  );
}
