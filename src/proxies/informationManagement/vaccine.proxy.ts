import { Request, Response, NextFunction } from 'express';
import proxy from 'express-http-proxy';
import ServerURL from '../../config/servers.config';



const targetUrl: string = ServerURL.targetUrlInformationManagement

const getListByBaby = (req: Request, res: Response, next: NextFunction) => {  
  const IdBaby = req.params.IdBaby;
  const IdVaccineGroup = req.params.IdVaccineGroup;

  return proxy(targetUrl, {
    proxyReqPathResolver: (req: Request) => {
      return `/vaccines/list/by-baby/${IdBaby}/${IdVaccineGroup}`;
    },
  })(req, res, next);

};

const update = (req: Request, res: Response, next: NextFunction) => {
  
  return proxy(targetUrl, {
    proxyReqPathResolver: (req: Request) => {
      return `/vaccines/by-baby/update`;
    },
  })(req, res, next);

};

const VaccineProxy = {
  getListByBaby,
  update
}

export default VaccineProxy

