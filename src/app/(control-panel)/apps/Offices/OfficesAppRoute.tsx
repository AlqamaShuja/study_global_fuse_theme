import { FuseRouteItemType } from '@fuse/utils/FuseUtils';
import OfficesApp from './OfficesApp';
import Office from './Office/Office';

/**
 * The E-Commerce app Routes.
 */
const OfficesAppRoute: FuseRouteItemType = {
  path: 'apps/offices',
  element: <OfficesApp />,
  children: [
    {
      path: '',
      element: <Office />,
    },
    // {
    //   path: 'products',
    //   children: [
    //     {
    //       path: '',
    //       element: <Products />,
    //     },
    //     {
    //       path: ':productId/:handle?',
    //       element: <Product />,
    //     },
    //   ],
    // },
    // {
    //     path: 'orders',
    //     children: [
    //         {
    //             path: '',
    //             element: <Orders />
    //         },
    //         {
    //             path: ':orderId',
    //             element: <Order />
    //         }
    //     ]
    // }
  ],
};

export default OfficesAppRoute;
