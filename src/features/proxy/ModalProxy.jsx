import {IconButton} from "@mui/material";
import {AddCircleOutline} from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import ModalContainerProxy from "./ModalContainerProxy";
import {Fragment} from "react";

const ModalProxy = ({iconButton=<AddCircleOutline />, open, handleOpen, handleClose, children}) => {
    return (
        <Fragment>
            <IconButton
                onClick={handleOpen}
                color='primary'
            >
                {iconButton}
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div>
                    <ModalContainerProxy>
                        {children}
                    </ModalContainerProxy>
                </div>
            </Modal>
        </Fragment>
    );
};

export default ModalProxy;
