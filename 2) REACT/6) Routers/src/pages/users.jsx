import { useState } from "react";
import AppLayout from "../components/layout"
import AppTable from "../components/table"
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '4',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
function UsersPage() {

    const [page, setPage] = useState(0)


    // hm chah rahe hain ke array mazeed array main toot jaye
    const paginatedArray = () => {
        let arr = [];
        let chunk = 1;
        for (var i = 0; i < data.length; i += chunk) {
            arr.push(data.slice(i, i + chunk))
        }
        console.log(arr);
        return arr;
    }
    // paginatedArray()
    return (
        <div>
            <AppLayout>
                <h1>Users Page </h1>
                <AppTable data={paginatedArray()[page]} />
                <div>
                    {
                        paginatedArray().map((v, i) =>
                            <button onClick={() => setPage(i)} key={i}>{i + 1}</button>
                        )
                    }
                </div>
            </AppLayout>
        </div>
    )
}
export default UsersPage