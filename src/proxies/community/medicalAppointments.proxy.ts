import { Request, Response, NextFunction } from 'express';
import proxy from 'express-http-proxy';
import ServerURL from '../../config/servers.config';
import { io } from '../../app';



const targetUrl: string = ServerURL.targetUrlCommunity

const list = (req: Request, res: Response, next: NextFunction) => {

  const IdBaby: string = req.params.IdBaby ?? "0"
  // console.log("Listando citas medicas de ", { IdBaby })
  io.emit('guardarCitaMedica', { data: 'refresh' });
  return proxy(targetUrl, {
    proxyReqPathResolver: (req: Request) => {
      return `/medical-appointment/list/${IdBaby}`;
    },
  })(req, res, next);

};


const save = (req: Request, res: Response, next: NextFunction) => {
  return proxy(targetUrl, {
    proxyReqPathResolver: (req: Request) => {
      return `/medical-appointment/save`;
    },
  })(req, res, next);

};

const deletes = (req: Request, res: Response, next: NextFunction) => {
  const IdMedicalAppointment: string = req.params.IdMedicalAppointment ?? "0"
  return proxy(targetUrl, {
    proxyReqPathResolver: (req: Request) => {
      return `/medical-appointment/delete/${IdMedicalAppointment}`;
    },
  })(req, res, next);

};


const MedicalAppointmentsProxy = {
  list,
  save,
  deletes
}

export default MedicalAppointmentsProxy

