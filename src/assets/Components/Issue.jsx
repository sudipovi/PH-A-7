import React from 'react';
import { use } from 'react';

const Issue = ({fetchPromise}) => {

    const initialData = use(fetchPromise);
    console.log(initialData);
    return (
        <div className='container mx-auto my-9'>
            <div>
                <h1 className='font-bold text-2xl'>Customer Tickets</h1>
            </div>

         <div className='flex justify-items-center gap-9'>
            <div className='grid grid-cols-2 gap-2'>
             {
                 initialData.map((issue) => {
                     console.log(issue);
                     return (
                        <div className="container mx-auto mb-9">
                            <div className="rounded-md shadow-lg h-[110px] w-[500px] p-3">
                              <div className="flex justify-between">
                                <h1 className="font-bold">
                                  {issue.title}
                                </h1>
                                <button className={`rounded-2xl ${issue.status == 'Open' ? "bg-green-200 text-green-500 w-20" : issue.status == 'In Progress' ? "bg-yellow-200 text-yellow-500 w-30" : "text-2xl" }`}>
                                  {issue.status}
                                </button>
                              </div>
                              <p className="my-2">{issue.description}</p>
                              <div className="flex justify-between">
                                <div className="flex justify-between gap-5">
                                  <p>#100{issue.id}</p>
                                  <p className={`font-semibold ${issue.priority == 'High' ? "text-red-500" : issue.priority == 'Medium' ? "text-yellow-500" : "text-green-500" }`}>{issue.priority}</p>
                                </div>
                                <div className="flex justify-between gap-5">
                                  <p>{issue.customer}</p>
                                  <p>{issue.createdAt}</p>
                                </div>
                              </div>
                            </div>
                        </div>
                     )
                 })
             }
            </div>
            <div>
                <div>
                    <h1 className='font-bold text-2xl'>Task Status</h1>
                </div>
                <div>
                    <h1 className='font-bold text-2xl'>Resolved Task</h1>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Issue;