import { NextFunction, Request, Response } from "express"
import { Sistemakfs } from "../entity/Sistemakfs"
import { Userkfs } from "../entity/Userkfs"
import { AppDataSource } from "../data-source"
export class SistemaKFSController {

        private UserkfsRepository = AppDataSource.getRepository(Sistemakfs);
      
        async all(request: Request, response: Response, next: NextFunction) {
          return this.UserkfsRepository.find();
        }
      
        async one(request: Request, response: Response, next: NextFunction) {
        
       
          const id = request.params
          const user = await AppDataSource.getRepository(Sistemakfs).findOneBy(id)
          return response.json (user)    
      }
      
        async save(request: Request, response: Response, next: NextFunction) {
          return this.UserkfsRepository.save(request.body);
        }
      
        async update(request: Request, response: Response, next: NextFunction) {
          const id = request.params
          const user = await AppDataSource.getRepository(Userkfs).update(id,request.body)
          if(user.affected ==1){
              const userUpdated = await AppDataSource.getRepository(Userkfs).findOneBy(id)
              response.json(userUpdated)
          }
      } 
        
      async remove(request: Request, response: Response, next: NextFunction) {
      
          const id = request.params
              const user = await AppDataSource.getRepository(Sistemakfs).delete(id)
              if(user.affected ==1){
                  const userUpdated = await AppDataSource.getRepository(Sistemakfs).findOneBy(id)
                  response.json(userUpdated)
                  }}
                  
      }
      
      // Controle de usuarios
      export class UserkfsController {
        private UserkfsRepository = AppDataSource.getRepository(Userkfs);
      
        async all(request: Request, response: Response, next: NextFunction) {
          return this.UserkfsRepository.find();
        }
      
        async one(request: Request, response: Response, next: NextFunction) {
        
       
          const cod = request.params
          const user = await AppDataSource.getRepository(Userkfs).findOneBy(cod)
          return response.json (user)    
      }
       async save(request: Request, response: Response, next: NextFunction) { 
      
       
          const user = await AppDataSource.getRepository(Userkfs).save(request.body)
      return response.json(user)
      }
      
      
      
        async update(request: Request, response: Response, next: NextFunction) {
          const cod = request.params
          const user = await AppDataSource.getRepository(Userkfs).update(cod,request.body)
          if(user.affected ==1){
              const userUpdated = await AppDataSource.getRepository(Userkfs).findOneBy(cod)
              response.json(userUpdated)
          }
      }
      async remove(request: Request, response: Response, next: NextFunction) {
      
      const usuario = request.params
          const user = await AppDataSource.getRepository(Userkfs).delete(usuario)
          if(user.affected ==1){
              const userUpdated = await AppDataSource.getRepository(Userkfs).findOneBy(usuario)
              response.json(userUpdated) 
                 
      
          
          }
        
      }
      
      
        
      
      
      
      }
      