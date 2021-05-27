"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = require("express-graphql");

var _connection = _interopRequireDefault(require("./src/Database/connection"));

var _schema = _interopRequireDefault(require("./src/schema"));

var _ResolveUrl = require("./src/Services/ResolveUrl");

_dotenv["default"].config();

var mongoUrl = process.env.MONGO_URL;
var port = process.env.PORT || 3002;
var baseUrl = process.env.BASE_URL;
(0, _connection["default"])(mongoUrl);
var app = (0, _express["default"])();
app.use("/graphiql", (0, _expressGraphql.graphqlHTTP)({
  schema: _schema["default"],
  graphiql: true
}));
app.use("/:urlID", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var urlID, actualURL;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            urlID = req.params.urlID;
            _context.next = 3;
            return (0, _ResolveUrl.ResolveUrl)(urlID);

          case 3:
            actualURL = _context.sent;
            return _context.abrupt("return", res.redirect(actualURL));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.listen(port);
console.log("Running a GraphQL API server at ".concat(baseUrl, "/graphql"));
//# sourceMappingURL=app.js.map