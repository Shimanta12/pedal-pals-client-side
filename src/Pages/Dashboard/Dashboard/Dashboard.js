import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Switch, Link, useRouteMatch, useHistory } from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../../AdminRoute/AdminRoute';
import PrivateRoute from '../../../PrivateRoute/PrivateRoute';
import Pay from '../Pay/Pay';
import { Button } from '@mui/material';
import AddReview from '../AddReview/AddReview';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import ReorderIcon from '@mui/icons-material/Reorder';
import PaymentIcon from '@mui/icons-material/Payment';
import RateReviewIcon from '@mui/icons-material/RateReview';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MyOrders from './../MyOrders/MyOrders';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();

    const history = useHistory()

    const { admin, logOut } = useAuth()

    const handleLogOut = () => {
        logOut()
        history.push('/')
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div >
            <Toolbar />
            <List>
                <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
                    <ListItem button key={'Home'} >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Home'} />
                    </ListItem>
                </Link>
                {!admin ? <>
                    <Link to={`${url}/myorders`} style={{ color: 'black', textDecoration: 'none' }}>
                        <ListItem button key={'my-orders'} >
                            <ListItemIcon>
                                <ReorderIcon />
                            </ListItemIcon>
                            <ListItemText primary={'My Orders'} />
                        </ListItem>
                    </Link>
                    <Link to={`${url}/pay`} style={{ color: 'black', textDecoration: 'none' }}>
                        <ListItem button key={'pay'} >
                            <ListItemIcon>
                                <PaymentIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Pay'} />
                        </ListItem>
                    </Link>
                    <Link to={`${url}/addreview`} style={{ color: 'black', textDecoration: 'none' }}>
                        <ListItem button key={'Add Review'}>
                            <ListItemIcon>
                                <RateReviewIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Add Review'} />
                        </ListItem>
                    </Link>
                </>
                    :
                    <>
                        <Link to={`${url}/manageorders`} style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none' }}>
                            <ListItem button key={'manage-orders'}>
                                <ListItemIcon>
                                    <ReorderIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Manage Orders'} />
                            </ListItem>
                        </Link>
                        <Link to={`${url}/addproduct`} style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none' }}>
                            <ListItem button key={'add-products'}>
                                <ListItemIcon>
                                    <AddCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Add Product'} />
                            </ListItem>
                        </Link>
                        <Link to={`${url}/manageproducts`} style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none' }}>
                            <ListItem button key={'manage-products'}>
                                <ListItemIcon>
                                    <CreateNewFolderIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Manage Products'} />
                            </ListItem>
                        </Link>
                        <Link to={`${url}/makeadmin`} style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none' }}>
                            <ListItem button key={'make-admin'}>
                                <ListItemIcon>
                                    <AccountCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Make Admin'} />
                            </ListItem>
                        </Link>
                    </>
                }
                <Button onClick={handleLogOut} sx={{ mt: 5 }} variant="contained" endIcon={<LogoutIcon />} size="small">Log Out</Button>
            </List>
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: { md: 3 }, width: { xs: 1, sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    {admin ?
                        <AdminRoute exact path={path}>
                            <ManageOrders />
                        </AdminRoute>
                        :
                        <PrivateRoute exact path={path}>
                            <MyOrders />
                        </PrivateRoute>}
                    <PrivateRoute path={`${path}/myorders`}>
                        <MyOrders />
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/pay`}>
                        <Pay />
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/addreview`}>
                        <AddReview />
                    </PrivateRoute>
                    <AdminRoute path={`${path}/addproduct`}>
                        <AddProduct />
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageorders`}>
                        <ManageOrders />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproducts`}>
                        <ManageProducts />
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;