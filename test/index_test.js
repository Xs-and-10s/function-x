require("mocha-testcheck").install();
const { expect } = require("chai");

import { add } from "../lib/utils";
import { multiply } from "../";
import { strictEqual } from "assert";

describe("add", () => {
  check.it("is commutative", gen.int, gen.int, (A, B) => {
    expect(add(A, B)).to.equal(add(B, A));
  });
});

describe("multiply", () => {
  check.it("is commutative", gen.int, gen.int, (A, B) => {
    expect(multiply(A, B)).to.equal(multiply(B, A));
  });

  check.it("returns 0 when either argument is 0", gen.int, gen.int, (A, B) => {
    expect(multiply(A, 0)).to.equal(0);
    expect(multiply(0, B)).to.equal(0);
  });

  check.it(
    "returns the value of one number if the other is 1",
    gen.int,
    gen.int,
    (A, B) => {
      expect(multiply(A, 1)).to.equal(A);
      expect(multiply(1, B)).to.equal(B);
    }
  );

  check.it("is commutative", gen.int, gen.int, (A, B) => {
    expect(multiply(A, B)).to.equal(multiply(B, A));
  });

  check.it("handles negative numbers", gen.sNegInt, gen.sPosInt, (N, P) => {
    expect(multiply(N, P)).to.be.lessThan(0);
    expect(multiply(P, N)).to.be.lessThan(0);
    expect(multiply(N, N)).to.be.greaterThan(0);
    expect(multiply(P, P)).to.be.greaterThan(0);
  });
});
