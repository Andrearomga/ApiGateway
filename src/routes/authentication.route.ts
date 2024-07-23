import { Router, Request, Response, NextFunction } from 'express';
import UserProxy from '../proxies/authentication/user.proxy';
import NotificationProxy from '../proxies/authentication/notification.proxy';

const router = Router();

const urlUser: string = "/authentication/user"
const urlNotification: string = "/authentication/notification"


// User
router.use(`${urlUser}/login`, (req: Request, res: Response, next: NextFunction) => UserProxy.login(req, res, next));
router.use(`${urlUser}/save`, (req: Request, res: Response, next: NextFunction) => UserProxy.save(req, res, next));
router.use(`${urlUser}/delete/:IdUser`, (req: Request, res: Response, next: NextFunction) => UserProxy.deletes(req, res, next));

// User
router.use(`${urlNotification}/list/:IdUser`, (req: Request, res: Response, next: NextFunction) => NotificationProxy.list(req, res, next));
router.use(`${urlNotification}/save`, (req: Request, res: Response, next: NextFunction) => NotificationProxy.save(req, res, next));




export default router;
