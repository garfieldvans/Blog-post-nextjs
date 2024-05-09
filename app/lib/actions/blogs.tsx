// "use server" 

export async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    

    const postsWithUserNames = await Promise.all(data.map(async (post: any) => {
      const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
      const userData = await userResponse.json();

       const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
       const commentsData = await commentsResponse.json();
       
       return {
         id: post.id,
         title: post.title,
         body: post.body,
         userId: post.userId,
         userName: userData.name,
         authorEmail:userData.email,
         comments: commentsData.map((comment:any) => ({
           id: comment.id,
           name: comment.name,
           email: comment.email,
           body: comment.body
          }
        )
      )
         
        
      };
    }));

    // console.log(postsWithUserNames);
    

    return postsWithUserNames;
    // return data
  } catch (e: any) {
    return {
      message: e.message,
    };
  }
}


export async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const dataUser = await response.json();    
  
    return dataUser
  } catch (e: any) {
    return {
      message: e.message,
    };
  }
}
