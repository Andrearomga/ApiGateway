"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_proxy_1 = __importDefault(require("../proxies/authentication/user.proxy"));
const notification_proxy_1 = __importDefault(require("../proxies/authentication/notification.proxy"));
const router = (0, express_1.Router)();
const urlUser = "/authentication/user";
const urlNotification = "/authentication/notification";
// User
router.use(`${urlUser}/login`, (req, res, next) => user_proxy_1.default.login(req, res, next));
router.use(`${urlUser}/save`, (req, res, next) => user_proxy_1.default.save(req, res, next));
// User
router.use(`${urlNotification}/list/:IdUser`, (req, res, next) => notification_proxy_1.default.list(req, res, next));
router.use(`${urlNotification}/save`, (req, res, next) => notification_proxy_1.default.save(req, res, next));
exports.default = router;
