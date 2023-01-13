// register
import registerComponent from "core/registerComponent";
import Layout from "components/Layout/layout";
import Button from "components/Button/Button";
import ChatList from "components/ChatList/ChatList";
import ChatView from "components/ChatView/ChatView";
import ChatPreview from "components/ChatPreview/ChatPreview";
import Chat from "components/Chat/Chat";
import Input from "components/Input/Input";
import Message from "components/Message/Message";
import MessagePreview from "components/MessagePreview/MessagePreview";
import Sidebar from "components/Sidebar/Sidebar";
import ChooseChat from "pages/ChooseChat/ChooseChat";
import ChatPage from "pages/ChatPage/ChatPage";
import Link from "components/Link/Link";
import Form from "components/Form/Form";
import Field from "components/Field/Field";
import InputError from "components/InputError/InputError";
import Page404 from "../pages/ErrorPages/404/Page404";

registerComponent(Layout);
registerComponent(Button);
registerComponent(Link);
registerComponent(ChatList);
registerComponent(ChatView);
registerComponent(Chat);
registerComponent(ChatPreview);
registerComponent(Input);
registerComponent(MessagePreview);
registerComponent(Message);
registerComponent(Sidebar);
registerComponent(ChooseChat);
registerComponent(ChatPage);
registerComponent(Form);
registerComponent(Field);
registerComponent(Link);
registerComponent(InputError);
registerComponent(Page404);
