import { Input, Slider } from '@mui/material';

export default function UniformMotion() {
    return (
        <div className="flex h-full">
            {/* SIDEBAR OPTION */}
            <div className="w-[300px] border-r">
                <div>
                    <h2 className="bg-gray-100 px-3 py-2 text-lg font-bold">Điều chỉnh</h2>
                    <div className="space-y-3 p-3">
                        <div className="">
                            <p className="font-semibold">Vận tốc (m/s):</p>
                            <div className="flex space-x-3">
                                <Slider min={-10} max={10} defaultValue={5} />
                                <Input
                                    value={5}
                                    size="small"
                                    inputProps={{
                                        step: 10,
                                        min: 0,
                                        max: 100,
                                        type: 'number',
                                        'aria-labelledby': 'input-slider',
                                    }}
                                />
                            </div>
                        </div>

                        <div className="">
                            <p className="font-semibold">Thời gian mô phỏng (s):</p>
                            <div className="flex space-x-3">
                                <Slider min={-10} max={10} defaultValue={5} />
                                <Input
                                    value={10}
                                    size="small"
                                    inputProps={{
                                        step: 10,
                                        min: 0,
                                        max: 100,
                                        type: 'number',
                                        'aria-labelledby': 'input-slider',
                                    }}
                                />
                            </div>
                        </div>
                        <div className="">
                            <p className="font-semibold">Vị trí ban đầu (m):</p>
                            <div className="flex space-x-3">
                                <Slider min={-10} max={10} defaultValue={5} />
                                <Input
                                    value={7}
                                    size="small"
                                    inputProps={{
                                        step: 10,
                                        min: 0,
                                        max: 100,
                                        type: 'number',
                                        'aria-labelledby': 'input-slider',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="bg-gray-100 px-3 py-2 text-lg font-bold">Kết quả</h2>
                    <div className="space-y-3 p-3">
                        <div className="">
                            <p className="font-semibold">Thời gian (s):</p>
                            <p className="text-xl font-bold text-blue-500">1.2</p>
                        </div>
                        <div className="">
                            <p className="font-semibold">Vị trí (m): </p>
                            <p className="text-xl font-bold text-blue-500">13</p>
                        </div>

                        <div className="">
                            <p className="font-semibold">Độ dời (m): </p>
                            <p className="text-xl font-bold text-blue-500">6</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 flex-col">
                {/* MAIN WORKSPACE */}
                <div className="relative flex-1">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                            viewBox="0 0 600 600"
                            width="600"
                            height="600"
                            xmlns="http://www.w3.org/2000/svg"
                            className=""
                        >
                            <line
                                x1="30"
                                y1="300"
                                x2="500"
                                y2="300"
                                stroke="black"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                            <polygon fill="black" points="494, 296 504, 300 494, 304" />

                            <circle cx="80" cy="300" r="5" fill="black" />
                            <text x="80" y="290" textAnchor="middle" className="text-xl">
                                O
                            </text>

                            <circle cx="150" cy="300" r="5" fill="black" />
                            <text x="150" y="326" textAnchor="middle" className="text-xl">
                                x0
                            </text>

                            <circle cx="200" cy="300" r="10" fill="red" className="opacity-80" />
                            <text x="200" y="280" textAnchor="middle" className="text-xl">
                                M
                            </text>

                            <line
                                x1="200"
                                y1="300"
                                x2="250"
                                y2="300"
                                stroke="green"
                                strokeWidth="5"
                                strokeLinecap="round"
                            />
                            <polygon fill="green" points="244, 294 256, 300 244, 306" />
                        </svg>
                    </div>
                </div>

                {/* CONTROL */}
                <div className="flex h-[100px] items-center justify-between border-t px-4">
                    <div className="flex w-[500px] items-center space-x-4">
                        <button className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-7 w-7"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        <div className="mt-3 flex-1">
                            <Slider min={0} max={10} defaultValue={1.2} className="my-0" />
                            <div className="-mt-3 flex w-full justify-between">
                                <p>0:01</p>
                                <p>0:10</p>
                            </div>
                        </div>
                    </div>

                    <button className="rounded border border-primary-500 px-3 py-1 font-bold text-primary-500">
                        Hiển thị đồ thị
                    </button>
                </div>
            </div>
        </div>
    );
}
