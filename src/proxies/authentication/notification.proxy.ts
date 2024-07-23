import { Request, Response, NextFunction } from 'express';
import proxy from 'express-http-proxy';
import ServerURL from '../../config/servers.config';



const targetUrl: string = ServerURL.targetUrlAuthentication

const list = (req: Request, res: Response, next: NextFunction) => {
    const IdUser: string = req.params.IdUser ?? "0";
    return proxy(targetUrl, {
        proxyReqPathResolver: (req: Request) => {
            return `/notification/list/${IdUser}`;
        },
    })(req, res, next);

};

const save = (req: Request, res: Response, next: NextFunction) => {

    return proxy(targetUrl, {
        proxyReqPathResolver: (req: Request) => {
            return `/notification/save`;
        },
    })(req, res, next);

};


const NotificationProxy = {
    list,
    save
}

export default NotificationProxy

