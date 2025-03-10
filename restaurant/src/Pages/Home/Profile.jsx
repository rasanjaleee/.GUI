import React, { useEffect, useState } from "react";
import "./Profile.css";
import profile from "../../assets/profile.jpeg";
import { IoSettingsOutline } from "react-icons/io5";
import background from '../../assets/profile-background.avif'

const Profile = () => {
  const [user, setUser] = useState(null);
  const [showSettings, setShowSettings] = useState(false); // Toggle state for settings menu

  // Simulate fetching user data
  useEffect(() => {
    setTimeout(() => {
      setUser({
        profilePicture: profile,
        fullName: "Rasanjalee Edirisinghe",
        email: "rasanjaleeedirisinghe2002@gmail.com",
        username: "rasa1234",
        phone: "123-456-7890",
        registrationDate: "2024-02-23T00:00:00",
        lastLoginDate: "2024-02-23T00:00:00",
        vegetarian: true,
        paymentMethods: ["Credit Card", "PayPal"],
      });
    }, 2000); // Simulate API delay
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    
       <div className="profile-container">
      {/* Settings Icon - Positioned at the top-right */}
      <div className="settings-container">
        <div className="setting-icon" onClick={() => setShowSettings(!showSettings)}>
          <IoSettingsOutline />
        </div>

        {/* Show settings buttons only when toggled */}
        {showSettings && (
          <div className="settings-box">
            <button>Edit Profile</button>
            <button>Update Profile</button>
            <button>Delete Profile</button>
          </div>
        )}
      </div>

      <div className="profile-page">
        {/* Profile Header */}
        <ProfileHeader 
          profilePicture={user.profilePicture} 
          fullName={user.fullName} 
          email={user.email} 
        />

        {/* User Details */}
        <UserDetails user={user} />
      </div>
    </div>
    
   
  );
};

// Sub-component for Profile Header
const ProfileHeader = ({ profilePicture, fullName, email }) => (
  <div className="profile-header">
    <img 
      src={profilePicture || profile} 
      alt="Profile" 
      className="profile-picture" 
    />
  </div>
);

// Sub-component for User Details
const UserDetails = ({ user }) => (
  <div className="user-details">
    <p><strong>Name:</strong>{user.fullName}</p>
    <p><strong>Email:</strong>{user.email}</p>
    <p><strong>Username:</strong> {user.username}</p>
    <p><strong>Phone:</strong> {user.phone}</p>
    <p><strong>Registration Date:</strong> {new Date(user.registrationDate).toLocaleDateString()}</p>
    <p><strong>Last Login:</strong> {new Date(user.lastLoginDate).toLocaleString()}</p>
    <p><strong>Vegetarian:</strong> {user.vegetarian ? "Yes" : "No"}</p>
    <p><strong>Payment Methods:</strong> {user.paymentMethods.join(", ")}</p>
  </div>
);

export default Profile;
