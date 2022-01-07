import React from 'react';
import { useUser } from '../../context/UserContext';
import { handleFormChange } from '../../hooks/useForm';
import { createProfile } from '../../services/profiles';

export default function Profile() {
  const { user } = useUser();
  const haveProfile = false;
  const handleCreateProfile = (e) => {
    e.preventDefault();
    createProfile({ name, email, bio, birthday });
    haveProfile = true;
  };

  return (
    <div>
      !haveProfile ? ({/* create profile form */}
      <form onSubmit={handleCreateProfile}>
        {/* name */}
        <input
          type="text"
          id="name"
          name="name"
          value={e.target.value}
          onChange={handleFormChange}
        ></input>
        {/* email - non editable */}
        <span>{user.email}</span>
        {/* birthday */}
        <input
          type="date"
          id="birthday"
          name="birthday"
          value={e.target.value}
          onChange={handleFormChange}
        ></input>
        {/* bio */}
        <input
          type="text"
          id="bio"
          name="bio"
          value={e.target.value}
          onChange={handleFormChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
      ) : (
      <section>
        {/* name */}
        <p>{name}</p>
        {/* email */}
        <p>{email}</p>
        {/* birthday */}
        <p>{birthday}</p>
        {/* bio */}
        <p>{bio}</p>
      </section>
      )
    </div>
  );
}
