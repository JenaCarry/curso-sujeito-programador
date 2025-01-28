// {/* <h2>Posts</h2>
//             <form onSubmit={editPostId ? handleUpdatePost : handleAdd}>
//                 <div>
//                     <label htmlFor="name">Nome</label>
//                     <input
//                         type="text"
//                         name="name"
//                         id="name"
//                         placeholder="Digite seu nome..."
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="post">Post</label>
//                     <input
//                         type="text"
//                         name="post"
//                         id="post"
//                         placeholder="Digite algo..."
//                         value={post}
//                         onChange={(e) => setPost(e.target.value)}
//                     />
//                 </div>
//                 <button type="submit">
//                     {loading
//                         ? "Enviando..."
//                         : editPostId
//                         ? "Atualizar"
//                         : "Publicar"}
//                 </button>
//             </form>

//             <div className="allDocs-container">
//                 <button onClick={handleGetPosts} className="search-post">
//                     Buscar Posts
//                 </button>
//                 <ul>
//                     {posts.map((post) => (
//                         <li key={post.id}>
//                             <p>
//                                 <strong>Nome:</strong> {post.name}
//                             </p>
//                             <p>
//                                 <strong>Post:</strong> {post.post}
//                             </p>
//                             <div className="button-list">
//                                 <button
//                                     onClick={() =>
//                                         handleEditPosts(
//                                             post.id,
//                                             post.name,
//                                             post.post
//                                         )
//                                     }
//                                 >
//                                     Editar post
//                                 </button>
//                                 <button onClick={() => handleDelete(post.id)}>
//                                     Excluir
//                                 </button>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div> */}
