module.exports = { contents: "\"use strict\";\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = require(\"react\");\r\nvar Timer = /** @class */ (function (_super) {\r\n    __extends(Timer, _super);\r\n    function Timer(p) {\r\n        var _this = _super.call(this, p) || this;\r\n        _this.toggleTimer = function () {\r\n            _this.setState(function (prevState) {\r\n                return {\r\n                    timerRunning: !prevState.timerRunning\r\n                };\r\n            });\r\n        };\r\n        _this.state = {\r\n            timerRunning: false\r\n        };\r\n        return _this;\r\n    }\r\n    Timer.prototype.render = function () {\r\n        var _this = this;\r\n        var _a = this, props = _a.props, state = _a.state, cls = this.props.className || \"\";\r\n        return (React.createElement(\"div\", { className: \"timer \" + cls, ref: function (e) { return _this.el = e; } },\r\n            React.createElement(\"div\", { className: \"timer__num-container\" },\r\n                React.createElement(\"h1\", null, \"0:00\")),\r\n            React.createElement(\"div\", { className: \"timer__start-btn\", onClick: this.toggleTimer }, state.timerRunning\r\n                ? React.createElement(\"p\", null, \"Pause\")\r\n                : React.createElement(\"p\", null, \"Start\"))));\r\n    };\r\n    return Timer;\r\n}(React.Component));\r\nexports.Timer = Timer;\r\n//# sourceMappingURL=Timer.js.map",
dependencies: ["react"],
sourceMap: "{\"version\":3,\"file\":\"components/ui/Timer/Timer.jsx\",\"sourceRoot\":\"\",\"sources\":[\"/src/components/ui/Timer/Timer.tsx\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;AAAA,6BAA+B;AAY/B;IAA2B,yBAAuC;IAG9D,eAAY,CAAY;QAAxB,YACI,kBAAM,CAAC,CAAC,SAIX;QAED,iBAAW,GAAG;YACV,KAAI,CAAC,QAAQ,CAAC,UAAA,SAAS;gBACnB,OAAO;oBACH,YAAY,EAAE,CAAC,SAAS,CAAC,YAAY;iBACxC,CAAA;YACL,CAAC,CAAC,CAAA;QACN,CAAC,CAAA;QAXG,KAAI,CAAC,KAAK,GAAG;YACT,YAAY,EAAE,KAAK;SACtB,CAAA;;IACL,CAAC;IAUD,sBAAM,GAAN;QAAA,iBAiBC;QAhBO,IAAA,SAAqB,EAApB,gBAAK,EAAE,gBAAK,EACb,GAAG,GAAG,IAAI,CAAC,KAAK,CAAC,SAAS,IAAI,EAAE,CAAC;QAErC,OAAO,CACH,6BAAK,SAAS,EAAE,QAAQ,GAAG,GAAG,EAAE,GAAG,EAAE,UAAA,CAAC,IAAG,OAAA,KAAI,CAAC,EAAE,GAAE,CAAC,EAAV,CAAU;YAC/C,6BAAK,SAAS,EAAC,sBAAsB;gBACjC,gCAAK,MAAM,CAAM,CACf;YAEN,6BAAK,SAAS,EAAC,kBAAkB,EAAC,OAAO,EAAE,IAAI,CAAC,WAAW,IACtD,KAAK,CAAC,YAAY;gBACf,CAAC,CAAC,uCAAY;gBACd,CAAC,CAAC,uCAAY,CAChB,CACJ,CACT,CAAA;IACL,CAAC;IACL,YAAC;AAAD,CAAC,AApCD,CAA2B,KAAK,CAAC,SAAS,GAoCzC;AApCY,sBAAK\",\"sourcesContent\":[\"import * as React from 'react'; \\n\\n\\nexport interface TimerProps{\\n    className?:string;\\n}\\n\\nexport interface TimerState{\\n    timerRunning:boolean;\\n}\\n\\n\\nexport class Timer extends React.Component<TimerProps, TimerState>{\\n    el:HTMLDivElement;\\n    date:Date;\\n    constructor(p:TimerProps){\\n        super(p);\\n        this.state = {\\n            timerRunning: false\\n        }\\n    }\\n    \\n    toggleTimer = () => {\\n        this.setState(prevState => {\\n            return {\\n                timerRunning: !prevState.timerRunning\\n            }\\n        })\\n    }\\n\\n    render(){\\n        let {props, state} = this,\\n            cls = this.props.className || \\\"\\\";\\n\\n        return (\\n            <div className={\\\"timer \\\" + cls} ref={e=> this.el= e}>\\n                <div className=\\\"timer__num-container\\\">\\n                    <h1>{`0:00`}</h1>\\n                </div>\\n\\n                <div className=\\\"timer__start-btn\\\" onClick={this.toggleTimer}>\\n                    {state.timerRunning\\n                        ? <p>Pause</p>\\n                        : <p>Start</p>}\\n                </div>\\n            </div>\\n        )\\n    }\\n}\"]}",
headerContent: undefined,
mtime: 1540063982954,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}