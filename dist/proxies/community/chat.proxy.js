"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_http_proxy_1 = __importDefault(require("express-http-proxy"));
const servers_config_1 = __importDefault(require("../../config/servers.config"));
const targetUrl = servers_config_1.default.targetUrlCommunity;
const save = (req, res, next) => {
    return (0, express_http_proxy_1.default)(targetUrl, {
        proxyReqPathResolver: (req) => {
            return `/chat/save`;
        },
    })(req, res, next);
};
const list = (req, res, next) => {
    return (0, express_http_proxy_1.default)(targetUrl, {
        proxyReqPathResolver: (req) => {
            return `/chat/list`;
        },
    })(req, res, next);
};
const BabyProxy = {
    save,
    list
};
exports.default = BabyProxy;
