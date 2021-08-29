import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Tab } from '@headlessui/react'
import Poll from './Poll';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
function filterPolls(polls, currentUser) {
    if (polls.length === 0) return ;
    const unAnswered = polls.filter((poll) =>
        !(poll.optionOne.votes.includes(currentUser.id) || poll.optionTwo.votes.includes(currentUser.id)))
    const answered = polls.filter((poll) => poll.optionOne.votes.includes(currentUser.id) || poll.optionTwo.votes.includes(currentUser.id))
    const categories =  {
        "Unanswered": unAnswered,
        "Answered": answered
    }
    return categories;
}
const selectedState = state => state
function TabGroup() {
    const {currentUser, polls} = useSelector(selectedState);
    const [categories, setCategories] = useState({})
    useEffect(() => {
        const pollsList = Object.values(polls);
        const categories =  filterPolls(pollsList, currentUser);
        setCategories(categories)
    }, [polls, currentUser])



    return (
        <div className="">
           {categories && 
                <Tab.Group>
                    <Tab.List className="font-bold flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
                    { Object.keys(categories).map((category) => (
                        <Tab
                        key={category}
                        className={({ selected }) =>
                            classNames(
                            'w-full mx-2 py-2.5 text-sm leading-5 font-medium text-white rounded-lg',
                            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-300 ring-white ring-opacity-60',
                            selected
                                ? 'bg-blue-300 shadow'
                                : 'text-blue-300 hover:bg-white hover:text-blue-300'
                            )
                        }
                        >
                        {category}
                        </Tab>
                    ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                    {Object.values(categories).map((categoriesList, idx) => (
                        <Tab.Panel
                        key={idx}
                        className={classNames(
                            'bg-white rounded-t-xl p-3',
                            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                        )}
                        >
                        <ul>
                            {categoriesList.map((poll, i) => {
                                return  <li
                                            key={poll.id}
                                            className="w-full relative p-3 rounded-md hover:bg-coolGray-100 border shadow-xl mb-2"
                                        >
                                            <Poll key={i} pollId={poll.id} pollPage={false}/>
                                        </li>
                                })
                            }
                        </ul>
                        </Tab.Panel>
                    ))}
                    </Tab.Panels>
                </Tab.Group>
            }
        </div>
    )
}

export default TabGroup