import React from 'react';
import { use, useState } from 'react';
import IssueCard from './IssueCard';
import Managment from './Managment';

const Issue = ({fetchPromise}) => {

    const initialData = use(fetchPromise);
    const [data, setData] = useState(initialData);
    //console.log(data);
    return (
         
        <div className='container mx-auto my-9'>
          <Managment data={data}/>

            <div>
                <h1 className='font-bold text-2xl'>Customer Tickets</h1>
            </div>

         <div className='md:flex md:justify-items-center gap-9'>
            <div className='grid grid-cols-1 md:grid md:grid-cols-2 gap-2'>
             {
                 data.map((issue) => {
                     //console.log(issue);
                     return (
                        <IssueCard issue={issue}></IssueCard>
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