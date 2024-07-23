"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_http_proxy_1 = __importDefault(require("express-http-proxy"));
const servers_config_1 = __importDefault(require("../../config/servers.config"));
const targetUrl = servers_config_1.default.targetUrlCommunity;
const list = (req, res, next) => {
    var _a;
    const IdBaby = (_a = req.params.IdBaby) !== null && _a !== void 0 ? _a : "0";
    console.log("Listando citas medicas de ", { IdBaby });
    return (0, express_http_proxy_1.default)(targetUrl, {
        proxyReqPathResolver: (req) => {
            return `/medical-appointment/list/${IdBaby}`;
        },
    })(req, res, next);
};
const save = (req, res, next) => {
    return (0, express_http_proxy_1.default)(targetUrl, {
        proxyReqPathResolver: (req) => {
            return `/medical-appointment/save`;
        },
    })(req, res, next);
};
const deletes = (req, res, next) => {
    var _a;
    const IdMedicalAppointment = (_a = req.params.IdMedicalAppointment) !== null && _a !== void 0 ? _a : "0";
    return (0, express_http_proxy_1.default)(targetUrl, {
        proxyReqPathResolver: (req) => {
            return `/medical-appointment/delete/${IdMedicalAppointment}`;
        },
    })(req, res, next);
};
const MedicalAppointmentsProxy = {
    list,
    save,
    deletes
};
exports.default = MedicalAppointmentsProxy;
