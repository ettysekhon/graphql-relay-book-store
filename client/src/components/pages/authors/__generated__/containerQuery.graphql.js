/**
 * @flow
 * @relayHash 90c8c50c2938671e6da6351f44d10855
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type containerQueryVariables = {||};
export type containerQueryResponse = {|
  +authors: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string
      |}
    |}>
  |}
|};
*/


/*
query containerQuery {
  authors {
    edges {
      node {
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "authors",
    "storageKey": null,
    "args": null,
    "concreteType": "AuthorConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "AuthorEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Author",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "containerQuery",
  "id": null,
  "text": "query containerQuery {\n  authors {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "containerQuery",
    "type": "QueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "containerQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'af7cb7131f1b81482eb7aaab7f67ede1';
module.exports = node;
