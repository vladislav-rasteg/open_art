import {Navigate, Route, Routes} from 'react-router-dom';
import {routes} from './routes';
import { NOT_FOUND_ROUTE } from '@/shared/utils/consts';
import { Layout } from '../layouts/Layout';

const Router = () => {
	return (
		<Routes>
			{
				routes.map(({path, Component}) =>
					<Route key={path} path={path} element={
						<Layout>
							<Component/>
						</Layout>
					}/>
				)
			}
			{
				<Route path='*' element={<Navigate to={NOT_FOUND_ROUTE}/>} />
			}
		</Routes>
	)
}


export default Router
