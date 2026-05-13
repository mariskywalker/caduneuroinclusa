"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode };

type State = { error: Error | null };

export class MapErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[CADU mapa]", error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div
          className="fixed inset-0 z-[200] flex min-h-dvh flex-col items-center justify-center gap-4 bg-[#032e4d] px-8 text-center"
          style={{ minHeight: "100dvh" }}
        >
          <p className="font-serif text-lg text-[#e8e4dc]">Mapa não carregou</p>
          <pre className="max-w-lg overflow-auto text-left text-[11px] leading-relaxed text-[#f9746e]">
            {this.state.error.message}
          </pre>
          <p className="max-w-md text-[12px] text-[#7a746c]">
            Abre as DevTools (F12) → Consola e envia o erro. Confirma também
            Node 18+ e que correste <code className="text-[#9a948a]">npm install</code> na pasta{" "}
            <code className="text-[#9a948a]">web</code>.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
