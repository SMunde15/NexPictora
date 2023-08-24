import React, { useState , useEffect} from "react";
import {Container, Grid, IconButton, InputAdornment, TextField, Checkbox, Box,
    FormGroup, FormControlLabel, Link, Stack, Button,} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Styles from './styles';
import './Main.css';

const CheckboxLabels = () => {
    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultNotChecked />} label="Remember Me" />
        </FormGroup>
    );
}

const preventDefault = (event) => event.preventDefault();

const ForgotPassword = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                typography: 'body1',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 'bold',
                marginTop: '2%',
                marginLeft: '5%'
            }}
            onClick={preventDefault}
        >
            <Link href="http://localhost:3000/##" underline="none" color="inherit" >
                {'Forgot Password ?'}
            </Link>
        </Box>
    );
};

const NewAccount = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                typography: {
                    fontFamily: 'Poppins, sans-serif',
                    body1: {
                        fontWeight: 200,
                    },
                },
            }}
            onClick={preventDefault}
        >
            <Link href="http://localhost:3000/#" underline="hover" color = 'inherit'>
                {"Don't have an Account ?"}
            </Link>
        </Box>
    );
};

const Block = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    useEffect(() => {
        // Update window width state when the component mounts
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Container maxWidth='md'>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={8} md={6} lg={6}>
                    <Stack className="block" style={{ textAlign: 'center',  }}>
                        <div style={Styles.WelcomeMessage}>Hi, Welcome Back</div>
                        <div style={Styles.Credentials}>Enter your credentials to continue</div>
                        <div style={Styles.SignIn}>Sign in with Email address</div>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '100%', maxWidth: '19.5rem', height: '6ch' },
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '0.8rem',
                                    width: '100%',
                                    flexShrink: 0,
                                },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" label="Email" variant="outlined" />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '100%', maxWidth: '19.5rem', height: '7ch' },
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '0.8rem',
                                    width: '100%',
                                    flexShrink: 0,
                                },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="outlined-adornment-password"
                                label="Password"
                                variant="outlined"
                                type={showPassword ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleTogglePassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                        <Stack  direction={{ xs: 'column', sm: 'row' }}>
                            <CheckboxLabels />
                            <ForgotPassword />
                        </Stack>
                        <Stack spacing={2} direction="column">
                            <Link href="http://localhost:3000/##" underline="none">
                            <Button
                                variant="contained"
                                sx={{
                                    width: '100%', // Adjusting the width to 100% of the parent container
                                    maxWidth: '20rem',
                                    height: '2.5rem',
                                    marginTop: '5%',
                                    borderRadius: '0.8rem',
                                    background: '#3767A5',
                                }}
                            >
                                Sign In
                            </Button> </Link>
                            <NewAccount />
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>

        </Container>
    );
};

export default Block;
