import {useState} from "react";
import DataTable from "../../components/dataTable/DataTable";
import { userRows } from '../../data';
import {userColumns} from "./userData";
import "./users.scss";
// import { useQuery } from "@tanstack/react-query";
import AddData from "../../components/addData/AddData";

const Users = () => {
    const [open, updateOpen] = useState(false);

    // TEST THE API

    // const { isLoading, data } = useQuery({
    //   queryKey: ["allusers"],
    //   queryFn: () =>
    //     fetch("http://localhost:8800/api/users").then(
    //       (res) => res.json()
    //     ),
    // });

    return (
        <div className='users'>
            {/* user's info */}
            <div className='users__info'>
                <h1>Users</h1>
                <button onClick={() => updateOpen(true)}>Add New User</button>
            </div>

            {/* table */}
            {<DataTable slug={"users"} columns={userColumns} rows={userRows} />}

            {/* add user overlay */}
            {open && (
                <AddData
                    slug={"user"}
                    columns={userColumns}
                    updateOpen={updateOpen}
                />
            )}
        </div>
    );
};

export default Users;
