"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";

import { useForm } from "react-hook-form";

import Link from "next/link";

import { AuthCard } from "@/components/auth/auth-card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { signInSchema } from "@/lib/auth-schema";

export default function SignInPage() {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    const { email, password } = values;
    const { data, error } = await authClient.signIn.email(
      {
        email,
        password,
        callbackURL: "/dashboard",
      },
      {
        onSuccess: () => {
          toast(
            "Connexion réussie, vous allez être redirigé vers votre espace"
          );
          form.reset();
        },
        onError: (ctx) => {
          toast(ctx.error.message);
          console.log(ctx.error.message);
        },
      }
    );
  }
  return (
    <AuthCard
      title="Connexion"
      description="Connectez-vous à votre compte pour accéder à votre espace."
      footer={
        <p className="text-muted-foreground text-sm">
          Vous n&apos;avez pas de compte ?{" "}
          <Link href="/sign-up" className="text-blue-500">
            S&apos;inscrire
          </Link>
        </p>
      }
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Votre email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Votre mot de passe"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            {"Se connecter"}
          </Button>
        </form>
      </Form>
    </AuthCard>
  );
}
