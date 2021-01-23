import { useState } from "react";

export default function useCurrentUsername() {
  const getCurrentUsername = () => {
    const currentUsernameString = localStorage.getItem("currentusername");
    const userCurrentUsername = JSON.parse(currentUsernameString);
    return userCurrentUsername?.currentUsername;
  };

  const [currentUsername, setCurrentUsername] = useState(getCurrentUsername());

  const saveCurrentUsername = (userCurrentUsername) => {
    localStorage.setItem(
      "currentusername",
      JSON.stringify(userCurrentUsername)
    );
    setCurrentUsername(userCurrentUsername.currentUsername);
  };

  return {
    setCurrentUsername: saveCurrentUsername,
    currentUsername,
  };
}
