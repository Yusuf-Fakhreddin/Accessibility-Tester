import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const IssueBox = ({ issue }) => {
	return (
		<Box
			data-aos="fade-up"
			sx={{
				border: "1.5px solid #e0e0e0",
				borderRadius: "5px",
				padding: "15px",
				margin: "15px",
			}}
		>
			<Typography variant="h5">{issue.message}</Typography>
			<Typography
				variant="subtitle1"
				sx={{
					marginTop: "5px",
					padding: "5px 10px",
					backgroundColor: "#e0e0e0",
				}}
			>
				{issue.context}
			</Typography>
		</Box>
	);
};

export default IssueBox;
