import { greet } from "@/index";

describe("index", () => {
    describe("greet", () => {
        it("should greet 'Hello world!'", () => {
            expect(greet()).toBe("Hello world!");
        });
    });
});
