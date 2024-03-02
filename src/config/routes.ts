export const routes = {
  neshan: {
    dashboard: '/neshan',
    list: '/neshan/list',
    add: '/neshan/add',
  },
  food: {
    // dashboard: '/neshan',
    list: '/food/list',
    inquiry: '/food/inquiry-list',
    create:'/food/create',
    update: (id: string) => `/food/update/${id}`,
    detail: (id: string) => `/food/detail/${id}`,
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
