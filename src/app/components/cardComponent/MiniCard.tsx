import BarChartIcon from '@mui/icons-material/BarChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import AddTaskIcon from '@mui/icons-material/AddTask';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

// type Data = {
//     title: string,
//     icon: string,
//     value: string,
//     type: string,
//     sales?: string
// }[]

const CardData = [
    {
        id: 1,
        title: "Earnings",
        icon: BarChartIcon,
        value: "$350.4",
        type: 'left'
    },
    {
        id: 2,
        title: "Spend this month",
        icon: AttachMoneyIcon,
        value: "$642.39",
        type: 'left'
    },
    {
        id: 3,
        title: "Sales",
        icon: "since last month",
        value: "$574.34",
        type: 'normal',
        sales: '+23%'
    },
    {
        id: 4,
        title: "Your Balance",
        icon: TaskAltIcon,
        value: "$1000",
        type: 'right'
    },
    {
        id: 5,
        title: "New Task",
        icon: AddTaskIcon,
        value: "154",
        type: 'left'
    },
    {
        id: 6,
        title: "Total Projects",
        icon: FileCopyIcon,
        value: "2935",
        type: 'left'
    },
]



export default function MiniCard() {
    return (
        <div className="w-full grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 h-fit 2xl:grid-cols-6 gap-5">
            {
                CardData.map((card) => {
                    return (
                        card.type === 'left' ? (
                            <div key={card.id} className="p-4 flex items-center gap-6 rounded-3xl h-[6rem] w-full bg-white">
                                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                                    <card.icon style={{ fontSize: 34 }} className='text-[#422afb]' />
                                </div>
                                <div>
                                    <div className='text-gray-400 text-xs'>{card.title}</div>
                                    <div className='text-2xl font-bold'>{card.value}</div>
                                </div>
                            </div>
                        ) : card.type === 'right' ? (
                            <div key={card.id} className="p-4 flex items-center flex-row-reverse justify-between gap-6 rounded-3xl h-[6rem] w-full bg-white">
                                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                                    <card.icon style={{ fontSize: 34 }} className='text-[#422afb]' />
                                </div>
                                <div>
                                    <div className='text-gray-400 text-xs tracking-wider'>{card.title}</div>
                                    <div className='text-2xl font-bold'>{card.value}</div>
                                </div>
                            </div>
                        ) : (
                            <div key={card.id} className="p-4 rounded-3xl h-[6rem] w-full bg-white flex justify-center flex-col gap-1">
                                <div className="text-gray-400 text-xs tracking-wider">{card.title}</div>
                                <div className='text-2xl font-bold'>{card.value}</div>
                                <div className='text-gray-400 text-xs tracking-wider'><span className='text-green-600'>{card.sales}</span> {card.title}</div>
                            </div >
                        )
                    )
                })
            }
        </div>
    )
};



const CardComponentLeft = () => {
    return (

        <div className="p-4 flex items-center gap-6 rounded-3xl h-[6.5rem] w-full bg-white">
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                <BarChartIcon style={{ fontSize: 34 }} className='text-[#422afb]' />
            </div>
            <div className='font-bold'>
                <div className='text-gray-400 text-sm'>Earnings</div>
                <div className='text-2xl'>$350.4</div>
            </div>
        </div>
    )
}

const CardComponentRight = () => {
    return (
        <div className="p-4 flex items-center flex-row-reverse justify-between gap-6 rounded-3xl h-[6.5rem] w-full bg-white">
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                <BarChartIcon style={{ fontSize: 34 }} className='text-[#422afb]' />
            </div>
            <div className='font-bold'>
                <div className='text-gray-400 text-xs tracking-wider'>Earnings</div>
                <div className='text-2xl'>$350.4</div>
            </div>
        </div>
    )
}

const CardComponentNormal = () => {
    return (
        <div className="p-4 rounded-3xl h-[6.5rem] w-full bg-white flex flex-col gap-1">
            <div className="text-gray-400 text-xs tracking-wider">Sales</div>
            <div className='text-2xl font-bold'>$350.4</div>
            <div className='text-gray-400 text-xs tracking-wider'><span className='text-green-600'>23%</span> since last month</div>
        </div >
    )
}