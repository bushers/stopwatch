module.exports = { contents: "\"use strict\";\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * Firebase keys and api configs\r\n */\r\nexports.FIREBASE_CONF = {\r\n    apiKey: \"\",\r\n    authDomain: \"\",\r\n    databaseURL: \"\",\r\n    projectId: \"\",\r\n    storageBucket: \"\",\r\n    messagingSenderId: \"\"\r\n};\r\nexports.default = !firebase.apps.length ? firebase.initializeApp(exports.FIREBASE_CONF) : firebase.app();\r\n//# sourceMappingURL=Firebase.js.map",
dependencies: [],
sourceMap: "{\"version\":3,\"file\":\"services/Firebase.js\",\"sourceRoot\":\"\",\"sources\":[\"/src/services/Firebase.ts\"],\"names\":[],\"mappings\":\";;AAGA;;GAEG;AACU,QAAA,aAAa,GAAG;IACzB,MAAM,EAAE,EAAE;IACV,UAAU,EAAE,EAAE;IACd,WAAW,EAAE,EAAE;IACf,SAAS,EAAE,EAAE;IACb,aAAa,EAAE,EAAE;IACjB,iBAAiB,EAAE,EAAE;CACxB,CAAA;AAED,kBAAe,CAAC,QAAQ,CAAC,IAAI,CAAC,MAAM,CAAC,CAAC,CAAC,QAAQ,CAAC,aAAa,CAAC,qBAAa,CAAC,CAAC,CAAC,CAAC,QAAQ,CAAC,GAAG,EAAE,CAAC\",\"sourcesContent\":[\"\\ndeclare var firebase;\\n\\n/**\\n * Firebase keys and api configs\\n */\\nexport const FIREBASE_CONF = {\\n    apiKey: \\\"\\\",\\n    authDomain: \\\"\\\",\\n    databaseURL: \\\"\\\",\\n    projectId: \\\"\\\",\\n    storageBucket: \\\"\\\",\\n    messagingSenderId: \\\"\\\"\\n}\\n\\nexport default !firebase.apps.length ? firebase.initializeApp(FIREBASE_CONF) : firebase.app();\"]}",
headerContent: undefined,
mtime: 1540057437843,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
