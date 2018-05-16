// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
"use strict";

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Enzyme = require("bs-enzyme/src/Enzyme.js");
var Enzyme$1 = require("enzyme");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var ReasonReactContext = require("../src/ReasonReactContext.bs.js");
var EnzymeAdapterReact = require("enzyme-adapter-react-16");

Enzyme.configureEnzyme(new EnzymeAdapterReact());

describe("Creating and updating", function() {
  var Context = ReasonReactContext.CreateContext(
    /* module */ [
      /* debugName */ "Counter",
      /* value : record */ [/* count */ 0]
    ]
  );
  Jest.test("Provider renders", function() {
    return Jest.Expect[/* toBe */ 2](
      true,
      Jest.Expect[/* expect */ 0](
        Enzyme$1.shallow(
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            Curry._2(
              Context[/* Provider */ 1][/* make */ 0],
              /* None */ 0,
              /* array */ []
            )
          )
        ).exists()
      )
    );
  });
  var consumerCount = [-1];
  var consumer = Enzyme$1.shallow(
    ReasonReact.element(
      /* None */ 0,
      /* None */ 0,
      Curry._1(Context[/* Consumer */ 2][/* make */ 0], function(param) {
        consumerCount[0] = param[/* count */ 0];
        return "test";
      })
    )
  );
  Jest.test("Consumer renders", function() {
    return Jest.Expect[/* toBe */ 2](
      0,
      Jest.Expect[/* expect */ 0](consumerCount[0])
    );
  });
  Jest.test(
    "Change count on provider and it is mirrored in consumer",
    function() {
      Enzyme$1.shallow(
        ReasonReact.element(
          /* None */ 0,
          /* None */ 0,
          Curry._2(
            Context[/* Provider */ 1][/* make */ 0],
            /* Some */ [/* record */ [/* count */ 10]],
            /* array */ []
          )
        )
      );
      return Jest.Expect[/* toBe */ 2](
        10,
        Jest.Expect[/* expect */ 0](consumerCount[0])
      );
    }
  );
  Jest.test("context subscription count should only be 1", function() {
    return Jest.Expect[/* toBe */ 2](
      1,
      Jest.Expect[/* expect */ 0](Context[/* subscriptions */ 0][0].length)
    );
  });
  return Jest.test(
    "Consumer unmounts and the context clears the subscription",
    function() {
      consumer.unmount();
      return Jest.Expect[/* toBe */ 2](
        0,
        Jest.Expect[/* expect */ 0](Context[/* subscriptions */ 0][0].length)
      );
    }
  );
});

/*  Not a pure module */
