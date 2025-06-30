import axios from "axios";
import { File, X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const CreateEventModal = ({ showModal, toggleModal, onEventCreated }) => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    date: "",
    image: null,
  });

  const handleChange = (e) => {
    setNewEvent((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    setNewEvent((prev) => ({
      ...prev,
      image: e.target.files[0]
    }))
  }

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    try {
      let imageUrl = ""
      if(newEvent.image) {
        const imageData = new FormData();
        imageData.append("file", newEvent.image);
        imageData.append("upload_preset", "event_sphere_preset");

        const cloudRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dtuhhy4ys/image/upload",
          imageData
        )

        imageUrl = cloudRes.data.secure_url;
      }

      const token = localStorage.getItem("token");
      const res = await axios.post(`${BASE_URL}/api/events`,
      {
        ...newEvent,
        image: imageUrl,
      } , {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Event created successfully!");
      onEventCreated(res.data.event);
      toggleModal();
      setNewEvent({
        title: "",
        description: "",
        location: "",
        price: "",
        date: "",
        image: null,
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong.");
    }
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 backdrop-blur-sm ">
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg w-[90%] max-w-md border border-white/20 shadow-xl text-white relative">
        <button
          onClick={toggleModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
        >
          <X className="cursor-pointer"/>
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-white text-center ">Create New Event</h2>
          <form onSubmit={handleCreateEvent} className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="w-full border px-4 py-2 rounded"
              value={newEvent.title}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              className="w-full border px-4 py-2 rounded"
              value={newEvent.description}
              onChange={handleChange}
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="w-full border px-4 py-2 rounded"
                value={newEvent.location}
                onChange={handleChange}
              />
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="w-full rounded px-4 py-2 border"
                value={newEvent.price}
                onChange={handleChange}
              />
              <input
                type="date"
                name="date"
                placeholder="Date"
                className="w-full px-4 py-2 rounded border"
                value={newEvent.date}
                onChange={handleChange}
                required
              />
              <label className="block text-white mb-1">Image</label>
              <input
                type="file"
                accept="image/*"
                className="w-full border px-4 py-2 rounded cursor-pointer bg-white/10 border-white/10"
                onChange={handleImageChange}
              />
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 cursor-pointer font-semibold text-xl"
              >
                Create
              </button>
          </form>
      </div>
    </div>
  );
};

export default CreateEventModal;
