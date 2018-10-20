module.exports = { contents: "\"use strict\";\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Actions_1 = require(\"./Actions\");\r\nvar StateAndProps_1 = require(\"./StateAndProps\");\r\nvar _ = require(\"lodash\");\r\nfunction Reducer(state, action) {\r\n    if (state === void 0) { state = StateAndProps_1.AppInitState; }\r\n    switch (action.type) {\r\n        case Actions_1.TYPES.DATA_LOADED:\r\n            state.locale = action.data.locale;\r\n            return _.merge({}, state);\r\n        default:\r\n            return state;\r\n    }\r\n}\r\nexports.Reducer = Reducer;\r\n//# sourceMappingURL=Reducer.js.map",
dependencies: ["./Actions","./StateAndProps","lodash"],
sourceMap: "{\"version\":3,\"file\":\"controllers/App/Reducer.js\",\"sourceRoot\":\"\",\"sources\":[\"/src/controllers/App/Reducer.ts\"],\"names\":[],\"mappings\":\";;AAAA,qCAAkC;AAClC,iDAAyD;AACzD,0BAA4B;AAG5B,iBAAwB,KAAoB,EAAE,MAAM;IAA5B,sBAAA,EAAA,QAAQ,4BAAY;IAC3C,QAAQ,MAAM,CAAC,IAAI,EAAE;QACpB,KAAK,eAAK,CAAC,WAAW;YACrB,KAAK,CAAC,MAAM,GAAG,MAAM,CAAC,IAAI,CAAC,MAAM,CAAC;YACnC,OAAO,CAAC,CAAC,KAAK,CAAC,EAAE,EAAE,KAAK,CAAC,CAAC;QAC1B;YACC,OAAO,KAAK,CAAC;KACd;AAEF,CAAC;AATD,0BASC\",\"sourcesContent\":[\"import { TYPES } from './Actions';\\nimport { AppState, AppInitState } from './StateAndProps';\\nimport * as _ from 'lodash';\\n\\n\\nexport function Reducer(state = AppInitState, action): any {\\n\\tswitch (action.type) {\\n\\t\\tcase TYPES.DATA_LOADED:\\n\\t\\t\\tstate.locale = action.data.locale; \\n\\t\\treturn _.merge({}, state); \\n\\t\\tdefault:\\n\\t\\t\\treturn state;\\n\\t}\\n\\n}\\n\\n\\n\"]}",
headerContent: undefined,
mtime: 1540057437869,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
