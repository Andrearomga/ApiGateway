import { Request, Response, NextFunction } from 'express';
import proxy from 'express-http-proxy';
import ServerURL from '../../config/servers.config';



const targetUrl: string = ServerURL.targetUrlAuthentication

const login = (req: Request, res: Response, next: NextFunction) => {

  return proxy(targetUrl, {
    proxyReqPathResolver: (req: Request) => {
      return `/user/login`;
    },
  })(req, res, next);

};

const save = (req: Request, res: Response, next: NextFunction) => {

  return proxy(targetUrl, {
    proxyReqPathResolver: (req: Request) => {
      return `/user/save`;
    },
  })(req, res, next);

};


const deletes = (req: Request, res: Response, next: NextFunction) => {
const IdUser: string = req.params.IdUser ?? "0"
  return proxy(targetUrl, {
    proxyReqPathResolver: (req: Request) => {
      return `/user/delete/${IdUser}`;
    },
  })(req, res, next);

};


const BabyProxy = {
  login,
  save,
  deletes
}

export default BabyProxy

