import {useState,useEffect} from "react"

export function useCheckIfUserIsOnline(){

    const [isOnline,setIsOnline] = useState(navigator.onLine);

    useEffect(()=>{
        function online(){
            setIsOnline(true);
        }

        function offline(){
            setIsOnline(false)
        }

        window.addEventListener("online",online)
        window.addEventListener("offline",offline)

        return () => {
            window.removeEventListener("online",online)
            window.removeEventListener("offline",offline)
        }
    },[])

    return isOnline
}