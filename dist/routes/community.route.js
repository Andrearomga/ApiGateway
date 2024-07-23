"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const medicalAppointments_proxy_1 = __importDefault(require("../proxies/community/medicalAppointments.proxy"));
const chat_proxy_1 = __importDefault(require("../proxies/community/chat.proxy"));
const router = (0, express_1.Router)();
const urlMedicalAppointments = "/community/medical-appointment";
const urlChat = "/community/chat";
// User
router.use(`${urlMedicalAppointments}/list/:IdBaby`, (req, res, next) => medicalAppointments_proxy_1.default.list(req, res, next));
router.use(`${urlMedicalAppointments}/save`, (req, res, next) => medicalAppointments_proxy_1.default.save(req, res, next));
router.use(`${urlMedicalAppointments}/delete/:IdMedicalAppointment`, (req, res, next) => medicalAppointments_proxy_1.default.deletes(req, res, next));
// Chat
router.use(`${urlChat}/list/`, (req, res, next) => chat_proxy_1.default.list(req, res, next));
router.use(`${urlChat}/save`, (req, res, next) => chat_proxy_1.default.save(req, res, next));
exports.default = router;
