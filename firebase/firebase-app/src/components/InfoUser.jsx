import { auth } from "../firebaseConnection";

export function InfoUser({
    userDetails,
    setUserDetails,
    setLoggedIn,
    signOut,
    setPosts,
}) {
    const logout = async () => {
        await signOut(auth);
        setUserDetails({});
        setLoggedIn(false);
        setPosts([]);
    };

    return (
        <div className="user-status">
            <h2>Seja bem-vindo!</h2>
            <div>
                <strong>Status: </strong> Logado
            </div>
            <div>
                <strong>Email: </strong> {userDetails.email}
            </div>
            <div>
                <button onClick={logout}>Sair da conta</button>
            </div>
        </div>
    );
}
