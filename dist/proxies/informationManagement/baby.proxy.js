"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_http_proxy_1 = __importDefault(require("express-http-proxy"));
const servers_config_1 = __importDefault(require("../../config/servers.config"));
const targetUrl = servers_config_1.default.targetUrlInformationManagement;
const save = (req, res, next) => {
    console.log(req.body);
    return (0, express_http_proxy_1.default)(targetUrl, {
        proxyReqPathResolver: (req) => {
            return `/baby/save`;
        },
    })(req, res, next);
};
const getBabyById = (req, res, next) => {
    console.log("Obteniendo bebe");
    const IdBaby = isNaN(Number(req.params.IdBaby)) ? 0 : Number(req.params.IdBaby);
    return (0, express_http_proxy_1.default)(targetUrl, {
        proxyReqPathResolver: (req) => {
            return `/baby/get/${IdBaby}`;
        },
    })(req, res, next);
};
const BabyProxy = {
    save,
    getBabyById
};
exports.default = BabyProxy;
