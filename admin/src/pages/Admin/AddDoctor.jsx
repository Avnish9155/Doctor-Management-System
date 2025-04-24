import { useContext, useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const { backendUrl, aToken } = useContext(AdminContext);

  // Cleanup image URL when docImg changes
  useEffect(() => {
    return () => {
      if (docImg) {
        URL.revokeObjectURL(docImg);
      }
    };
  }, [docImg]);

  const resetForm = () => {
    setDocImg(null);
    setName("");
    setEmail("");
    setPassword("");
    setExperience("1 Year");
    setFees("");
    setAbout("");
    setSpeciality("General physician");
    setDegree("");
    setAddress1("");
    setAddress2("");
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!name || !email || !password || !fees) {
      return toast.error("Please fill in all required fields.");
    }

    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      return toast.error("Please enter a valid email address.");
    }

    try {
      if (!docImg) {
        return toast.error("Image not selected");
      }

      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({
          line1: address1,
          line2: address2,
        })
      );

      const { data } = await axios.post(
        `${backendUrl}/api/admin/add-doctor`,
        formData,
        {
          headers: { aToken },
        }
      );

      if (data.success) {
        toast.success(data.message);
        resetForm();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-2 w-full">
      <p className="mb-3 text-lg font-medium">Add Doctor</p>

      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt="Doctor"
            />
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            id="doc-img"
            hidden
            accept="image/*"
          />
          <p>
            Upload Doctor <br /> picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <InputField
              label="Doctor Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputField
              label="Doctor Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              label="Doctor Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <SelectField
              label="Experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            />
            <InputField
              label="Fees"
              type="number"
              value={fees}
              onChange={(e) => setFees(e.target.value)}
            />
          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <SelectField
              label="Speciality"
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
              options={[
                "General physician",
                "Gynecologist",
                "Dermatologist",
                "Pediatricians",
                "Neurologist",
                "Gastroenterologist",
              ]}
            />
            <InputField
              label="Education"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
            <InputField
              label="Address 1"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
            <InputField
              label="Address 2"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
          </div>
        </div>

        <div>
          <p className="mt-4 mb-2">About Doctor</p>
          <textarea
            className="w-full px-4 pt-2 border rounded"
            placeholder="Write about doctor"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            rows={5}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-primary px-10 py-3 mt-4 text-white rounded-full"
        >
          Add Doctor
        </button>
      </div>
    </form>
  );
};

// Reusable Input component
const InputField = ({ label, ...props }) => (
  <div className="flex-1 flex flex-col gap-1">
    <p>{label}</p>
    <input className="border rounded px-3 py-2" {...props} required />
  </div>
);

// Reusable Select component
const SelectField = ({ label, options, ...props }) => (
  <div className="flex-1 flex flex-col gap-1">
    <p>{label}</p>
    <select className="border rounded px-3 py-2" {...props}>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default AddDoctor;
