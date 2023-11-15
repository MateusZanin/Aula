import { Route, Routes } from 'react-router-dom';
import { Home } from '../screens/Home';
import { Visualizar } from '../screens/visualizar2';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route
                path='/visualizar2/:Nome'
                element={<Visualizar />}
            />
        </Routes>
    );
}
