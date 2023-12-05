### README

This project was done on free time to showcase React, Nextjs and Tailwind skills.

## The use of Project

The idea of this Frontend application was to be user's terminal for operating prediction AI-model which could predict the end result of a League of Legends match based on the champions selected.

User can select the champions for both teams as they see fit and, after making an api call to the AI-model, view the results.

Please note: Because of the requirements of actually deploying and operating AI-model far surpassing the resources this project had, this project uses a demo endpoint to showcase how it would work.a

But please note also: This project was tested using working model locally and verified that this application could work in production as described

## Key components

# Team champions & Team player

These two components handle showing the team's status and handle the user input on the player positions. Their most important functionality is to take in the chosen champion names in their respective order and show the to the user using League of Legend's API endpoint

# Champion grid

Together with League of Legend's API endpoint, this component shows all selectable characters in this game. When clicked the portrait, it calls the given function to make the champion selected

# Index.tsx (The page itself)

It's main responsibility was to track the state of the champion selection and hold the actual data for both of the teams. Most of the logic is done when user is trying to select the champion as we deduce which team and which position the selected champion should go.

This page could have been made into a separate component but since the page only has this feature, it didn't seem necessary.

# Predict container & Bar

It's simple function is to call the prediction endpoint and take the result which it shows graphically to the user using the Prediction Bar. In the real production, this component would also take the chosen champions as a props and pass in onwards into the API endpoint
