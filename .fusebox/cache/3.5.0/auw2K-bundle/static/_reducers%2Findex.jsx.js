module.exports = { contents: "\"use strict\";\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar redux_1 = require(\"redux\");\r\nvar Reducer_1 = require(\"../controllers/App/Reducer\");\r\nexports.RootReducer = redux_1.combineReducers({\r\n    app: Reducer_1.Reducer,\r\n});\r\n//# sourceMappingURL=index.js.map",
dependencies: ["redux","../controllers/App/Reducer"],
sourceMap: "{\"version\":3,\"file\":\"_reducers/index.jsx\",\"sourceRoot\":\"\",\"sources\":[\"/src/_reducers/index.tsx\"],\"names\":[],\"mappings\":\";;AAAA,+BAAsC;AACtC,sDAAoE;AAQvD,QAAA,WAAW,GAAG,uBAAe,CAAC;IACvC,GAAG,EAAC,iBAAU;CACjB,CAAC,CAAA\",\"sourcesContent\":[\"import {combineReducers} from 'redux'; \\nimport { Reducer as AppReducer  } from '../controllers/App/Reducer';\\nimport { AppState } from '../controllers/App/StateAndProps';\\n\\n\\nexport interface IStoreState {\\n    app:AppState;\\n}\\n\\nexport const RootReducer = combineReducers({   \\n    app:AppReducer, \\n})\"]}",
headerContent: undefined,
mtime: 1540057437861,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
