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
    console.log("Listando alimentacio");
    const IdBaby = (_a = req.params.IdBaby) !== null && _a !== void 0 ? _a : "";
    console.log({ IdBaby });
    return (0, express_http_proxy_1.default)(targetUrl, {
        proxyReqPathResolver: (req) => {
            return `/feeding/list/${IdBaby}`;
        },
    })(req, res, next);
};
const save = (req, res, next) => {
    console.log("Guardando...");
    return (0, express_http_proxy_1.default)(targetUrl, {
        proxyReqPathResolver: (req) => {
            return `/feeding/save`;
        },
    })(req, res, next);
};
const update = (req, res, next) => {
    return (0, express_http_proxy_1.default)(targetUrl, {
        proxyReqPathResolver: (req) => {
            return `/feeding/update`;
        },
    })(req, res, next);
};
const deletes = (req, res, next) => {
    var _a;
    const IdFeeding = (_a = req.params.IdFeeding) !== null && _a !== void 0 ? _a : "0";
    return (0, express_http_proxy_1.default)(targetUrl, {
        proxyReqPathResolver: (req) => {
            return `/feeding/delete/${IdFeeding}`;
        },
    })(req, res, next);
};
const FeedingProxy = {
    list,
    save,
    update,
    deletes,
};
exports.default = FeedingProxy;
