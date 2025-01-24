FROM node:18

WORKDIR /usr/src/app

COPY challenge_B.js random_objects.txt ./

VOLUME /data

# Define the environment variable for input and output files
ENV INPUT_FILE=random_objects.txt
ENV OUTPUT_FILE=/data/processed_output.txt

# Define the default command to run the Challenge B program
CMD ["node", "challenge_B.js"]