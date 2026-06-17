"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { useUser } from "@/lib/context/user-context";
import { getLevelForXp } from "@/lib/types";
import { Trophy, Medal, TrendingUp, BookOpen } from "lucide-react";

interface RankEntry {
  id: string;
  name: string;
  xp: number;
  level: number;
  streak_days: number;
  exercise_count: number;
}

export default function Ranking() {
  const { profile } = useUser();
  const [entries, setEntries] = useState<RankEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data: profiles } = await supabase
        .from("user_profiles")
        .select("id, name, xp, level, streak_days")
        .order("xp", { ascending: false })
        .limit(20);

      if (!profiles) {
        setLoading(false);
        return;
      }

      const ids = profiles.map((p: { id: string }) => p.id);
      const { data: counts } = await supabase
        .from("exercise_history")
        .select("user_id")
        .in("user_id", ids);

      const countMap = new Map<string, number>();
      (counts ?? []).forEach((row: { user_id: string }) => {
        countMap.set(row.user_id, (countMap.get(row.user_id) ?? 0) + 1);
      });

      setEntries(
        (profiles as { id: string; name: string; xp: number; level: number; streak_days: number }[]).map((p) => ({
          ...p,
          exercise_count: countMap.get(p.id) ?? 0,
        }))
      );
      setLoading(false);
    }
    load();
  }, []);

  const myRank = entries.findIndex((e) => e.id === profile?.id) + 1;

  const medalIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-4 h-4" style={{ color: "#D4A74E" }} />;
    if (rank === 2) return <Medal className="w-4 h-4 text-slate-400" />;
    if (rank === 3) return <Medal className="w-4 h-4" style={{ color: "#b87333" }} />;
    return (
      <span className="text-xs font-bold text-muted-foreground w-4 text-center">
        {rank}
      </span>
    );
  };

  return (
    <main className="min-h-screen" style={{ background: "#F1F5FB" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Header */}
        <div
          className="rounded-2xl p-6 text-white"
          style={{ background: "#1E3A5F" }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="w-5 h-5" style={{ color: "#D4A74E" }} />
            <h1 className="text-xl font-bold">Ranking</h1>
          </div>
          <p className="text-white/60 text-sm">
            Veja os estudantes mais dedicados da plataforma.
          </p>
          {profile && myRank > 0 && (
            <div
              className="mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
              style={{ background: "rgba(212,167,78,0.15)", color: "#D4A74E" }}
            >
              Sua posição: #{myRank}
            </div>
          )}
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-border overflow-hidden">
          <div className="grid grid-cols-[auto,1fr,auto,auto,auto] gap-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border px-4 py-3">
            <div className="w-8">#</div>
            <div>Estudante</div>
            <div className="w-16 text-right hidden sm:block">Exercícios</div>
            <div className="w-20 text-right hidden sm:block">XP</div>
            <div className="w-16 text-right">Nível</div>
          </div>

          {loading ? (
            <div className="py-12 text-center text-sm text-muted-foreground">
              Carregando ranking...
            </div>
          ) : entries.length === 0 ? (
            <div className="py-12 text-center">
              <BookOpen className="w-8 h-8 text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">
                Nenhum estudante no ranking ainda. Seja o primeiro!
              </p>
            </div>
          ) : (
            <div>
              {entries.map((entry, idx) => {
                const rank = idx + 1;
                const levelDef = getLevelForXp(entry.xp);
                const isMe = entry.id === profile?.id;
                return (
                  <div
                    key={entry.id}
                    className={`grid grid-cols-[auto,1fr,auto,auto,auto] gap-0 items-center px-4 py-3 border-b border-border last:border-0 transition-colors ${
                      isMe ? "bg-accent/30" : "hover:bg-secondary/30"
                    }`}
                  >
                    <div className="w-8 flex items-center">{medalIcon(rank)}</div>
                    <div>
                      <div className="font-medium text-sm flex items-center gap-2">
                        {entry.name}
                        {isMe && (
                          <span
                            className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
                            style={{
                              background: "rgba(30,58,95,0.1)",
                              color: "#1E3A5F",
                            }}
                          >
                            você
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {entry.streak_days > 0 && (
                          <span>{entry.streak_days}d seguidos · </span>
                        )}
                        {levelDef.title}
                      </div>
                    </div>
                    <div className="w-16 text-right text-sm text-muted-foreground hidden sm:block">
                      {entry.exercise_count}
                    </div>
                    <div className="w-20 text-right hidden sm:block">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(212,167,78,0.1)",
                          color: "#B8913A",
                        }}
                      >
                        {entry.xp} XP
                      </span>
                    </div>
                    <div className="w-16 text-right">
                      <div
                        className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold"
                        style={{ background: "#1E3A5F", color: "#D4A74E" }}
                      >
                        {entry.level}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="bg-white rounded-xl border border-border p-4 flex items-start gap-3">
          <TrendingUp className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            O ranking é baseado no total de XP acumulado. Complete exercícios com alta
            pontuação para subir mais rápido. Casos mais difíceis rendem mais XP.
          </p>
        </div>
      </div>
    </main>
  );
}
