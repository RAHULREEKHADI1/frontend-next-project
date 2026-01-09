"use client"
import Button from '@/component/button';
import { useRouter } from 'next/navigation';

const ModelDetailView = () => {
    const stats = [
        { label: 'Entry Price', value: '43,386.86', trend: 'up', color: 'text-[#37CBB0]' },
        { label: 'Forecast', value: '24,723.34', trend: 'up', color: 'text-[#37CBB0]' },
        { label: 'Next Forecast', value: '43,386.86', trend: 'up', color: 'text-[#37CBB0]' },
        { label: 'Current Price', value: '24,675.81', trend: 'down', color: 'text-[#D82C60]' },
        { label: 'Current PNL', value: '56,123.32', trend: 'up', color: 'text-[#37CBB0]' },
    ];
    const router = useRouter();
    return (
        <div className=" min-h-screen p-8 text-white font-sans">
            <nav className="flex items-center gap-2 mb-10 ">
                <span className="text-white text-md">
                    All Schedules
                </span>
                <img src="/_.svg" alt="right_chevron" />
                <span className="text-[#06D6A0] font-semibold">ZT1-07867</span>
            </nav>

            <div className="p-8">
                <div className="flex items-center gap-4 mb-12">
                    <div className="flex items-center justify-center shadow-lg">
                        <img src="/ETH.svg" alt="ETH" />
                    </div>
                    <h1 className="text-sm font-medium">ZT1-07867</h1>
                    <span className="text-[#44FFDD] text-sm font-medium ml-4">+214.96%</span>
                </div>

                {/* Price Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <span className="text-white text-sm">{stat.label}</span>
                            <div className={`flex items-center gap-1 text-md font-medium ${stat.color}`}>
                                {stat.value}
                                {stat.trend === 'up' ? (
                                    <img src="/diagonalUp.svg" alt="up_icon" />
                                ) : (
                                    <img src="/diagonalDown.svg" alt="down_icon" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div className="flex flex-wrap gap-10">
                <Button text="Backtest" className='w-76 text-sm font-medium h-11' onClick={()=> router.push('/schedule/backtest')}/>
                <Button text="Compare" className='w-76 text-sm font-medium h-11' onClick={()=> router.push('/schedule/compare')}/>
            </div>
            <div className='mt-15'>
                <img src="/Chart.svg" alt="BTC_CHART" />
            </div>
        </div>
    );
};

export default ModelDetailView;