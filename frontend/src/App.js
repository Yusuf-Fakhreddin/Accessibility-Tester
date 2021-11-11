import "./App.css";
import URLinput from "./components/URLinput";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { useEffect } from "react";
function App() {
	const { data, loading, error } = useSelector((state) => state.pa11yIssues);
	useEffect(() => {
		console.log(data, loading, error);
	}, [data, loading, error]);
	return (
		<Container>
			<URLinput />
			{data && data.issues ? (
				<Typography variant="h5">No Issues Found</Typography>
			) : (
				<Typography variant="h5"> Issues Found</Typography>
			)}
		</Container>
	);
}

export default App;
