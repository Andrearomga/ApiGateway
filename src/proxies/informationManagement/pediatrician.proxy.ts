import { Request, Response, NextFunction } from 'express';
import proxy from 'express-http-proxy';
import ServerURL from '../../config/servers.config';



const targetUrl: string = ServerURL.targetUrlInformationManagement

const list = (req: Request, res: Response, next: NextFunction) => {

  return proxy(targetUrl, {
    proxyReqPathResolver: (req: Request) => {
      return `/pediatrician/list`;
    },
  })(req, res, next);

};

const searchByName = (req: Request, res: Response, next: NextFunction) => {
  
  return proxy(targetUrl, {
    proxyReqPathResolver: (req: Request) => {
      return `/pediatrician/search`;
    },
  })(req, res, next);

};

const PediatricianProxy = {
  list,
  searchByName
}

export default PediatricianProxy

