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
    console.log("Obteniendo citas medicas");
    const IdBaby = (_a = req.params.IdBaby) !== null && _a !== void 0 ? _a : "";
    return (0, express_http_proxy_1.default)(targetUrl, {
        proxyReqPathResolver: (req) => {
            return `/medicalAppointment/list/${IdBaby}`;
        },
    })(req, res, next);
};
const save = (req, res, next) => {
    return (0, express_http_proxy_1.default)(targetUrl, {
        proxyReqPathResolver: (req) => {
            return `/medicalAppointment/save`;
        },
    })(req, res, next);
};
const MedicalAppointmentProxy = {
    list,
    save,
};
exports.default = MedicalAppointmentProxy;
