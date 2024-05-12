import { Box } from "@mui/material";
// import { API_BASE_URL } from "config";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        // style={{ objectFit: "cover", borderRadius: "50%" }}
        className="user-image"
        width={size}
        height={size}
        alt="user"
        src={image}
      />
    </Box>
  );
};

export default UserImage;
