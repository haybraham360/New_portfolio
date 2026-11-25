"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "@/components/ui/icons";
import { KeyHint } from "@/components/ui/key-hint";
import { useCopyEmail } from "./use-copy-email";

export function CopyEmailButton() {
  const copyEmail = useCopyEmail();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  return (
    <button
      type="button"
      onClick={async () => setCopied(await copyEmail())}
      aria-keyshortcuts="E"
      className="brut-sm brut-press inline-flex h-12 items-center gap-2.5 bg-surface px-5 font-bold text-fg"
    >
      <KeyHint k="e" className="border-fg/25" />
      {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
