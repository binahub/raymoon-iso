export const routes = {
  neshan: {
    dashboard: '/neshan',
    list: '/neshan/list',
    add: '/neshan/add',
  },
  featureSample: {
    // dashboard: '/neshan',
    list: '/feature-sample/list',
    inquiry: '/feature-sample/inquiry-list',
    add:'/feature-sample/add',
    edit: (id: string) => `/feature-sample/edit/${id}`,
    detail: (id: string) => `/feature-sample/detail/${id}`,
   },
  executive: {
    dashboard: '/executive',
  },
  accessDenied: '/access-denied',
  notFound: '/not-found',
  signIn: '/signin',
  category: '/category',
  checkboxTree: '/checkbox-tree-sample',
  reactTreeSample: '/react-tree-sample',
  sweetAlertSample: '/sweet-alert-sample',
  datepickerSample: '/datepicker-sample',
  tabSample: '/tab-sample',
};
