import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router-dom"

function ProtectedRoute({children, ...rest}) {
    const {currentUser} = useSelector(state => state)
    return (
        <Route
            {...rest}
            render={({ location }) => 
                currentUser ? (
                    children
                ) : (
                    <Redirect 
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}

                    />
                )
        }
        />
    )
}

export default ProtectedRoute
