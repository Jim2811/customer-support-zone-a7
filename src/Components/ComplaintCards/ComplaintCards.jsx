import { use } from 'react';
import ComplaintCard from '../ComplaintCard/ComplaintCard';
const ComplaintCards = ({complaints}) => {
    const complaintDatas = use(complaints)
    return (
        <>
            <div className='mw-12 flex justify-between p-3'>
                <div>
                    <h2>Customer Tickets</h2>
                    <div>
                        {
                            complaintDatas.map(complaint => <ComplaintCard complaint = {complaint} key={complaint.id}></ComplaintCard>)
                        }
                    </div>
                </div>
                <div>
                    <div>
                        Task Status
                    </div>
                    <div>
                        Resolved Task
                    </div>
                </div>
            </div>
         </>
    );
};

export default ComplaintCards;