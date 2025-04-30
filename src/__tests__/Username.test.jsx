import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Username from "../components/Username";

describe("UsernameDisplay", () => {
  it("should render username", async () => {
    render(<Username username={"Nchimunya"} />);
    expect(await screen.findByText("Nchimunya")).toBeInTheDocument();
  });
});
