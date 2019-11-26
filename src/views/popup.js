/* popup.js
 *
 * This file initializes its scripts after the popup has loaded.
 *
 * It shows how to access global variables from background.js.
 * Note that getViews could be used instead to access other scripts.
 *
 * A port to the active tab is open to send messages to its in-content.js script.
 *
 */
     function count() {
       let total = [
         "As I see it, yes.",
         "Ask again later.",
         "Concentrate and ask again.",
         "Don't count on it.",
         "It is certain.",
         "It is decidedly so.",
         "Most likely.",
         "My reply is no.",
         "My sources say no.",
         "Outlook not so good.",
         "Outlook good.",
         "Reply hazy, try again.",
         "Signs point to yes.",
         "Very doubtful.",
         "Without a doubt.",
         "Yes.",
         "Yes – definitely.",
         "You may rely on it."
       ];
       let index = Math.floor(Math.random() * 16);
       let answer = total[index];
       document.getElementById('demo').textContent = answer;
     }
     document.getElementById('ball').onclick = count;

// Start the popup script, this could be anything from a simple script to a webapp
// const initPopupScript = () => {
//     // Access the background window object
//     const backgroundWindow = chrome.extension.getBackgroundPage();
//     // Do anything with the exposed variables from background.js
//     console.log(backgroundWindow.sampleBackgroundGlobal);
//
//     // This port enables a long-lived connection to in-content.js
//     let port = null;
//
//     // Send messages to the open port
//     const sendPortMessage = message => port.postMessage(message);
//
//     // Find the current active tab
//     const getTab = () =>
//         new Promise(resolve => {
//             chrome.tabs.query(
//                 {
//                     active: true,
//                     currentWindow: true
//                 },
//                 tabs => resolve(tabs[0])
//             );
//         });
//
//     // Handle port messages
//     const messageHandler = message => {
//         console.log('popup.js - received message:', message);
//     };
//
//     // Find the current active tab, then open a port to it
//     getTab().then(tab => {
//         // Connects to tab port to enable communication with inContent.js
//         port = chrome.tabs.connect(tab.id, { name: 'chrome-extension-template' });
//         // Set up the message listener
//         port.onMessage.addListener(messageHandler);
//         // Send a test message to in-content.js
//         sendPortMessage('Message from popup!');
//     });
// };
//
// // Fire scripts after page has loaded
// document.addEventListener('DOMContentLoaded', initPopupScript);
