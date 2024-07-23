import { Request, Response, NextFunction } from 'express';
import proxy from 'express-http-proxy';
import ServerURL from '../../config/servers.config';
import { io } from '../../app';


const targetUrl: string = ServerURL.targetUrlCommunity

const save = (req: Request, res: Response, next: NextFunction) => {  


  io.emit('newRecord');

  return proxy(targetUrl, {
    proxyReqPathResolver: (req: Request) => {
      return `/chat/save`;
    },
  })(req, res, next);

};

const list = (req: Request, res: Response, next: NextFunction) => {  

  return proxy(targetUrl, {
    proxyReqPathResolver: (req: Request) => {
      return `/chat/list`;
    },
  })(req, res, next);

};


const BabyProxy = {
    save,
    list
}

export default BabyProxy

