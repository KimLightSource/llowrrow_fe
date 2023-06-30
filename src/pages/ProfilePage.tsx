import {Fragment} from "react";
import ChangeUsername from "../components/profile/ChangeUsername";
import ChangePassword from "../components/profile/ChangePassword";

const ProfilePage = () => {
    return (
        <Fragment>
            <ChangePassword/>
            <ChangeUsername/>
        </Fragment>
    )
}

export default ProfilePage;
