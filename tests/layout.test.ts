import { describe, expect, it, vi } from "vitest";

// next/font only works inside the Next.js build, so stub it for tests.
vi.mock("next/font/google", () => ({
  Geist: () => ({ variable: "" }),
  Geist_Mono: () => ({ variable: "" }),
}));

import { metadata } from "@/app/layout";

describe("site metadata", () => {
  it("uses a neutral tab title that does not reveal what the site is about", () => {
    expect(metadata.title).toBe("Guide");
  });

  it("does not leave the default Next.js text in place", () => {
    expect(JSON.stringify(metadata)).not.toMatch(/create next app/i);
  });
});
