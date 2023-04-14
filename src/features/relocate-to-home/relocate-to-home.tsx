import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui";

export const RelocateToHome = () => {
  const navigate = useNavigate();

  const relocate = () => {
    navigate("/");
    location.reload();
  };

  return <Button title='Домой' handler={relocate} />;
};
