import axios from "axios";
import React, { useEffect, useState } from "react";
import Searchbar from "../Components/Searchbar";
import UserList from "../Components/UserList";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { AddUsers, ClearUsers } from "../store/reducers/userReducer";

const Homepage: React.FC = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [query, setQuery] = useState("");
    const dispatch = useAppDispatch();
    

    //function to fetch all users from api
    const fetchAllUsers = async () => {
        try{
            setLoading(true)
            const results = await axios.get("https://jsonplaceholder.typicode.com/users");
            
            //if data is fetched and okay save data to redux state
            if (results.status === 200) dispatch(AddUsers(results.data));
            else throw new Error("Could not fetch Users");
        } catch(e){
            setError(true);
        }
        finally{
            setTimeout(()=>setLoading(false), 2000)
        }
    }

    //function to refresh data gotten from api
    const refreshUsers = () => {
        dispatch(ClearUsers());
        fetchAllUsers();
    }

    // fetch all users once page is loaded
    useEffect(()=>{
        fetchAllUsers();
    },[])

    return ( 
        <div className="max-w-[480px] mx-auto my-4" >
            <Searchbar setQuery={setQuery} query={query} loading={loading} />
            <div className="w-full">
            {!loading && (
                <button
                    className="bg-blue-400 rounded-md p-2 text-white mx-auto mt-2 hover:bg-blue-300"
                    onClick={refreshUsers}
                >
                    Refresh List
                </button>
            )}
            </div>
            {loading ? <h1>Loading...</h1> : <UserList query={query} />}
            {error && <h1> Could not fetch data</h1>}
            
        </div>
    );
}
 
export default Homepage;