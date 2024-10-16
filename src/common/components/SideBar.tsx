import { XMarkIcon } from '@heroicons/react/20/solid';
import { useContext } from 'preact/hooks';
import { AppContext } from '../../context/AppContext';
export function SideBar(_props: any) {
    const { sidebarOpen, setSidebarOpen } = useContext(AppContext);

    function closeSidebar() {
        setSidebarOpen(false);
    }
    return (
        <aside
            className="fixed w-1/5 bg-gray-900 text-white p-4 fixed left-0 h-full z-10 transform transition-transform duration-300 ease-in-out"
            style={{ transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)' }}
        >
            <div className="absolute top-4 right-4 flex justify-center items-center" onClick={closeSidebar}>
                <XMarkIcon className="h-6 w-6 cursor-pointer" />
            </div>
            <h2 className="text-2xl font-bold">Categorías</h2>
            <ul className="mt-4">
                <li className="p-2">Electrónica</li>
                <li className="p-2">Hogar</li>
                <li className="p-2">Jardín</li>
                <li className="p-2">Deportes</li>
                <li className="p-2">Juguetes</li>
                <li className="p-2">Tecnología</li>
            </ul>
        </aside>
    );
}
