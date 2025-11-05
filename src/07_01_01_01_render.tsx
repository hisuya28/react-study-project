import Login from './components/Login';
import Logout from './components/Logout';
import LoginMessage from './components/LoginMessage';
import LogoutMessage from './components/LogoutMessage';


export default function App(){
    const isLogin = false;
    if(isLogin){
        return (
            <>
                <Login />
                <LoginMessage />
            </>
        );
    }

    return(
        <>
            <Logout />
            <LogoutMessage />
        </>
    );
}
