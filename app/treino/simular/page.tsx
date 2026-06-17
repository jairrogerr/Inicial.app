"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  CheckSquare,
  Square,
  FileText,
  Lightbulb,
  Send,
  BookOpen,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTraining } from "@/lib/context/training-context";

export default function Simular() {
  const router = useRouter();
  const { state, setPetitionText, toggleChecklist, evaluate } = useTraining();
  const { currentCase, petitionText, checklist } = state;
  const [showHints, setShowHints] = useState(false);

  if (!currentCase) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#F1F5FB" }}>
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Nenhum caso selecionado.</p>
          <Button
            onClick={() => router.push("/treino")}
            style={{ background: "#1E3A5F" }}
            className="text-white"
          >
            Escolher um caso
          </Button>
        </div>
      </div>
    );
  }

  const wordCount = petitionText.trim().split(/\s+/).filter(Boolean).length;
  const checkedCount = checklist.filter((i) => i.checked).length;

  const handleEvaluate = () => {
    evaluate();
    router.push("/treino/avaliacao");
  };

  const difficultyColors: Record<string, string> = {
    Fácil: "text-emerald-700 bg-emerald-50",
    Médio: "text-amber-700 bg-amber-50",
    Difícil: "text-rose-700 bg-rose-50",
  };

  return (
    <div
      className="flex flex-col"
      style={{ height: "calc(100vh - 56px)", background: "#F1F5FB" }}
    >
      {/* Top bar */}
      <div
        className="border-b flex items-center justify-between px-4 sm:px-6 h-12 shrink-0"
        style={{ background: "#fff", borderColor: "#e2e8f0" }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <BookOpen className="w-4 h-4 shrink-0" style={{ color: "#1E3A5F" }} />
          <span className="font-medium text-sm truncate">{currentCase.title}</span>
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full hidden sm:inline-flex ${
              difficultyColors[currentCase.difficulty]
            }`}
          >
            {currentCase.difficulty}
          </span>
          <span className="text-xs text-muted-foreground hidden md:inline">
            {currentCase.area}
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setShowHints(!showHints)}
            className={`hidden sm:flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition-colors ${
              showHints ? "border-amber-300 bg-amber-50 text-amber-700" : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            <Lightbulb className="w-3.5 h-3.5" />
            Dicas
          </button>
          <Button
            size="sm"
            onClick={handleEvaluate}
            className="text-white text-sm"
            style={{ background: "#1E3A5F" }}
          >
            <Send className="w-3.5 h-3.5 mr-1.5" />
            Avaliar
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left: Case info */}
        <div
          className="w-[300px] shrink-0 border-r flex flex-col hidden lg:flex"
          style={{ borderColor: "#e2e8f0", background: "#fff" }}
        >
          <div className="p-4 border-b" style={{ borderColor: "#e2e8f0" }}>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Fatos do caso
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {currentCase.description}
            </p>
          </div>
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-3">
              {currentCase.facts.map((fact, i) => (
                <div key={i} className="flex gap-2.5">
                  <span
                    className="mt-0.5 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "#1E3A5F", color: "#D4A74E" }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-xs text-muted-foreground leading-relaxed">{fact}</p>
                </div>
              ))}
            </div>

            {showHints && (
              <div className="mt-5 pt-4 border-t" style={{ borderColor: "#e2e8f0" }}>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 mb-2">
                  <Lightbulb className="w-3.5 h-3.5" />
                  Dicas
                </div>
                {currentCase.hints.map((hint, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <span className="text-amber-500 mt-0.5 shrink-0">·</span>
                    <p className="text-xs text-muted-foreground">{hint}</p>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
        </div>

        {/* Center: Editor */}
        <div className="flex-1 flex flex-col min-w-0">
          <div
            className="px-4 py-2.5 border-b flex items-center gap-3"
            style={{ borderColor: "#e2e8f0", background: "#fff" }}
          >
            <FileText className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs font-medium">Editor</span>
            <span className="text-xs text-muted-foreground">
              {wordCount} {wordCount === 1 ? "palavra" : "palavras"}
            </span>
            <div className="ml-auto flex items-center gap-1.5">
              <div
                className="h-1 rounded-full transition-all duration-300"
                style={{
                  width: "60px",
                  background: "#e2e8f0",
                }}
              >
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.min(100, (wordCount / 300) * 100)}%`,
                    background: wordCount >= 200 ? "#16a34a" : "#D4A74E",
                  }}
                />
              </div>
              <span className="text-xs text-muted-foreground">
                {wordCount >= 200 ? "Bom comprimento" : "Desenvolva mais"}
              </span>
            </div>
          </div>
          <div className="flex-1 p-4 sm:p-6">
            <textarea
              className="w-full h-full resize-none rounded-xl border bg-white p-5 text-sm leading-relaxed focus:outline-none focus:ring-1 placeholder:text-muted-foreground/50"
              style={{
                borderColor: "#e2e8f0",
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: "14px",
                lineHeight: "1.75",
              }}
              placeholder={`EXMO(A). SR(A). DOUTOR(A) JUIZ(A) DE DIREITO

[Qualificação das partes]

DOS FATOS

[Exposição detalhada dos fatos...]

DO DIREITO

[Fundamentação jurídica...]

DOS PEDIDOS

Diante do exposto, requer:
a) ...
b) ...

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ ...

Nestes termos, pede deferimento.

[Cidade], [data].`}
              value={petitionText}
              onChange={(e) => setPetitionText(e.target.value)}
            />
          </div>
        </div>

        {/* Right: Checklist */}
        <div
          className="w-[240px] shrink-0 border-l flex flex-col hidden md:flex"
          style={{ borderColor: "#e2e8f0", background: "#fff" }}
        >
          <div className="p-4 border-b" style={{ borderColor: "#e2e8f0" }}>
            <div className="flex items-center justify-between mb-0.5">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Checklist
              </div>
              <span className="text-xs font-medium" style={{ color: "#1E3A5F" }}>
                {checkedCount}/6
              </span>
            </div>
            <div
              className="h-1 rounded-full mt-2"
              style={{ background: "#e2e8f0" }}
            >
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${(checkedCount / 6) * 100}%`,
                  background: "#1E3A5F",
                }}
              />
            </div>
          </div>
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-1">
              {checklist.map((item) => (
                <button
                  key={item.id}
                  onClick={() => toggleChecklist(item.id)}
                  className="w-full flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-secondary/50 transition-colors text-left"
                >
                  {item.checked ? (
                    <CheckSquare
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: "#1E3A5F" }}
                    />
                  ) : (
                    <Square className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                  )}
                  <span
                    className={`text-xs leading-relaxed ${
                      item.checked ? "text-foreground font-medium" : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
            <div
              className="mt-4 p-3 rounded-xl border"
              style={{ background: "#fffbeb", borderColor: "#fde68a" }}
            >
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                <p className="text-[11px] text-amber-800 leading-relaxed">
                  Treino educacional. A avaliação verifica estrutura, não correção jurídica.
                </p>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
