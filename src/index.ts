// import LoginPage from './components/Login/Login';
// import SignUp from './components/SignUp/SignUp';
// import ChatPage from './components/Chat/Chat';
// import Page404 from './components/Page404/Page404';
import Chat from "./components/Chat/Chat";
import { registerComponent } from "./utils/registerComponent";
import Button from "./components/Button/Button";
import './index.scss';

const root = document.querySelector('#root');

registerComponent('Button', Button);
const chatPage = new Chat({})

root.append(chatPage.getContent());

// const location = window.location.pathname.split('/')[1];
//
// if (root instanceof HTMLElement) {
//   switch (location) {
//     case '':
//     case 'login':
//       new LoginPage(root);
//       break;
//     case 'sign-up':
//       new SignUp(root);
//       break;
//     case 'chat':
//       new ChatPage(root);
//       break;
//     default:
//       new Page404(root);
//       break;
//   }
// }
