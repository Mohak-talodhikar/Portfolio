/**
 * Static RAG-pipeline snippet in a window card. Pure colored text —
 * zero JavaScript, zero animation, zero GPU. The recruiter magnet.
 */
const lines: { tokens: { text: string; className: string }[] }[] = [
  {
    tokens: [
      { text: "from ", className: "text-code-blue" },
      { text: "rag", className: "text-foreground" },
      { text: " import ", className: "text-code-blue" },
      { text: "Retriever, Generator", className: "text-foreground" },
    ],
  },
  { tokens: [{ text: "", className: "" }] },
  {
    tokens: [
      { text: "docs ", className: "text-code-gold" },
      { text: "= ", className: "text-muted" },
      { text: "load_pdfs", className: "text-code-green" },
      { text: "(./papers)", className: "text-foreground" },
    ],
  },
  {
    tokens: [
      { text: "index ", className: "text-code-gold" },
      { text: "= ", className: "text-muted" },
      { text: "FAISS", className: "text-code-green" },
      { text: ".from_docs", className: "text-foreground" },
      { text: "(docs)", className: "text-muted" },
    ],
  },
  { tokens: [{ text: "", className: "" }] },
  {
    tokens: [
      { text: "hits ", className: "text-code-gold" },
      { text: "= index.", className: "text-muted" },
      { text: "search", className: "text-code-green" },
      { text: "(query, k", className: "text-muted" },
      { text: "=5)", className: "text-code-gold" },
    ],
  },
  {
    tokens: [
      { text: "answer ", className: "text-code-gold" },
      { text: "= ", className: "text-muted" },
      { text: "llm", className: "text-code-green" },
      { text: ".ground", className: "text-foreground" },
      { text: "(query, hits)", className: "text-muted" },
    ],
  },
  { tokens: [{ text: "", className: "" }] },
  {
    tokens: [
      { text: "# grounded, cited, no hallucinations", className: "text-muted" },
    ],
  },
];

export function Terminal() {
  // Fixed dark window chrome in both themes: a code window that turns
  // paper-white would look broken. Values are intentional literals.
  return (
    <div
      role="img"
      aria-label="Code snippet showing a RAG pipeline: load PDFs, index with FAISS, search, and generate a grounded answer"
      className="rounded-lg border border-[#2A2F3A] bg-[#14181F] shadow-md overflow-hidden text-left"
    >
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#2A2F3A]">
        <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-[#e0655f]" />
        <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-[#e8c468]" />
        <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-[#7ee2a8]" />
        <span className="ml-2 font-mono text-xs text-[#9AA3B2]">rag_pipeline.py</span>
      </div>
      <pre className="p-5 font-mono text-[13px] leading-[1.7] overflow-x-auto text-[#F2F4F8]">
        <code>
          {lines.map((line, i) => (
            <span key={i} className="block min-h-[1.7em]">
              {line.tokens.map((token, j) => (
                <span
                  key={j}
                  className={
                    token.className === "text-muted"
                      ? "text-[#9AA3B2]"
                      : token.className === "text-foreground"
                        ? "text-[#F2F4F8]"
                        : token.className
                  }
                >
                  {token.text}
                </span>
              ))}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
