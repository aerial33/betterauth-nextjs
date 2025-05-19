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
import { authClient } from "@/lib/auth-lib/auth-client";
import { authSchema } from "@/lib/auth-lib/auth-schema";

export default function SignUpPage() {
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof authSchema>) {
    const { name, email, password } = values;
    const { data, error } = await authClient.signUp.email(
      {
        email, // user email address
        password, // user password -> min 8 characters by default
        name,
        callbackURL: "/sign-in",
      },
      {
        onSuccess: () => {
          toast(
            "Inscription réussie, vérifiez votre email pour confirmer votre compte"
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
      title="Créer un compte"
      description="Créez un compte pour accéder à votre espace."
      footer={
        <p className="text-muted-foreground text-sm">
          {"Vous avez déjà un compte ? "}
          <Link href="/sign-in" className="text-blue-500">
            Se connecter
          </Link>
        </p>
      }
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input placeholder="Votre nom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            {"Créer un compte"}
          </Button>
        </form>
      </Form>
    </AuthCard>
  );
}
