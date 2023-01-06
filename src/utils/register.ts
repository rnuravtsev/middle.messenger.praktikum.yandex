// register
import registerComponent from "core/registerComponent";
import Layout from "components/Layout/layout";
import Button from "components/Button/Button";
import ChatList from "components/ChatList/ChatList";
import ChatView from "components/ChatView/ChatView";
import ChatPreview from "components/ChatPreview/ChatPreview";
import Chat from "components/Chat/Chat";
import Login from "components/Login/Login";
import Input from "components/Input/Input";
import Message from "components/Message/Message";
import MessagePreview from "components/MessagePreview/MessagePreview";
import Sidebar from "components/Sidebar/Sidebar";
import ChooseChat from "pages/ChooseChat/ChooseChat";
import ChatPage from "pages/ChatPage/ChatPage";

registerComponent(Layout);
registerComponent(Button);
registerComponent(ChatList);
registerComponent(ChatView);
registerComponent(Chat);
registerComponent(ChatPreview);
registerComponent(Login);
registerComponent(Input);
registerComponent(MessagePreview);
registerComponent(Message);
registerComponent(Sidebar);
registerComponent(ChooseChat);
registerComponent(ChatPage);
