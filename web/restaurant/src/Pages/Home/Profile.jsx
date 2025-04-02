import React, { useEffect, useState } from "react";
import "./Profile.css";
import profile from "../../assets/profile.jpeg";
import { IoSettingsOutline } from "react-icons/io5";
import background from '../../assets/profile-background.avif';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData); // Set user data if it exists
    }
  }, []);

  if (!user) {
    return <p>Please log in to see your profile.</p>;
  }

  return (
    <div className="profile-container">
      {/* Profile Background */}
      <div className="profile-background">
        <img src={background} alt="Profile background" className="background-image" />
      </div>

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
          profilePicture={user.profilePicture || profile} 
          fullName={user.fullName} 
          email={user.email} 
        />

        {/* User Details */}
        <UserDetails user={user} />
      </div>
    </div>
  );
};

export default Profile;
