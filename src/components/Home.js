import { useSelector } from 'react-redux';
import TabGroup from './TabGroup';

const selectedUser = state => state;

function Home() {
    const {polls} = useSelector(selectedUser)
    return (
        <div className="px-2 py-1 sm:px-0 max-w-2xl mx-auto">
            {polls !== undefined ? <TabGroup /> : <h1>Loading</h1>}
        </div>
    )
}

export default Home
