import { Router, Request, Response, NextFunction } from 'express';
import MedicalAppointmentsProxy from '../proxies/community/medicalAppointments.proxy';
import CharProxy from '../proxies/community/chat.proxy';

const router = Router();

const urlMedicalAppointments: string = "/community/medical-appointment"
const urlChat: string = "/community/chat"

// User
router.use(`${urlMedicalAppointments}/list/:IdBaby`, (req: Request, res: Response, next: NextFunction) => MedicalAppointmentsProxy.list(req, res, next));
router.use(`${urlMedicalAppointments}/save`, (req: Request, res: Response, next: NextFunction) => MedicalAppointmentsProxy.save(req, res, next));
router.use(`${urlMedicalAppointments}/delete/:IdMedicalAppointment`, (req: Request, res: Response, next: NextFunction) => MedicalAppointmentsProxy.deletes(req, res, next));

// Chat
router.use(`${urlChat}/list/`, (req: Request, res: Response, next: NextFunction) => CharProxy.list(req, res, next));
router.use(`${urlChat}/save`, (req: Request, res: Response, next: NextFunction) => CharProxy.save(req, res, next));


export default router;
