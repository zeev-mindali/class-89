import { AccountBox, Password } from "@mui/icons-material";
import { Button, ButtonGroup, Checkbox, TextField, Typography } from "@mui/material";
import notify from "../../Utils/Notify";
import "./Login.css";

function Login(): JSX.Element {
    return (
        <div className="Login Box" style={{marginTop:150}}>
			<Typography variant="h4" className="HeadLine">Login</Typography>
            <hr/><br/><br/>
            <AccountBox style={{fontSize:40, margin:10}}/>
            <TextField label="user name" variant="outlined"/>
            <br/><br/>
            <Password style={{fontSize:40, margin:10}}/>
            <TextField label="Password" type="password" variant="outlined"/>
            <br/><br/>
            <Checkbox/> <label>Remmber me</label>
            <br/><br/>
            <ButtonGroup variant="contained" fullWidth>
                <Button color="primary" onClick={()=>{notify.success("Matan is in the house")}}>Login</Button>
                <Button color="secondary">Register</Button>
            </ButtonGroup>
        </div>
    );
}

export default Login;
