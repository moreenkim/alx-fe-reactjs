function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 md:max-w-sm md:p-8 sm:p-4p-4 sm:p-8 max-w-xs sm:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="rounded-full w-24 h-24 sm:w-36 sm:h-36 mx-auto"
        />
        <h1 className="text-lg sm:text-xl text-blue-800 my-4">John Doe</h1>
        <p className="text-sm sm:text-base text-gray-600">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }

  
  export default UserProfile;