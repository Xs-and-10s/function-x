import { mochat } from "./mochat";
import expect from "unexpected";

import { add } from "../";

describe("add", () => {
  check.it("is commutative", gen.int, gen.int, (A, B) => {
    expect(add(A, B), "to equal", add(B, A));
  });
});
