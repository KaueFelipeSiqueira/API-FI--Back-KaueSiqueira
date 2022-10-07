import { UserkfsController } from "./controller/UserkfsController"
import { SistemaKFSController } from "./controller/UserkfsController"

export const Routes = [{
    method: "get",
    route: "/Sistemakfs",
    controller: SistemaKFSController,
    action: "all",
  },
  {
    method: "get",
    route: "/Sistemakfs/:id",
    controller: SistemaKFSController,
    action: "one",
  },
  {
    method: "post",
    route: "/Sistemakfs",
    controller: SistemaKFSController,
    action: "save",
  },
  {
    method: "put",
    route: "/Sistemakfs/:id",
    controller: SistemaKFSController,
    action: "update",
  },

  {
    method: "delete",
    route: "/Sistemakfs/:id",
    controller: SistemaKFSController,
    action: "remove",
  },


  //user
  {
    method: "get",
    route: "/Userkfs",
    controller: UserkfsController,
    action: "all"
  },
  {
    method: "get",
    route: "/Userkfs/:cod",
    controller: UserkfsController,
    action: "one"
}, {
    method: "put",
    route: "/Userkfs/:cod",
    controller: UserkfsController,
    action: "update",
  },{
    method: "post",
    route: "/Userkfs",
    controller: UserkfsController,
    action: "save"
}, {
    method: "delete",
    route: "/Userkfs/:cod",
    controller: UserkfsController,
    action: "remove"
}]