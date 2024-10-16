import Router from 'preact-router';
import './app.css';
import About from './components/About';
import Contact from './components/Contact';
import { Home } from './components/Home';
import SignIn from './components/Login';
import { NotFound } from './components/NotFound';
import { AppProvider } from './context/AppContext';
import { MainLayout } from './layouts/MainLayout';

export function App() {
    return (
        <AppProvider>
            <MainLayout>
                <Router>
                    <Home path="/" />
                    <About path="/about"></About>
                    <Contact path="/contact"></Contact>
                    <SignIn path="/signing"></SignIn>
                    <NotFound default />
                </Router>
            </MainLayout>
        </AppProvider>
    );
}
