import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

const selectedUsers = (state) => Object.values(state?.users)

export default function CheckList() {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  
  let { from } = location.state || { from: { pathname: "/" } };
  
  const users = useSelector(selectedUsers)
  const [selected, setSelected] = useState(users[0])

  const handleLogin = (e) => {
      e.preventDefault()
      dispatch({type: "currentUser/setCurrentUser", payload: {
        selected,
        cb: () => history.replace(from)
      }})
    }
  return (
    <Fragment>
      <div className="w-72 top-16">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1 p-2">
            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {users.map((user, userIdx) => (
                  <Listbox.Option
                    key={userIdx}
                    className={({ active }) =>
                      `${active ? 'text-amber-900 bg-amber-100 bg-blue-300' : 'text-gray-900'}
                            cursor-default select-none relative py-2 pl-10 pr-4`
                    }
                    value={user}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`${
                            selected ? 'font-medium' : 'font-normal'
                          } block truncate`}
                        >
                          {user.name}
                        </span>
                        {selected ? (
                          <span
                            className={`${
                              active ? 'text-amber-600' : 'text-amber-600'
                            }
                                  absolute inset-y-0 left-0 flex items-center pl-3`}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
        <button className="bg-blue-300 rounded-full w-full shadow-lg py-2" onClick={handleLogin}>Login</button>
      </div>
    </Fragment>
  )
}