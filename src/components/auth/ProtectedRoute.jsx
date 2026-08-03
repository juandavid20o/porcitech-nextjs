"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "@/services/auth/authService"; // Importamos tu función del servicio

export default function ProtectedRoute({ children, allowedRoles }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Usamos directamente tu función que busca "sigep_user" en el localStorage
    const user = getCurrentUser();
    console.log("Usuario actual detectado:", user);

    if (!user) {
      router.push("/login");
      return;
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
      alert("Acceso Denegado: Tu rol no tiene permisos para acceder a esta área.");
      router.push("/dashboard");
      return;
    }

    setAuthorized(true);
    setLoading(false);
  }, [router, allowedRoles]);

  if (loading || !authorized) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#09090b]">
        <article className="h-8 w-8 animate-spin rounded-full border-2 border-sena-green border-t-transparent"></article>
      </section>
    );
  }

  return children;
}