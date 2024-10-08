

import{AppBar,Toolbar, Typography} from '@mui/material';

const Header = () =>{
    const logo = process.env.PUBLIC_URL + '/logo_INVOICE-.png';

    return(
        <AppBar color="primary"position='static'>
            <Toolbar>
                {/* <img src={logo} alt="logo"style={{width:120}}/> */}
                <Typography color='Yellow'>Invoice Processing System</Typography>
            </Toolbar>
        </AppBar>
    )
}
export default Header;