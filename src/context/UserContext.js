import React, { createContext, useState } from "react";

const UserContext = createContext();

const initialUser = {id:1, name: "Unzferk", favoriteMovies:[1,2]};


const UserProvider = ( {children} ) =>{

    const [user, setUser] = useState(initialUser);

    const addFavorite = (id) =>{
        
        const isFavorite = user.favoriteMovies.includes(id);
    
        const favoriteMovies = 
        isFavorite 
        ? 
        user.favoriteMovies.filter(movie => movie !== id)
        :
        [...user.favoriteMovies,id]

        setUser({
            ...user,
            favoriteMovies: favoriteMovies
        })
      
    }

    const login = () =>{
        setUser(initialUser);
    }
    const logout = () =>{
        setUser(null);
    }

    const data = {user,login,logout,addFavorite}

    return (
        <UserContext.Provider value={data}>
           {children}
        </UserContext.Provider>
    )
}

export {UserProvider};
export default UserContext;