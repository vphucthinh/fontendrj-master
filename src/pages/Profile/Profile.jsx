import React, { useContext, useEffect } from 'react';
import './Profile.css';
import { StoreContext } from '../../context/StoreContext';
import AccountSettings from '../../Components/AccountSettings/AccountSettings';
import FavoriteItems from '../../Components/FavoriteItems/FavoriteItems';
import ProfileDetails from '../../Components/ProfileDetails/ProfileDetails';

const Profile = () => {
  const { userProfile, fetchUserProfile, token } = useContext(StoreContext);

  useEffect(() => {
    if (token && !userProfile) {
      fetchUserProfile(token);
    }
  }, [token, userProfile, fetchUserProfile]);

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-foruser">
      <ProfileDetails userProfile={userProfile} />
      <AccountSettings userProfile={userProfile} />
      <FavoriteItems userProfile={userProfile} />
    </div>
  );
};

export default Profile;
