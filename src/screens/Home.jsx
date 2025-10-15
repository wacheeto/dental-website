import React from 'react';

export default function Home() {
  return (
    <div class="container mx-auto px-4 outline border rounded">
        <h1 class="text-3xl font-bold">Welcome!</h1>
        <p>This section is centered and has responsive width.</p>
        <div className='flex flex-col
         md:flex-row  w-full h-64 py-2'>
            <div className='flex-1 outline p-2 rounded bg-amber-300'>
                test
            </div>
            <div className='flex-1 outline p-2 rounded  bg-amber-300'>
                test
            </div>
        </div>
    </div>

  );
}