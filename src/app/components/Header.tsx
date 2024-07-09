import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

export default function HeadBar() {
    return (
        <div className='p-4 fixed top-8 right-0 flex items-center w-full lg:w-[74%] xl:w-[78%] 2xl:w-[84%] justify-between
         bg-blue-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-blue-100'>

            <div>
                <h4 className='flex gap-2 text-sm'>
                    <span>Pages</span>
                    <span>/</span>
                    <span>Main Dashboard</span>
                </h4>
                <h2 className='text-3xl font-bold'>Main Dashboard</h2>
            </div>

            <div className='bg-white rounded-full p-2 flex gap-2 items-center text-[#a0aec0] shadow-xl'>
                <div className='p-2 rounded-full flex gap-2 items-center bg-[#f4f7fe]'>
                    <SearchIcon className='text-black' />
                    <input type="text" className='bg-inherit outline-none' />
                </div>
                <div className='flex gap-2'>
                    <MenuOutlinedIcon className='lg:hidden flex' />
                    <NotificationsNoneOutlinedIcon />
                    <ErrorOutlineOutlinedIcon />
                    <ColorLensOutlinedIcon />
                </div>
            </div>
        </div>
    );
}