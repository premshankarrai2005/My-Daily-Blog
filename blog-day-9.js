// 📝 Day 9: What is Callback Hell and How to Avoid It in JavaScript?

// What is a Callback?
       // A callback is a function passed as an argument to another function, which is then invoked after some kind of event or asynchronous operation completes.

// What is Callback Hell?
       // Callback hell (also known as the "Pyramid of Doom") occurs when you nest multiple callbacks within each other, making the code hard to read, understand, and maintain.


//    e.g:-
        loginUser("vivek", "1234", function (user) {
            getUserProfile(user.id, function (profile) {
                getUserPosts(profile.id, function (posts) {
                    getCommentsForPosts(posts, function (comments) {
                        console.log("Comments:", comments);
                    });
                });
            });
        });
        
// 🔍 Problems with Callback Hell:
    // 1. ❌ Hard to read due to excessive indentation

    // 2. ❌ Difficult to debug and test

    // 3. ❌ Challenging to handle errors

    // 4. ❌ Scalability issues for larger apps
    
// ✅ How to Avoid Callback Hell :

//    1.Use Promises
        //   e.g:-
                loginUser("vivek", "1234")
                 .then(user => getUserProfile(user.id))
                 .then(profile => getUserPosts(profile.id))
                 .then(posts => getCommentsForPosts(posts))
                 .then(comments => console.log("Comments:", comments))
                 .catch(error => console.error("Error:", error));

//    2. Use Async/Await
        //  e.g:-
                 async function showComments() {
                   try {
                     const user = await loginUser("vivek", "1234");
                     const profile = await getUserProfile(user.id);
                     const posts = await getUserPosts(profile.id);
                     const comments = await getCommentsForPosts(posts);
                     console.log("Comments:", comments);
                   } catch (error) {
                     console.error("Error:", error);
                   }
                 }

                 showComments();

