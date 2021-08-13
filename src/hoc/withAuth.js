import { useAuth } from "../customHooks";

console.log("from withAuth")
const WithAuth = (props) => useAuth(props) && props.children;

export default WithAuth;