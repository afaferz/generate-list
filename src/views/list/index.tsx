import { Link, useSearchParams } from "react-router-dom";
import ListManager from "../../components/Lists/ListManager";

function List() {
    const [searchParams] = useSearchParams();
    const listType = searchParams.get("type");

    return (
        <div>
            <Link to="/">AAAAA</Link>
            <h1>List {listType}</h1>
            <ListManager></ListManager>
        </div>
    );
}

export default List;
