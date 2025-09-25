import React from "react";

const ComplaintCard = ({ complaint }) => {
  return (
    <>
      <div className="bg-white rounded-xl p-4 my-2">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-bold text-xl">{complaint.title}</h2>
          <div className={`flex items-center gap-1 ${complaint.status == "Open" ? "bg-green-200" : "bg-amber-200"} p-2 rounded-2xl`}>
            <div className={`h-[10px] w-[10px] rounded-full ${complaint.status == "Open" ? "bg-green-500" : "bg-amber-500"}` }></div>
            <p>{complaint.status}</p>
          </div>
        </div>
        <div>
            <p>{complaint.description}</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div>
            <span>#{complaint.id}</span> <span 
            className= {`${complaint.priority}`}>{complaint.priority}</span>
          </div>
          <div className="flex items-center gap-3">
            <div><p>{complaint.customer}</p></div>
            <div className="flex items-center gap-2">
                <img src="https://static.vecteezy.com/system/resources/previews/005/988/959/non_2x/calendar-icon-free-vector.jpg" className="w-8 h-8" />
                <p>{complaint.createdAt}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComplaintCard;
