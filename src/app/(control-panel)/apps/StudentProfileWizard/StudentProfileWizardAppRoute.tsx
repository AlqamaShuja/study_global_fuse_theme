import { FuseRouteItemType } from '@fuse/utils/FuseUtils';
import StudentProfileWizardApp from './StudentProfileWizardApp';
import StudentRegistrationStepper from './StudentRegistrationStepper';

/**
 * The E-Commerce app Routes.
 */
const StudentProfileWizardAppRoute: FuseRouteItemType = {
  path: 'apps/student-profile-wizard',
  element: <StudentProfileWizardApp />,
  children: [
    {
      path: '',
      element: <StudentRegistrationStepper />,
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

export default StudentProfileWizardAppRoute;
