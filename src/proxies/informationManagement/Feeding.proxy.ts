import { Request, Response, NextFunction } from 'express';
import proxy from 'express-http-proxy';
import ServerURL from '../../config/servers.config';

const targetUrl: string = ServerURL.targetUrlInformationManagement;

const list = (req: Request, res: Response, next: NextFunction) => {
    // console.log("Listando alimentacio")
    const IdBaby: string = req.params.IdBaby ?? "";
    // console.log({ IdBaby })
    return proxy(targetUrl, {
        proxyReqPathResolver: (req: Request) => {
            return `/feeding/list/${IdBaby}`;
        },
    })(req, res, next);

};

const save = (req: Request, res: Response, next: NextFunction) => {
    // console.log("Guardando...")
    return proxy(targetUrl, {
        proxyReqPathResolver: (req: Request) => {
            return `/feeding/save`;
        },
    })(req, res, next);

};

const update = (req: Request, res: Response, next: NextFunction) => {

    return proxy(targetUrl, {
        proxyReqPathResolver: (req: Request) => {
            return `/feeding/update`;
        },
    })(req, res, next);

};

const deletes = (req: Request, res: Response, next: NextFunction) => {
    const IdFeeding: string = req.params.IdFeeding ?? "0";
    return proxy(targetUrl, {
        proxyReqPathResolver: (req: Request) => {
            return `/feeding/delete/${IdFeeding}`;
        },
    })(req, res, next);

};


const FeedingProxy = {
    list,
    save,
    update,
    deletes,
}

export default FeedingProxy

