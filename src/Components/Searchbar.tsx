import React, { FC } from "react";

interface SearchBarProps{
    query: string
    setQuery: React.Dispatch<React.SetStateAction<string>>
    loading: boolean
}


const Searchbar: FC<SearchBarProps> = ({query, setQuery, loading}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!loading) setQuery(e.target.value);
    }

    return ( 
        <form >
            <div className="flex w-full items-center gap-5">
                <input 
                    type="search"
                    className= "border-2 border-slate-400 border-solid rounded-md p-2 grow outline-none"
                    placeholder="Search Users Here"
                    onChange={handleChange}
                    value={query}
                />
            </div>
        </form>
    );
}
 
export default Searchbar;