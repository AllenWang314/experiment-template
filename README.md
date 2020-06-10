# experiment-template

This project implements a Django-React app that runs neuroscience experiments involving pattern recognition. In each trial, there are three different kind of tasks all of which involve predicting the final letter in a sequence of A, B, and Cs. However, since the trials are generated randomly and the tasks are generated independently, repeating the trial results in different sequences of letters.

This project was inspired by some work at MIT's Sinha Lab for neuroscience. One of the lab members was implementing experoet

## Structure

The structure of the app consists of a React frontend and a Django backend. The front-end is quite basic and makes only a few modifications after creat-react-app to get the backbone functioning. The backend generates the trials and sends them to the frontend via a REST API. Information on trials is sent back and recored in a PostgreSQL database.

- trials are generated independently by the file ```gen_trials.py```, which is convenient since lab memebers familiar with python can freely generate trials by editing one file without messinng up the frontend or backend
- ```models.py``` contains the schema for the database
- ```views.py``` contains the API endpoints
- ```urls.py``` helps route the API endpoitns to urls that can be used
- ```settings.py``` helps configure the database settings

## Deploying and Testing

The deploy branch of the repo contains the exact project and database I deployed to Heroku to test. The database credentials have already expired so don't too excited;) I used gunicorn and whitenoise. The process involved moving mostly everything into the root directory and making some edits to ```settings.py```.

