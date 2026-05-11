type CV = string | number | false | null | undefined;

export function cn(
  ...inputs: (CV | CV[] | Record<string, boolean | undefined | null>)[]
): string {
  const out: string[] = [];
  for (const i of inputs) {
    if (!i) continue;
    if (typeof i === "string" || typeof i === "number") {
      out.push(String(i));
    } else if (Array.isArray(i)) {
      const inner = cn(...i);
      if (inner) out.push(inner);
    } else if (typeof i === "object") {
      for (const [k, v] of Object.entries(i)) {
        if (v) out.push(k);
      }
    }
  }
  return out.join(" ");
}
