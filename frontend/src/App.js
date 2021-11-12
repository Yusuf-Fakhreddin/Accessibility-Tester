import "./App.css";
import URLinput from "./components/URLinput";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import { LinearProgress, Typography } from "@mui/material";
import React, { useEffect } from "react";
import IssueBox from "./components/IssueBox";
function App() {
	const { data, loading, error } = useSelector((state) => state.pa11yIssues);
	useEffect(() => {
		console.log(data, loading, error);
	}, [data, loading, error]);

	if (loading) {
		return (
			<Container>
				<URLinput />
				<LinearProgress sx={{ marginTop: "15px" }} />
			</Container>
		);
	} else
		return (
			<Container>
				<URLinput />
				{data.documentTitle && (
					<>
						<Typography variant="subtitle1" sx={{ display: "inline-block" }}>
							Page Title:&nbsp;
						</Typography>
						<Typography variant="h6" sx={{ display: "inline-block" }}>
							{" "}
							{data.documentTitle}
						</Typography>
					</>
				)}
				{data.issues &&
					React.Children.toArray(
						data.issues.map((issue) => <IssueBox issue={issue} />)
					)}
				{data.issues && data.issues.length === 0 && (
					<Typography variant="h5">No Issues Found</Typography>
				)}
			</Container>
		);
}

export default App;
