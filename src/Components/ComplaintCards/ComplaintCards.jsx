import { use } from 'react';
import ComplaintCard from '../ComplaintCard/ComplaintCard';
const ComplaintCards = ({complaints}) => {
    const complaintDatas = use(complaints)
    return (
        <>
            <div className='mw-12 flex justify-between p-3 gap-4 flex-col md:flex-row'>
                <div className='md:w-[80%]'>
                    <h2 className='font-bold text-2xl mb-4'>Customer Tickets</h2>
                    <div className='grid m:grid-cols-2 gap-3 '>
                        {
                            complaintDatas.map(complaint => <ComplaintCard complaint = {complaint} key={complaint.id}></ComplaintCard>)
                        }
                    </div>
                </div>
                <div className='md:w-[30%]pl-4'>
                    <div>
                        <h2 className='font-bold text-2xl mb-4'>Task Status</h2>
                    </div>
                    <div>
                        <h2 className='font-bold text-2xl'>Resolved Task</h2>
                    </div>
                </div>
            </div>
         </>
    );
};

export default ComplaintCards;