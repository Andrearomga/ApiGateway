import { Router, Request, Response, NextFunction } from 'express';
import VaccineProxy from '../proxies/informationManagement/vaccine.proxy';
import PediatricianProxy from '../proxies/informationManagement/pediatrician.proxy';
import BabyProxy from '../proxies/informationManagement/baby.proxy';
import MedicalAppointmentProxy from '../proxies/informationManagement/_medicalAppointment.proxy';
import DreamProxy from '../proxies/informationManagement/dream.proxy';
import FeedingProxy from '../proxies/informationManagement/Feeding.proxy';

const router = Router();

const urlVaccines: string = "/information-management/vaccines"
const urlPediatrician: string = "/information-management/pediatrician"
const urlBaby: string = "/information-management/baby"
const urlMedicalAppointment: string = "/information-management/medical-appointment"
const urlDream: string = "/information-management/dream"
const urlFeeding: string = "/information-management/feeding"

// Vaccine
router.use(`${urlVaccines}/list/by-baby/:IdBaby/:IdVaccineGroup`, (req: Request, res: Response, next: NextFunction) => VaccineProxy.getListByBaby(req, res, next));
router.use(`${urlVaccines}/by-baby/update`, (req: Request, res: Response, next: NextFunction) => VaccineProxy.update(req, res, next));

// Pediatrician
router.use(`${urlPediatrician}/list`, (req: Request, res: Response, next: NextFunction) => PediatricianProxy.list(req, res, next));
router.use(`${urlPediatrician}/search`, (req: Request, res: Response, next: NextFunction) => PediatricianProxy.searchByName(req, res, next));

// Baby
router.use(`${urlBaby}/save`, (req: Request, res: Response, next: NextFunction) => BabyProxy.save(req, res, next));
router.use(`${urlBaby}/get/:IdBaby`, (req: Request, res: Response, next: NextFunction) => BabyProxy.getBabyById(req, res, next));

// Medical AppointmentProxy
router.use(`${urlMedicalAppointment}/list/:IdBaby`, (req: Request, res: Response, next: NextFunction) => MedicalAppointmentProxy.list(req, res, next));
router.use(`${urlMedicalAppointment}/save`, (req: Request, res: Response, next: NextFunction) => MedicalAppointmentProxy.save(req, res, next));

// Dream
router.use(`${urlDream}/list/:IdBaby`, (req: Request, res: Response, next: NextFunction) => DreamProxy.list(req, res, next));
router.use(`${urlDream}/save`, (req: Request, res: Response, next: NextFunction) => DreamProxy.save(req, res, next));
router.use(`${urlDream}/update/:IdDream`, (req: Request, res: Response, next: NextFunction) => DreamProxy.update(req, res, next));
router.use(`${urlDream}/delete/:IdDream`, (req: Request, res: Response, next: NextFunction) => DreamProxy.deletes(req, res, next));

// Feeding
router.use(`${urlFeeding}/save`, (req: Request, res: Response, next: NextFunction) => FeedingProxy.save(req, res, next));
router.use(`${urlFeeding}/update`, (req: Request, res: Response, next: NextFunction) => FeedingProxy.update(req, res, next));
router.use(`${urlFeeding}/list/:IdBaby`, (req: Request, res: Response, next: NextFunction) => FeedingProxy.list(req, res, next));
router.use(`${urlFeeding}/delete/:IdFeeding`, (req: Request, res: Response, next: NextFunction) => FeedingProxy.deletes(req, res, next));


export default router;
