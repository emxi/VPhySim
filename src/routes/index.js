import HomePage from '../pages/Home';
import UniformMotion from '../pages/SimulatePages/UniformMotion';
import TestPage from '../pages/TestPage';

const publicRoutes = [{ path: '/', component: HomePage }];

const simulateRoutes = [
    {
        path: 'chuyen-dong-thang-deu',
        component: UniformMotion,
        title: 'Chuyển động thẳng đều',
        image: '',
        grade: 10,
    },
    {
        path: 'chuyen-dong-thang-bien-doi-deu',
        component: HomePage,
        title: 'Chuyển động thẳng biến đổi đều',
        image: '',
        grade: 10,
    },
    {
        path: 'dinh-luat-2-newton',
        component: HomePage,
        title: 'Định luật 2 Newton',
        image: '',
        grade: 10,
    },
    {
        path: 'khuc-xa-anh-sang',
        component: HomePage,
        title: 'Khúc xạ ánh sáng',
        image: '',
        grade: 11,
    },
    { path: 'test', component: TestPage, title: 'Test Page', image: '', grade: 10 },
];

export { publicRoutes, simulateRoutes };
