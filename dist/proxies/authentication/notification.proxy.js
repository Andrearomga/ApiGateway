"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_http_proxy_1 = __importDefault(require("express-http-proxy"));
const servers_config_1 = __importDefault(require("../../config/servers.config"));
const targetUrl = servers_config_1.default.targetUrlAuthentication;
const list = (req, res, next) => {
    var _a;
    const IdUser = (_a = req.params.IdUser) !== null && _a !== void 0 ? _a : "0";
    return (0, express_http_proxy_1.default)(targetUrl, {
        proxyReqPathResolver: (req) => {
            return `/notification/list/${IdUser}`;
        },
    })(req, res, next);
};
const save = (req, res, next) => {
    return (0, express_http_proxy_1.default)(targetUrl, {
        proxyReqPathResolver: (req) => {
            return `/notification/save`;
        },
    })(req, res, next);
};
const NotificationProxy = {
    list,
    save
};
exports.default = NotificationProxy;
