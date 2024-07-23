"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vaccine_proxy_1 = __importDefault(require("../proxies/informationManagement/vaccine.proxy"));
const pediatrician_proxy_1 = __importDefault(require("../proxies/informationManagement/pediatrician.proxy"));
const baby_proxy_1 = __importDefault(require("../proxies/informationManagement/baby.proxy"));
const _medicalAppointment_proxy_1 = __importDefault(require("../proxies/informationManagement/_medicalAppointment.proxy"));
const dream_proxy_1 = __importDefault(require("../proxies/informationManagement/dream.proxy"));
const Feeding_proxy_1 = __importDefault(require("../proxies/informationManagement/Feeding.proxy"));
const router = (0, express_1.Router)();
const urlVaccines = "/information-management/vaccines";
const urlPediatrician = "/information-management/pediatrician";
const urlBaby = "/information-management/baby";
const urlMedicalAppointment = "/information-management/medical-appointment";
const urlDream = "/information-management/dream";
const urlFeeding = "/information-management/feeding";
// Vaccine
router.use(`${urlVaccines}/list/by-baby/:IdBaby/:IdVaccineGroup`, (req, res, next) => vaccine_proxy_1.default.getListByBaby(req, res, next));
router.use(`${urlVaccines}/by-baby/update`, (req, res, next) => vaccine_proxy_1.default.update(req, res, next));
// Pediatrician
router.use(`${urlPediatrician}/list`, (req, res, next) => pediatrician_proxy_1.default.list(req, res, next));
router.use(`${urlPediatrician}/search`, (req, res, next) => pediatrician_proxy_1.default.searchByName(req, res, next));
// Baby
router.use(`${urlBaby}/save`, (req, res, next) => baby_proxy_1.default.save(req, res, next));
router.use(`${urlBaby}/get/:IdBaby`, (req, res, next) => baby_proxy_1.default.getBabyById(req, res, next));
// Medical AppointmentProxy
router.use(`${urlMedicalAppointment}/list/:IdBaby`, (req, res, next) => _medicalAppointment_proxy_1.default.list(req, res, next));
router.use(`${urlMedicalAppointment}/save`, (req, res, next) => _medicalAppointment_proxy_1.default.save(req, res, next));
// Dream
router.use(`${urlDream}/list/:IdBaby`, (req, res, next) => dream_proxy_1.default.list(req, res, next));
router.use(`${urlDream}/save`, (req, res, next) => dream_proxy_1.default.save(req, res, next));
router.use(`${urlDream}/update/:IdDream`, (req, res, next) => dream_proxy_1.default.update(req, res, next));
router.use(`${urlDream}/delete/:IdDream`, (req, res, next) => dream_proxy_1.default.deletes(req, res, next));
// Feeding
router.use(`${urlFeeding}/save`, (req, res, next) => Feeding_proxy_1.default.save(req, res, next));
router.use(`${urlFeeding}/update`, (req, res, next) => Feeding_proxy_1.default.update(req, res, next));
router.use(`${urlFeeding}/list/:IdBaby`, (req, res, next) => Feeding_proxy_1.default.list(req, res, next));
router.use(`${urlFeeding}/delete/:IdFeeding`, (req, res, next) => Feeding_proxy_1.default.deletes(req, res, next));
exports.default = router;
