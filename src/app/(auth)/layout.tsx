export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    console.log("Database:", process.env.DATABASE_URL),
    (
      <main>
        <div className="flex h-screen flex-col items-center justify-center">
          {children}
        </div>
      </main>
    )
  );
}
