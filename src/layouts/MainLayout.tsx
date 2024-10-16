import { useContext } from 'preact/hooks';
import NavBar from '../common/components/NavBar';
import { SideBar } from '../common/components/SideBar';
import { AppContext } from '../context/AppContext';

export function MainLayout(props: any) {
    const { sidebarOpen } = useContext(AppContext);

    console.log(sidebarOpen);
    return (
        <div className="bg-slate-50 h-full">
            <NavBar />
            <SideBar />
            <div class="p-4">{props.children}</div>
        </div>
    );
}
