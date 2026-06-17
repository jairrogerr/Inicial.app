"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import type { CaseScenario } from "@/lib/data/cases";

interface ChecklistItem {
  id: string;
  label: string;
  checked: boolean;
}

interface TrainingState {
  currentCase: CaseScenario | null;
  petitionText: string;
  checklist: ChecklistItem[];
  evaluation: EvaluationResult | null;
}

interface EvaluationResult {
  score: number;
  positives: string[];
  improvements: string[];
  wordCount: number;
  hasSections: boolean;
}

interface TrainingContextType {
  state: TrainingState;
  setCase: (c: CaseScenario) => void;
  setPetitionText: (text: string) => void;
  toggleChecklist: (id: string) => void;
  evaluate: () => void;
  reset: () => void;
}

const defaultChecklist: ChecklistItem[] = [
  { id: "qualificacao", label: "Qualificação das partes", checked: false },
  { id: "fatos", label: "Exposição dos fatos", checked: false },
  { id: "fundamentacao", label: "Fundamentação jurídica", checked: false },
  { id: "pedidos", label: "Pedidos", checked: false },
  { id: "valor", label: "Valor da causa", checked: false },
  { id: "fechamento", label: "Fechamento", checked: false },
];

const TrainingContext = createContext<TrainingContextType | null>(null);

export function TrainingProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<TrainingState>({
    currentCase: null,
    petitionText: "",
    checklist: [...defaultChecklist],
    evaluation: null,
  });

  const setCase = useCallback((c: CaseScenario) => {
    setState((prev) => ({
      ...prev,
      currentCase: c,
      petitionText: "",
      checklist: [...defaultChecklist],
      evaluation: null,
    }));
  }, []);

  const setPetitionText = useCallback((text: string) => {
    setState((prev) => ({ ...prev, petitionText: text }));
  }, []);

  const toggleChecklist = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      checklist: prev.checklist.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      ),
    }));
  }, []);

  const evaluate = useCallback(() => {
    setState((prev) => {
      const text = prev.petitionText.trim();
      const wordCount = text.split(/\s+/).filter(Boolean).length;
      const hasSections =
        /(EXORDIAL|DOS FATOS|DA FUNDAMENTA|DOS PEDIDOS|DO VALOR|FECHAMENTO|qualificação|fatos|fundamentação|pedidos|valor)/i.test(
          text
        );
      const hasTitles =
        text.split("\n").filter((line) => line.trim().length > 0 && line.trim().toUpperCase() === line.trim()).length >= 2;

      const positives: string[] = [];
      const improvements: string[] = [];
      let score = 0;

      if (wordCount >= 200) {
        score += 30;
        positives.push("Texto com extensão adequada para uma petição inicial.");
      } else {
        improvements.push("A petição está muito curta. Tente desenvolver melhor os argumentos (mínimo recomendado: 200 palavras).");
      }

      if (wordCount >= 500) {
        score += 10;
        positives.push("Texto bem desenvolvido e detalhado.");
      }

      if (hasSections) {
        score += 25;
        positives.push("Estrutura identificável com seções da petição.");
      } else {
        improvements.push("Não foram identificadas seções clássicas da petição. Tente organizar em: qualificação, fatos, fundamentação, pedidos e valor.");
      }

      if (hasTitles) {
        score += 15;
        positives.push("Uso de títulos ou seções em maiúsculas, facilitando a leitura.");
      } else {
        improvements.push("Tente usar títulos em maiúsculas para separar as seções da petição.");
      }

      const checkedItems = prev.checklist.filter((i) => i.checked).length;
      if (checkedItems >= 4) {
        score += 20;
        positives.push("Checklist preenchido com atenção, demonstrando revisão cuidadosa.");
      } else {
        improvements.push("Revise o checklist lateral: marque os itens que você incluiu na petição.");
      }

      score = Math.min(100, Math.max(0, score));

      return {
        ...prev,
        evaluation: {
          score,
          positives,
          improvements,
          wordCount,
          hasSections,
        },
      };
    });
  }, []);

  const reset = useCallback(() => {
    setState({
      currentCase: null,
      petitionText: "",
      checklist: [...defaultChecklist],
      evaluation: null,
    });
  }, []);

  return (
    <TrainingContext.Provider
      value={{ state, setCase, setPetitionText, toggleChecklist, evaluate, reset }}
    >
      {children}
    </TrainingContext.Provider>
  );
}

export function useTraining() {
  const ctx = useContext(TrainingContext);
  if (!ctx) throw new Error("useTraining must be used within TrainingProvider");
  return ctx;
}
