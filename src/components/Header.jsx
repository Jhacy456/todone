import { Bell, CalendarDays, Search } from 'lucide-react'
import React from 'react'

const Header = () => {
    return (
        <header className='shadow-lg'>
            <div className='flex items-center justify-between mx-4 py-2'>
                <span className='flex text-[#631D9B] text-2xl font-bold'>Dash<h1 className='text-black '>Board</h1></span>
                <form className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search your task here..."
                        className="rounded  shadow-lg w-[50vw] px-3 py-2"
                    />
                    <button className="shadow-lg rounded px-2 py-2 flex items-center bg-[#631D9B]" type='submit'>
                        <Search className='text-white' />
                    </button>
                </form>

                <div className='space-x-3'>
                    <button className='rounded-xl bg-[#631D9B] text-white px-2 py-2'><Bell /></button>
                    <button  className='rounded-xl bg-[#631D9B] text-white px-2 py-2'><CalendarDays /></button>
                </div>
                <div>
                    <span><h1 className='font-bold'>Tuesday</h1><h3 className='text-blue-600'>10/12/2024</h3></span>
                </div>
            </div>
        </header> 
    )
}

export default Header