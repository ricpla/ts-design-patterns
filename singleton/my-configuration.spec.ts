import MyConfiguration from "./singleton";

import { expect } from "chai";
import "mocha"

// let config = new MyConfiguration(); ERROR

let config = MyConfiguration.getInstance();

describe("My configuration class", () => {
    it("Object should be not null", () => {
        expect(config !== null).to.equal(true);
    });

    it("Objects should be equals", () =>{
        let config2 = MyConfiguration.getInstance();

        expect(config === config2).to.equal(true)
    });

    it("Enviroment property should be development", ()=>{
        expect(config.enviroment === "development").to.equal(true);
    });
})