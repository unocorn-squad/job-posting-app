import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const ovalBulletStyle = {
  width: "4px",
  height: "4px",
  borderRadius: "50%",
  backgroundColor: "#6E8098",
  margin: "8px 10px 0 13px",
};

const JobCard = ({
  location,
  jobType,
  title,
  companyName,
  companyLogo,
  time,
}) => {
  return (
    <Box
      sx={{
        height: "228px",
        width: { xs: "327px", md: "339px", lg: "350px" },
        borderRadius: "6px",
        bgcolor: "white",
        display: "grid",
        alignItems: "center",
        justifyItems: "center",
        position: "relative",
      }}
    >
      <img
        src={companyLogo}
        alt="scoot_logo"
        style={{
          padding: "25px 10px",
          position: "absolute",
          left: "32px",
          top: "-32px",
          backgroundColor: "#E99210",
          borderRadius: "20px",
        }}
      />

      <Box
        sx={{
          height: "147px",
          width: "286px",
          textAlign: "left",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "regular", color: "#6E8098" }}
          >
            {time}
          </Typography>

          <Typography component="div" style={ovalBulletStyle} />

          <Typography
            sx={{ fontSize: "16px", fontWeight: "regular", color: "#6E8098" }}
          >
            {jobType}
          </Typography>
        </Box>

        <Typography
          variant="h6"
          component="div"
          sx={{ fontSize: "20px", fontWeight: "bold", paddingTop: "10px" }}
        >
          {title}
        </Typography>
        <Typography
          component="div"
          sx={{
            fontSize: "16px",
            fontWeight: "regular",
            color: "#6E8098",
            paddingTop: "10px",
          }}
        >
          {companyName}
        </Typography>

        <Typography
          component="div"
          sx={{
            paddingTop: "50px",
            fontSize: "14px",
            fontWeight: "bold",
            color: "#5964E0",
          }}
        >
          {location}
        </Typography>
      </Box>
    </Box>
  );
};

JobCard.propTypes = {
  location: PropTypes.string.isRequired,
  jobType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  companyLogo: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default JobCard;
