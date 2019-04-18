# webapp: EboardEvals
First fullstack Webapp written for CSH@RIT. Front-end is written in React and the back-end is in express js. The back-end connects with a mongodb databse through the mongoose library and creates a post request that creates a mongoose model with the data and saves it to the database. The front-end is a simple NavBar reactstrap component containing links to or personal profiles page as well as a work in prgoress admin page. The data being sent to the back-end is a From component comprised of FormGroups that holds all the data for the model. 

# What I Learned:
Seeing that this is my first fullstack webapp I learned a ton and am continuing to learn a ton as i add new features and hit new roadblocks. I had no idea what express or react were and now have a decent understaning of creating request to and from the back-end. It is rather simple but features some inuituve features such as handling the state change as the drop down option is selected and characters are entered into the text boxes.

# Why I Made This:
I've always wanted to contribute to Computer Science House here at Rochester Institute of Technology and desperately wanted to learn something I had zero experience with.

# Hardest Part:
The hardest part is what im currently struggling with, I need to interface with LDAP since CSH has its own SSO but react does not have great native support for LDAP so I'm probably going to have to write my own library to function with it. The other hard part was simply learning how the client connects to the server and handling routes.

**Will work on commands to run in order to run locally**
