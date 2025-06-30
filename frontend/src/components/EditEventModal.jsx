import axios from "axios";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const EditEventModal = ({
  showModal,
  toggleModal,
  eventData,
  onEventUpdated,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    date: "",
    image: "",
  });

  useEffect(() => {
    if (eventData) {
      setFormData({
        title: eventData.title || "",
        description: eventData.description || "",
        location: eventData.location || "",
        price: eventData.price || "",
        date: eventData.date?.split("T")[0] || "", 
        image: eventData.image || "",
      });
    }
  }, [eventData]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const imgData = new FormData();
      imgData.append("file", file);
      imageData.append("upload_preset", "event_sphere_preset");

      const cloudRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dtuhhy4ys/image/upload",
        imageData
      );
      setFormData((prev) => ({
        ...prev,
        image: cloudRes.data.secure_url,
      }));
    } catch (err) {
      toast.error("Image upload failed");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `${BASE_URL}/api/events/${eventData._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Event updated successfully!");
      onEventUpdated(res.data.event);
      toggleModal();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update event.");
    }
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg w-[90%] max-w-md border border-white/20 shadow-xl text-white relative">
        <button
          onClick={toggleModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
        >
          <X className="cursor-pointer" />
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center">Edit Event</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="w-full border px-4 py-2 rounded"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            className="w-full border px-4 py-2 rounded"
            value={formData.description}
            onChange={handleChange}
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            className="w-full border px-4 py-2 rounded"
            value={formData.location}
            onChange={handleChange}
          />

          <input
            type="text"
            name="price"
            placeholder="Price (use 'Free' or 'NA' if needed)"
            className="w-full rounded px-4 py-2 border"
            value={formData.price}
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            className="w-full px-4 py-2 rounded border"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label className="block text-white mb-1">
            Replace Image (Optional)
          </label>
          <input
            type="file"
            accept="image/*"
            className="w-full border px-4 py-2 rounded cursor-pointer bg-white/10 border-white/10"
            onChange={handleImageChange}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer font-semibold text-xl"
          >
            Update Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEventModal;
