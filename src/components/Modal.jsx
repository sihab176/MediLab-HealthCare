"use client";
import React, { useState } from "react";
import SuggestDoctorCard from "./SuggestDoctrorCard/SuggestDoctorCard";

const Modal = ({ open, setOpen }) => {
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestDoctor, setSuggestDoctor] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState({});

  //TODO : This is  normal chat bot --------->
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const r = await fetch("/api/generate", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ note }),
  //   });
  //   const data = await r.json();
  //   setRes(data.text || data.error || "No response");
  //   setOpen(false);
  // };

  //handle submit------------->
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const r = await fetch("/api/suggest-doctors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ note }),
    });
    const data = await r.json();
    setSuggestDoctor(data);
    setLoading(false);
  };

  //handle cancel------------->
  const handleCancel = () => {
    setOpen(false);
    setSuggestDoctor([]);
    setNote(null);
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] relative">
            {/* close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-xl"
            >
              ✕
            </button>

            {/* content */}
            {suggestDoctor.length === 0 ? (
              <>
                <h3 className="font-bold text-lg">Add Basic Details</h3>
                <p className="py-2 text-gray-500">
                  Add Symptoms or Any Other Details
                </p>

                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Add Details Here..."
                  className="h-[160px] w-full p-4  border-2 border-gray-400 rounded-lg text-gray-800  focus:outline-none focus:border-[#4161a3] focus:ring-2 focus:ring-blue-200 transition-all "
                />

                <div className="flex justify-end mt-4">
                  <button
                    onClick={handleSubmit}
                    disabled={!note || loading}
                    className="btn bg-black/80 text-white px-5"
                  >
                    Next
                    {loading && (
                      <span className="loading loading-spinner ml-2"></span>
                    )}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-2">
                  {suggestDoctor.map((doctor) => (
                    <SuggestDoctorCard
                      key={doctor._id}
                      doctor={doctor}
                      selectedDoctor={selectedDoctor}
                      setSelectedDoctor={setSelectedDoctor} // ✅ correct
                    />
                  ))}
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    onClick={handleCancel}
                    disabled={!selectedDoctor}
                    className="btn  btn-sm text-black outline outline-gray-400 px-5"
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
