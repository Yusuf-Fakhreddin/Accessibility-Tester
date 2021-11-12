import React from "react";
import { Box } from "@mui/system";
import { useForm, Controller } from "react-hook-form";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { getIssues } from "../actions/issuesActions";

const URLinput = () => {
	const {
		// register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();

	const dispatch = useDispatch();
	const onSubmit = (data) => {
		console.log(data);
		dispatch(getIssues(data.url));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Box sx={{ marginY: "15px" }}>
				{/* <input defaultValue="test" {...register("example")} /> */}
				<Typography variant="h3" sx={{ paddingBottom: "15px" }} color="primary">
					Website Accessibility Tester
				</Typography>
				<Grid container justifyContent="center" textAlign="center" spacing={2}>
					<Grid item xs={10} md={9}>
						<Controller
							name="url"
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									fullWidth
									variant="filled"
									label="Enter Website URL"
								/>
							)}
						/>
					</Grid>
					<Grid item xs={10} md={1}>
						<Button
							size="large"
							sx={{ height: "100%" }}
							type="submit"
							variant="contained"
						>
							Submit
						</Button>
					</Grid>
				</Grid>
			</Box>
		</form>
	);
};

export default URLinput;
