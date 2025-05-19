import { ReactNode } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AuthCardProps {
  title: string;
  description: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function AuthCard({
  title,
  description,
  children,
  footer,
}: AuthCardProps) {
  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <h1 className="mb-4 text-center text-2xl font-bold">Logo</h1>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footer && (
        <CardFooter className="flex justify-center">{footer}</CardFooter>
      )}
    </Card>
  );
}
