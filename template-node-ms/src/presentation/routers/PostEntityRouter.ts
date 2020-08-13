import { ID_Entity_DDTO } from "../../dtos/ID_Entity_DDTO";
import { injectable, inject } from "inversify";
import { RequestRouter, IHttpRequest, IHttpResponse, IHttpError } from "../../shared/interfaces";
import D_Entity_DCase from "../../cases/D_Entity_DCase";
import InjectionReferences from "../../container/inversify.references";

@injectable()
export default class PostD_Entity_DRouter implements RequestRouter {
  @inject(InjectionReferences.D_Entity_DCaseRef) private case: D_Entity_DCase;
  route(req: IHttpRequest<ID_Entity_DDTO, any, any>): Promise<IHttpResponse<ID_Entity_DDTO | IHttpError>> {
    return this.case.createD_Entity_D(req.body);
  }
}