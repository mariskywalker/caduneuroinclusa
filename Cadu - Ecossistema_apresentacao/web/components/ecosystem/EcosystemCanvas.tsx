"use client";

import {
  Background,
  BackgroundVariant,
  MiniMap,
  Panel,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { AnimatePresence, motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { buildEcosystemFlowElements } from "./ecosystem-data";
import type { EcosystemNodeData } from "./ecosystem-types";
import { CenterCaduNode, OrbitEcosystemNode } from "./EcosystemNodes";
import {
  EcosystemMapContext,
  type EcosystemMapContextValue,
} from "./EcosystemMapContext";
import { IntroOverlay } from "./IntroOverlay";
import { NodeDetailPanel } from "./NodeDetailPanel";
import { MapErrorBoundary } from "./MapErrorBoundary";
import { SoftEdge } from "./SoftEdge";
import "./ecosystem-canvas.css";

const nodeTypes = {
  center: CenterCaduNode,
  orbit: OrbitEcosystemNode,
};

const edgeTypes = {
  soft: SoftEdge,
};

function CanvasInner() {
  const { nodes: initialNodes, edges: initialEdges } = useMemo(
    () => buildEcosystemFlowElements(),
    [],
  );
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [edgesOpacity, setEdgesOpacity] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.add("eco-map");
    return () => root.classList.remove("eco-map");
  }, []);

  useEffect(() => {
    if (showIntro) return;
    let start: number | null = null;
    const duration = 1600;
    let frame: number;
    const step = (now: number) => {
      if (start === null) start = now;
      const p = Math.min(1, (now - start) / duration);
      setEdgesOpacity(p);
      if (p < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [showIntro]);

  useEffect(() => {
    if (!showIntro) return;
    const t = window.setTimeout(() => setShowIntro(false), 8200);
    return () => clearTimeout(t);
  }, [showIntro]);

  const mapCtx = useMemo<EcosystemMapContextValue>(
    () => ({
      hoveredId,
      setHoveredId,
      selectedId,
      setSelectedId,
      edgesOpacity,
    }),
    [hoveredId, selectedId, edgesOpacity],
  );

  const selectedNode = useMemo((): EcosystemNodeData | null => {
    if (!selectedId) return null;
    const n = nodes.find((x) => x.id === selectedId);
    return n ? (n.data as EcosystemNodeData) : null;
  }, [selectedId, nodes]);

  const closePanel = useCallback(() => setSelectedId(null), []);

  const onPaneClick = useCallback(() => {
    setSelectedId(null);
  }, []);

  return (
    <EcosystemMapContext.Provider value={mapCtx}>
      <div className="eco-canvas-root fixed inset-0 z-0 overflow-hidden bg-[#032e4d]">
        <motion.div
          className="pointer-events-none absolute inset-0 z-[1]"
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_75%_at_50%_42%,rgba(68,151,195,0.14),transparent_68%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(1,24,40,0.88)_100%)]" />
        </motion.div>

        <motion.div
          className="pointer-events-none absolute inset-0 z-[1] opacity-[0.09]"
          aria-hidden
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="absolute inset-0 z-[2]">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            colorMode="dark"
            onInit={(instance) => {
              instance.setCenter(0, 0, { zoom: 0.75 });
            }}
            onPaneClick={onPaneClick}
            fitView={false}
            panOnScroll
            panOnScrollSpeed={0.55}
            zoomOnScroll
            zoomOnPinch
            minZoom={0.22}
            maxZoom={1.9}
            translateExtent={[
              [-5200, -5200],
              [5200, 5200],
            ]}
            zoomOnDoubleClick={false}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={false}
            selectNodesOnDrag={false}
            proOptions={{ hideAttribution: true }}
            className="ecosystem-flow !h-full !w-full"
            style={{ width: "100%", height: "100%" }}
            defaultEdgeOptions={{ type: "soft" }}
          >
            <Background
              id="eco-grid"
              variant={BackgroundVariant.Lines}
              gap={56}
              size={1}
              lineWidth={0.5}
              color="rgba(232, 228, 220, 0.045)"
            />

            <MiniMap
              className="eco-minimap !m-4 !overflow-hidden !rounded-lg !border !border-white/10 !bg-[#021c2f]/90"
              maskColor="rgba(1, 20, 35, 0.92)"
              nodeColor={(n) =>
                n.id === "cadu" ? "rgba(249, 116, 110, 0.85)" : "rgba(148, 180, 198, 0.55)"
              }
              nodeStrokeWidth={0}
              zoomable
              pannable
            />

            <Panel
              position="top-left"
              className="pointer-events-none !m-5 text-[11px] font-semibold uppercase tracking-[0.4em] text-[#f9746e]"
            >
              CADU
            </Panel>
            <Panel
              position="bottom-left"
              className="pointer-events-none !m-5 max-w-[220px]"
            >
              <p className="text-[9px] uppercase leading-relaxed tracking-[0.24em] text-[#5c5850]">
                arraste para explorar · clique nos nós · scroll para zoom
              </p>
            </Panel>
          </ReactFlow>
        </div>

        <NodeDetailPanel node={selectedNode} onClose={closePanel} />

        <AnimatePresence>
          {showIntro ? (
            <IntroOverlay
              key="intro"
              onDismiss={() => setShowIntro(false)}
            />
          ) : null}
        </AnimatePresence>
      </div>
    </EcosystemMapContext.Provider>
  );
}

export function EcosystemCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="fixed inset-0 z-0 flex min-h-dvh w-screen flex-col items-center justify-center gap-4 bg-[#032e4d] px-6 text-center"
        style={{ minHeight: "100dvh" }}
      >
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#5c5850]">
          CADU · mapa do ecossistema
        </p>
        <p className="max-w-xs text-[12px] leading-relaxed text-[#7a746c]">
          A carregar o mapa interativo… Se esta mensagem não desaparecer,
          confirme que está a usar{" "}
          <code className="text-[#9a948a]">npm run dev</code> na pasta{" "}
          <code className="text-[#9a948a]">web</code> e abra{" "}
          <code className="text-[#9a948a]">http://localhost:3000</code>
        </p>
      </div>
    );
  }

  return (
    <MapErrorBoundary>
      <ReactFlowProvider>
        <CanvasInner />
      </ReactFlowProvider>
    </MapErrorBoundary>
  );
}
