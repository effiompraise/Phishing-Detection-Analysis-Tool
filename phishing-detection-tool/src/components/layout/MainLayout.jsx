import { Outlet } from 'react-router-dom'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-cyber-dark flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;