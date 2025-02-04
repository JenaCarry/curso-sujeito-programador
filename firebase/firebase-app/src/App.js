import {
    useEffect,
    // useEffect,
    useState,
} from "react";
import "./app.css";
import { auth, db } from "./firebaseConnection";
import { ToastContainer, toast } from "react-toastify";
import {
    addDoc,
    collection,
    getDocs,
    updateDoc,
    doc,
    deleteDoc,
    // onSnapshot,
} from "firebase/firestore";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { Signup } from "./components/Signup ";
import { Signin } from "./components/Signin";
import { InfoUser } from "./components/InfoUser";

function App() {
    const [name, setName] = useState("");
    const [post, setPost] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editPostId, setEditPostId] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [userDetails, setUserDetails] = useState({});
    const [initial, setInitial] = useState(true);

    // useEffect(() => {
    //     const loadingUsers = async () => {
    //         const usersList = await onSnapshot(
    //             collection(db, "users"),
    //             (snapshot) => {
    //                 const usersData = snapshot.docs.map((user) => ({
    //                     id: user.id,
    //                     ...user.data(),
    //                 }));
    //                 setUsers(usersData);
    //             }
    //         );
    //         return () => usersList();
    //     };

    //     loadingUsers();
    // }, []);

    const handleAdd = async (e) => {
        e.preventDefault();
        if (name && post) {
            setLoading(true);
            await addDoc(collection(db, userDetails.uid), {
                name: name,
                post: post,
            })
                .then(() => {
                    toast.success("Post adicionado com sucesso!");
                    setName("");
                    setPost("");
                    if (posts.length !== 0) handleGetPosts();
                })
                .catch((error) => {
                    toast.error("Erro ao adicionar post: ");
                    console.log(error);
                })
                .finally(() => setLoading(false));
        } else {
            toast.warn("Por favor, preencha todos os campos.");
        }
    };

    const handleGetPosts = async () => {
        try {
            const querySnapshot = await getDocs(
                collection(db, userDetails.uid)
            );
            const postsList = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPosts(postsList);
        } catch (error) {
            toast.error("Erro ao obter os dados do FireStore: ");
            console.log(error);
        }
    };

    const handleEditPosts = (id, currentName, currentPost) => {
        setEditPostId(id);
        setName(currentName);
        setPost(currentPost);
    };

    const handleUpdatePost = async (e) => {
        e.preventDefault();
        if (name && post) {
            setLoading(true);
            try {
                await updateDoc(doc(db, userDetails.uid, editPostId), {
                    name: name,
                    post: post,
                });
                toast.success("Post atualizado com sucesso!");
                setName("");
                setPost("");
                setEditPostId(null);
                handleGetPosts();
            } catch (error) {
                toast.error("Erro ao atualizar o post: ");
                console.log(error);
            } finally {
                setLoading(false);
            }
        } else {
            toast.warn("Por favor, preencha todos os campos.");
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, userDetails.uid, id));
            toast.success("Post deletado com sucesso!");
            handleGetPosts();
        } catch (error) {
            toast.error("Erro ao deletar post.");
            console.log(error);
        }
    };

    const handleCreateUser = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password)
            .then((value) => {
                setEmail("");
                setPassword("");
                toast.success("Usuário cadastrado com sucesso!");
            })
            .catch((error) => {
                if (error.code === "auth/weak-password") {
                    toast.warn("Senha muito fraca.");
                } else if (error.code === "auth/email-already-in-use") {
                    toast.warn("Email já existe.");
                } else {
                    toast.error("Falha ao cadastrar usuário!");
                }
                console.log(error);
            });
    };

    const handleSignInUser = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password)
            .then((value) => {
                toast.success("Logado com sucesso!");
                setEmail("");
                setPassword("");
                setLoggedIn(true);
                setUserDetails({
                    uid: value.user.uid,
                    email: value.user.email,
                });
            })
            .catch((error) => {
                toast.warn("Email ou senha inválida");
                console.log(error);
            });
    };

    useEffect(() => {
        async function checkLogin() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUserDetails({ uid: user.uid, email: user.email });
                    setLoggedIn(true);
                } else {
                    setUserDetails({});
                    setLoggedIn(false);
                }
            });
        }

        checkLogin();
    }, []);

    return (
        <div className="container">
            <ToastContainer autoClose={1000} closeOnClick />
            {loggedIn ? (
                <>
                    <InfoUser
                        setUserDetails={setUserDetails}
                        setLoggedIn={setLoggedIn}
                        userDetails={userDetails}
                        signOut={signOut}
                        setPosts={setPosts}
                    />
                    <h2>Posts</h2>
                    <form onSubmit={editPostId ? handleUpdatePost : handleAdd}>
                        <div>
                            <label htmlFor="name">Nome</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Digite seu nome..."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="post">Post</label>
                            <input
                                type="text"
                                name="post"
                                id="post"
                                placeholder="Digite algo..."
                                value={post}
                                onChange={(e) => setPost(e.target.value)}
                            />
                        </div>
                        <button type="submit">
                            {loading
                                ? "Enviando..."
                                : editPostId
                                ? "Atualizar"
                                : "Publicar"}
                        </button>
                    </form>

                    <div className="allDocs-container">
                        <button
                            onClick={handleGetPosts}
                            className="search-post"
                        >
                            Buscar Posts
                        </button>
                        <ul>
                            {posts.map((post) => (
                                <li key={post.id}>
                                    <p>
                                        <strong>Nome:</strong> {post.name}
                                    </p>
                                    <p>
                                        <strong>Post:</strong> {post.post}
                                    </p>
                                    <div className="button-list">
                                        <button
                                            onClick={() =>
                                                handleEditPosts(
                                                    post.id,
                                                    post.name,
                                                    post.post
                                                )
                                            }
                                        >
                                            Editar post
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleDelete(post.id)
                                            }
                                        >
                                            Excluir
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : initial ? (
                <Signin
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleSignInUser={(e) => handleSignInUser(e)}
                    setInitial={setInitial}
                />
            ) : (
                <Signup
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleCreateUser={(e) => handleCreateUser(e)}
                    setInitial={setInitial}
                />
            )}
        </div>
    );
}

export default App;
