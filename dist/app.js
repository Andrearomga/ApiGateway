"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const informationManagement_route_1 = __importDefault(require("./routes/informationManagement.route"));
const authentication_route_1 = __importDefault(require("./routes/authentication.route"));
const community_route_1 = __importDefault(require("./routes/community.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const urlBase = "/api-baby-link";
app.use(urlBase, informationManagement_route_1.default);
app.use(urlBase, authentication_route_1.default);
app.use(urlBase, community_route_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.clear();
    console.log(`API Gateway running on port ${PORT}`);
});
