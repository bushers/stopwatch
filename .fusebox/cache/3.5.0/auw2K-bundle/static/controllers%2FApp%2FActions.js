module.exports = { contents: "\"use strict\";\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar constants_1 = require(\"../../constants\");\r\nexports.TYPES = {\r\n    DATA_LOADED: constants_1.APP_START | 0x00001,\r\n};\r\nexports.ACTIONS = {\r\n    DATA_LOADED: function (a) {\r\n        return {\r\n            type: exports.TYPES.DATA_LOADED,\r\n            data: a\r\n        };\r\n    }\r\n};\r\n//# sourceMappingURL=Actions.js.map",
dependencies: ["../../constants"],
sourceMap: "{\"version\":3,\"file\":\"controllers/App/Actions.js\",\"sourceRoot\":\"\",\"sources\":[\"/src/controllers/App/Actions.ts\"],\"names\":[],\"mappings\":\";;AAAA,6CAA4C;AAI/B,QAAA,KAAK,GAAG;IACjB,WAAW,EAAE,qBAAS,GAAG,OAAO;CACnC,CAAC;AAEW,QAAA,OAAO,GAAG;IACnB,WAAW,EAAE,UAAU,CAAM;QACzB,OAAO;YACH,IAAI,EAAE,aAAK,CAAC,WAAW;YACvB,IAAI,EAAE,CAAC;SACV,CAAC;IACN,CAAC;CAGJ,CAAC\",\"sourcesContent\":[\"import { APP_START } from '../../constants';\\nimport { WINDOW_VIEWS } from './StateAndProps';\\n\\n\\nexport const TYPES = {\\n    DATA_LOADED: APP_START | 0x00001,\\n};\\n\\nexport const ACTIONS = {\\n    DATA_LOADED: function (a: any) {\\n        return {\\n            type: TYPES.DATA_LOADED,\\n            data: a\\n        };\\n    }\\n\\n\\n};\"]}",
headerContent: undefined,
mtime: 1540057437865,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
