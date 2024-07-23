"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_http_proxy_1 = __importDefault(require("express-http-proxy"));
const servers_config_1 = __importDefault(require("../../config/servers.config"));
const targetUrl = servers_config_1.default.targetUrlInformationManagement;
const list = (req, res, next) => {
    var _a;
    console.log("Listando");
    const IdBaby = (_a = req.params.IdBaby) !== null && _a !== void 0 ? _a : "";
    return (0, express_http_proxy_1.default)(targetUrl, {
        proxyReqPathResolver: (req) => {
            return `/dream/list/${IdBaby}`;
        },
    })(req, res, next);
};
const save = (req, res, next) => {
    console.log("Guardando sueños");
    return (0, express_http_proxy_1.default)(targetUrl, {
        proxyReqPathResolver: (req) => {
            return `/dream/save`;
        },
    })(req, res, next);
};
const update = (req, res, next) => {
    var _a;
    const IdDream = (_a = req.params.IdDream) !== null && _a !== void 0 ? _a : "";
    return (0, express_http_proxy_1.default)(targetUrl, {
        proxyReqPathResolver: (req) => {
            return `/dream/update/${IdDream}`;
        },
    })(req, res, next);
};
const deletes = (req, res, next) => {
    var _a;
    const IdDream = (_a = req.params.IdDream) !== null && _a !== void 0 ? _a : "";
    return (0, express_http_proxy_1.default)(targetUrl, {
        proxyReqPathResolver: (req) => {
            return `/dream/delete/${IdDream}`;
        },
    })(req, res, next);
};
const DreamProxy = {
    list,
    save,
    update,
    deletes
};
exports.default = DreamProxy;
