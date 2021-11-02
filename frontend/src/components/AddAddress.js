import React, { useState } from 'react'
import AddAddressForm from "./AddAddressForm";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import Popup from "./popup";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';



export default function Employees() {

    const [openPopup, setOpenPopup] = useState(false)


    const openInPopup = item => {
        setOpenPopup(true)
    }



    return(
        <>
        <Typography>
            <Button
                color="primary"
                onClick={() => { openInPopup(); } }>
                <EditOutlinedIcon fontSize="small" />
            </Button></Typography><Popup
                title="Employee Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <AddAddressForm />
            </Popup></>
    );
}