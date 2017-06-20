import { mochat } from "./mochat";
const { expect } = require("chai");

import { add } from "../";

describe("add", () => {
  check.it("is commutative", gen.int, gen.int, (A, B) => {
    expect(add(A, B)).to.equal(add(B, A));
  });
});
