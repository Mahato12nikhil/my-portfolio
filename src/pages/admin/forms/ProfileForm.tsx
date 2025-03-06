const ProfileForm: React.FC = () => {
  return (
    <div className="flex justify-center items-center m-10! p-5!">
      <div className="w-full max-w-md shadow-md rounded-lg p-6! bg-white">
        <div className="text-center text-xl font-semibold mb-4">
          Profile Information
        </div>
        <form onSubmit={() => {}} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full border focus:outline-none focus: border-black focus:border-sky-600 rounded-md p-2!"
            />
          </div>

          {/* Designation Field */}
          <div className="space-y-2">
            <label htmlFor="designation" className="block font-medium">
              Designation
            </label>
            <input
              id="designation"
              type="text"
              placeholder="Enter your designation"
              className="w-full border rounded-md focus:outline-none focus: border-black focus:border-sky-600 p-2!"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="profile-pic" className="block font-medium">
              Profile Picture
            </label>
            <input id="profile-pic" type="file" className="cursor-pointer focus:outline-none focus: border-black focus:border-sky-600 w-full border rounded-md p-2!" />
          </div>

          <button type="submit" className="w-full bg-sky-400 text-white py-2 rounded-md hover:bg-sky-700 mt-5!">
             Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
