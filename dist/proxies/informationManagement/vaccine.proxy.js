"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_http_proxy_1 = __importDefault(require("express-http-proxy"));
const servers_config_1 = __importDefault(require("../../config/servers.config"));
const targetUrl = servers_config_1.default.targetUrlInformationManagement;
const getListByBaby = (req, res, next) => {
    const IdBaby = req.params.IdBaby;
    const IdVaccineGroup = req.params.IdVaccineGroup;
    return (0, express_http_proxy_1.default)(targetUrl, {
        proxyReqPathResolver: (req) => {
            return `/vaccines/list/by-baby/${IdBaby}/${IdVaccineGroup}`;
        },
    })(req, res, next);
};
const update = (req, res, next) => {
    return (0, express_http_proxy_1.default)(targetUrl, {
        proxyReqPathResolver: (req) => {
            return `/vaccines/by-baby/update`;
        },
    })(req, res, next);
};
const VaccineProxy = {
    getListByBaby,
    update
};
exports.default = VaccineProxy;
