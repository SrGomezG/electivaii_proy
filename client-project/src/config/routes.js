import { Usuarios } from "../pages/Admin/Usuarios";
import { Contact } from "../pages/General/Contact";
import { Products } from "../pages/General/Products";
import { NotFound } from "../pages/General/NotFound/NotFound";
import { GeneralLayout } from "../layouts/GeneralLayout/GeneralLayout";
import { Listar } from "../pages/Admin/Listar";
import { Crear } from "../pages/Admin/Crear";

const AdminRoutes = [
  { path: "/users", component: Usuarios, layout: GeneralLayout },
  { path: "/products", component: Products, layout: GeneralLayout },
];
const GeneralRoutes = [
  { path: "/contact", component: Contact, layout: GeneralLayout },
  { path: "*", component: NotFound, layout: GeneralLayout },
  { path: "/clients/list", component: Listar, layout: GeneralLayout },
  { path: "/clients/new", component: Crear, layout: GeneralLayout },
];
const AllRoutesProject = [...AdminRoutes, ...GeneralRoutes];

export default AllRoutesProject;
