import { Request, Response, NextFunction } from 'express';
import proxy from 'express-http-proxy';
import ServerURL from '../../config/servers.config';



const targetUrl: string = ServerURL.targetUrlInformationManagement

const list = (req: Request, res: Response, next: NextFunction) => {
  // console.log("Obteniendo citas medicas")
  const IdBaby: string = req.params.IdBaby ?? "";
  return proxy(targetUrl, {
    proxyReqPathResolver: (req: Request) => {
      return `/medicalAppointment/list/${IdBaby}`;
    },
  })(req, res, next);

};

const save = (req: Request, res: Response, next: NextFunction) => {
  
  return proxy(targetUrl, {
    proxyReqPathResolver: (req: Request) => {
      return `/medicalAppointment/save`;
    },
  })(req, res, next);

};


const MedicalAppointmentProxy = {
  list,
  save,
  
}

export default MedicalAppointmentProxy

