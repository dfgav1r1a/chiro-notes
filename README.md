# Chiropractic Medical Notes

[See the application](https://dfgav1r1a.github.io/chiro-notes/)

This project was created as a response to the need of a friendlier interface to create chiropractic medical notes after the patient's first evaluation. The solutions that were used before by the head doctor were -as described- hard to use, not intuitive and very abstract making it hard to keep track of the data that was already inputted into the tool.

Seeing that there was a necessity for an easier way to create the medical notes, I took on the task of creating a custom front-end application that would cater to the doctor's needs. In the process, I partnered with the doctor to design the tool and together decided on the features that would mostly gather the data orderly while having a more pleasant experience and spending considerably less time in the data entering process.

## Tools 

This tool was created using *HTML*, *CSS* and *JavaScript*. The *Canvas2D API* was used to create the drawing tool. To create the printed version, CSS `print` media query was used.

The framework **ElectronJS** was used to turn this project into a custom Windows desktop application.

## Purpose and outcome

The **purpose** of this tool is to orderly gather medical data after the patient's first evaluation, in a more convenient way. After the data was entered, the tool will create a PDF file (using the browser's print window). This PDF will then be saved in a secured server in the patient's record.

The **outcome** of the tool was saving the doctor 15 minutes of administration time per evaluated patient aside from making the creation of medical notes easier, pleasant and straight forward.

### Additional Notes

- This application is not mobile friendly as it was meant to be used in a laptop or in a desktop computer.

- This application is an interface to gather medical data, none of this data is being saved in a server which could present an opportunity to extend the functionality of this solution by implementing a backend to save the data securely and make it accessible locally at the doctor's request.