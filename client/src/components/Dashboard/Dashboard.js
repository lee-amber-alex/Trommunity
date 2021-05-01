import React, {useState, useEffect} from 'react'
import { useAuth } from '../../contexts/AuthContext'
import API from "../../utils/API"
import TradeCard from "../TradeCard/TradeCard"

export default function Dashboard() {
    const {currentUser} = useAuth();
    const [tradePost, setTradePost] = useState([]);
    const getUser = currentUser.uid

    useEffect(() => {
    //    if [], run once when the page loads and don't run again.
    // if [input], run everytime input changes.
    async function fetchData() {
       
        const request = await API.getTrade(getUser).then( res => {
            console.log(res.data);
            setTradePost(res.data)
            
        });
    }
    
    fetchData();

    }, [getUser])

console.log(tradePost);

    return (
        <div>
            {tradePost.map((posts) =>(
                <TradeCard
                email={posts.email}
                need={posts.need}
                trades={posts.trades}
                description={posts.description}
                />
            ))}
        </div>
    )
}
