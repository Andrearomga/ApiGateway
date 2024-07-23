import { Request, Response, NextFunction } from 'express';
import proxy from 'express-http-proxy';
import ServerURL from '../../config/servers.config';



const targetUrl: string = ServerURL.targetUrlInformationManagement

const list = (req: Request, res: Response, next: NextFunction) => {
  // console.log("Listando")
  const IdBaby: string = req.params.IdBaby ?? "";
  return proxy(targetUrl, {
    proxyReqPathResolver: (req: Request) => {
      return `/dream/list/${IdBaby}`;
    },
  })(req, res, next);

};

const save = (req: Request, res: Response, next: NextFunction) => {
  // console.log("Guardando sueños")
  return proxy(targetUrl, {
    proxyReqPathResolver: (req: Request) => {
      return `/dream/save`;
    },
  })(req, res, next);

};

const update = (req: Request, res: Response, next: NextFunction) => {
  
    const IdDream : string = req.params.IdDream ?? "";
    return proxy(targetUrl, {
      proxyReqPathResolver: (req: Request) => {
        return `/dream/update/${IdDream}`;
      },
    })(req, res, next);
  
  };
  
  const deletes = (req: Request, res: Response, next: NextFunction) => {
    const IdDream : string = req.params.IdDream ?? "";
    return proxy(targetUrl, {
      proxyReqPathResolver: (req: Request) => {
        return `/dream/delete/${IdDream}`;
      },
    })(req, res, next);
  
  };


const DreamProxy = {
  list,
  save,
  update,
  deletes
}

export default DreamProxy

