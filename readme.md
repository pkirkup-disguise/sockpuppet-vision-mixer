# Sockpuppet Prototype

This is a prototype application that allows you to control video playback and transitions using OSC (Open Sound Control) messages. The application consists of a server-side component written in Node.js and a client-side component using HTML, CSS, and JavaScript.

![image](https://github.com/pkirkup-disguise/sockpuppet-vision-mixer/assets/71440017/31c3944b-fc05-43d2-bd24-dcb9cfd4e692)


## Getting Started

To set up and run the Sockpuppet Prototype, follow these steps:

### Prerequisites

- Node.js (v12 or above) and npm (Node Package Manager) must be installed on your system. You can download and install them from the official Node.js website: [https://nodejs.org](https://nodejs.org)

### Installation

1. Clone the repository to your local machine:
`git clone https://github.com/pkirkup-disguise/sockpuppet-vision-mixer.git`


2. Navigate to the project directory:
`cd sockpuppet-vision-mixer`

3. Install the dependencies using npm:

`npm install`


### Running the Application

1. Start the server:

`node server.js`

This will start the Node.js server that listens for OSC messages and serves the client-side files.

2. Open a web browser and visit [http://localhost:3000](http://localhost:3000) to access the application.


### Usage 

1. The project expects 3 Video layers patched to Sockpuppet, per the configuration below:
2. 
![image](https://github.com/pkirkup-disguise/sockpuppet-vision-mixer/assets/71440017/6872158f-a13f-4beb-b1bd-6cbaf9243bf7)

2. The Notch block transition receives two arrow inputs for clip A and clip B, and a float value manages the transition from one clip to another. The notch block is configured to pass alpha so the background is revealed during the transition.

![image](https://github.com/pkirkup-disguise/sockpuppet-vision-mixer/assets/71440017/6de423ce-f1f0-44d8-b51d-cbab08661d19)


## Dependencies

The Sockpuppet Prototype relies on the following dependencies:

- Express: Fast, unopinionated, minimalist web framework for Node.js.
- [npm package](https://www.npmjs.com/package/express)
- Body-parser: Node.js body parsing middleware.
- [npm package](https://www.npmjs.com/package/body-parser)
- osc: Open Sound Control library for Node.js.
- [npm package](https://www.npmjs.com/package/osc)

These dependencies are automatically installed when you run `npm install` as described in the installation steps above.

## License

This project is licensed under the [MIT License](LICENSE).
