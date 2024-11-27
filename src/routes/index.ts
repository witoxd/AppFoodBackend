
import { RoleRoutes } from './role';
import { PedidosRoutes } from './Pedidos';
import { Det_PedidosRoutes } from './Det_Pedidos';
import { ProductosRoutes } from './Producto';
import { RoleUserRoutes } from './role_user';
import { RefreshTokenRoutes } from './refresh_token';
import { AuthRoutes } from './AuthController';
import { NegocioRoutes } from './Negocio';

export class Routes {
    public Det_PedidosRoutes: Det_PedidosRoutes = new Det_PedidosRoutes();
    public PedidosRoutes: PedidosRoutes = new PedidosRoutes();
    public ProductosRoutes: ProductosRoutes = new ProductosRoutes();
    public NegocioRoutes: NegocioRoutes = new NegocioRoutes();
    public roleRoutes: RoleRoutes = new RoleRoutes();
    public roleUserRoutes: RoleUserRoutes = new RoleUserRoutes();
    public authRoutes: AuthRoutes = new AuthRoutes();
    public refreshTokenRoutes: RefreshTokenRoutes = new RefreshTokenRoutes();

}
