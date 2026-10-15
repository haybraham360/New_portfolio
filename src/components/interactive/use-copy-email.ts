"use client";

import { useCallback } from "react";
import { profile } from "@/content/profile";
import { useToast } from "./toast-provider";

async function writeToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Older browsers / insecure contexts: fall back to a temporary selection.
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    area.remove();
    return ok;
  }
}

export function useCopyEmail() {
  const notify = useToast();

  return useCallback(async () => {
    const ok = await writeToClipboard(profile.email);
    if (ok) {
      notify({ tone: "success", title: "Email copied", body: profile.email });
    } else {
      notify({ tone: "error", title: "Couldn't copy automatically", body: `The address is ${profile.email}` });
    }
    return ok;
  }, [notify]);
}
