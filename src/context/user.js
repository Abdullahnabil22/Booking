// ContactDetails.js
import { useUserContext } from '../context/UserContext';

const ContactDetails = () => {
  const { setUserData } = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({ firstName, lastName, phoneNumber });
    // Navigate to Register or handle accordingly
  };

  // ... rest of your component
};