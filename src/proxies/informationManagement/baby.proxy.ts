import { Request, Response, NextFunction } from 'express';
import proxy from 'express-http-proxy';
import ServerURL from '../../config/servers.config';
import { io } from '../../app';


const targetUrl: string = ServerURL.targetUrlInformationManagement

const save = (req: Request, res: Response, next: NextFunction) => {  
  console.log("guardando baby")
  console.log(req.body)
  io.emit('guardarBebe', { data: 'refresh' });
  return proxy(targetUrl, {
    proxyReqPathResolver: (req: Request) => {
      return `/baby/save`;
    },
  })(req, res, next);

};

const getBabyById = (req: Request, res: Response, next: NextFunction) => {  
  
  // console.log("Obteniendo bebe")
  const IdBaby : number = isNaN(Number(req.params.IdBaby)) ? 0: Number(req.params.IdBaby);    

  return proxy(targetUrl, {
    proxyReqPathResolver: (req: Request) => {
      return `/baby/get/${IdBaby}`;
    },
  })(req, res, next);

};


const BabyProxy = {
    save,
    getBabyById
}

export default BabyProxy

