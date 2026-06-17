"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, User, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUser } from "@/lib/context/user-context";
import { getLevelForXp, LEVELS } from "@/lib/types";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/treino", label: "Treinar", icon: BookOpen },
  { href: "/ranking", label: "Ranking", icon: Trophy },
  { href: "/perfil", label: "Perfil", icon: User },
];

export function AppNav() {
  const pathname = usePathname();
  const { profile } = useUser();

  const levelDef = profile ? getLevelForXp(profile.xp) : LEVELS[0];
  const nextLevel = LEVELS.find((l) => l.level === levelDef.level + 1) ?? levelDef;
  const progressPct = profile
    ? Math.min(
        100,
        Math.round(
          ((profile.xp - levelDef.minXp) / (nextLevel.minXp - levelDef.minXp)) * 100
        )
      )
    : 0;

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: "#1E3A5F",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center font-bold text-sm"
            style={{ background: "#D4A74E", color: "#1E3A5F" }}
          >
            I
          </div>
          <span className="font-semibold text-white text-sm tracking-tight hidden sm:block">
            Inicial
          </span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-1">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                  active
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:block">{label}</span>
              </Link>
            );
          })}
        </nav>

        {/* XP mini bar */}
        {profile && (
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <div className="text-right">
              <div className="text-xs text-white/50">Nível {profile.level}</div>
              <div className="text-xs text-white font-medium">{levelDef.title}</div>
            </div>
            <div className="w-24 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full xp-bar transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <div className="text-xs text-white/60">{profile.xp} XP</div>
          </div>
        )}
      </div>
    </header>
  );
}
