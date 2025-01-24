# kasagi-labo-assignment

There are three files: `challenge_A.js`, `challenge_B`, and `Dockerfile`.  
- `challenge_A.js` is for the first challenge.  
- `challenge_B` is for the second challenge.  
- `Dockerfile` is for the third challenge.  

When you run `node challenge_A.js`, it generates a file named `random_objects.txt`. Both `challenge_B` and `challenge_C` use this text file as input and produce their respective outputs.


1. run "node challenge_A.js" and generate random_objects.txt file 
2. run "docker build -t assignment . "
3. run "docker run -it assignment"
4. Find the output file in volume /data 
