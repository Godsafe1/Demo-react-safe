
import { Outlet } from 'react-router';
import Navbar from './../components/shared/main/Navbar';
import Footer from '@/components/shared/main/Footer';


export default function MainLayout() {
  return (
    <>
        <Navbar />
        <div className='pt-16'>
            <Outlet/>
        </div>
        <Footer/>
    </>
  )
}
