import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("home page", () => {
  it("shows the app name as the main heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: /guide/i }),
    ).toBeInTheDocument();
  });

  it("says what the app is for", () => {
    render(<Home />);
    expect(
      screen.getByText(/prepare for a reproductive health appointment/i),
    ).toBeInTheDocument();
  });

  it("says it is not medical advice", () => {
    render(<Home />);
    expect(screen.getByText(/nothing here is medical advice/i)).toBeInTheDocument();
  });
});
