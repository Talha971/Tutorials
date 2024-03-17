import { useParams, useLocation, useSearchParams } from "react-router-dom"

function Profile() {
    const { username } = useParams()
    const location = useLocation()
    console.log('location--->', location);

    const [searchParams, setsearchParams] = useSearchParams()
    console.log('searchParams--->', searchParams.get("name"));

    // console.log('setSearchParams--->', setsearchParams.get("name", "ahmed"));

    return (
        <div><h1>Profile Page ({username})</h1>

            <button onClick={() => {
                searchParams.set("name", "saylani")
                setsearchParams(searchParams)
            }}>Update Search params</button>
        </div>
    )
}
export default Profile