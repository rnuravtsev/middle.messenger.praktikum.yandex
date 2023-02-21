import registerComponent from 'core/registerComponent'
import Layout from 'components/Layout/Layout'
import Button from 'components/Button/Button'
import ChatList from 'components/ChatList/ChatList'
import ChatView from 'components/ChatView/ChatView'
import ChatPreview from 'components/ChatPreview/ChatPreview'
import Chat from 'components/Chat/Chat'
import Input from 'components/Input/Input'
import Message from 'components/Message/Message'
import MessagePreview from 'components/MessagePreview/MessagePreview'
import Sidebar from 'components/Sidebar/Sidebar'
import EmptyChat from 'components/EmptyChat/EmptyChat'
import MainChat from 'pages/MainChat/MainChat'
import Link from 'components/Link/Link'
import Form from 'components/Form/Form'
import Field from 'components/Field/Field'
import InputError from 'components/InputError/InputError'
import Table from 'components/Table/Table'
import Img from 'components/Img/Img'
import Subtitle from 'components/Subtitle/Subtitle'
import PageTitle from 'components/PageTitle/PageTitle'
import Avatar from 'components/Avatar/Avatar'
import SidebarReturn from 'components/SidebarReturn/SidebarReturn'
import { Logout } from 'components/Logout/Logout'
import AddChat from '../components/Modal/AddChat/AddChat'
import DropdownAddUser from '../components/Modal/DropdownAddUser/DropdownAddUser'
import Extra from '../components/Extra/Extra'
import Loader from '../components/Loader/Loader'
import AddUser from '../components/Modal/AddUser/AddUser'
import DeleteUser from '../components/Modal/DeleteUser/DeleteUser'
import Alert from '../components/Alert/Alert'

registerComponent(Layout)
registerComponent(Button)
registerComponent(ChatList)
registerComponent(ChatView)
registerComponent(Chat)
registerComponent(ChatPreview)
registerComponent(Input)
registerComponent(MessagePreview)
registerComponent(Message)
registerComponent(Sidebar)
registerComponent(EmptyChat)
registerComponent(MainChat)
registerComponent(Form)
registerComponent(Field)
// TODO: Доработать типизацию
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
registerComponent(Link)
registerComponent(InputError)
registerComponent(Table)
registerComponent(Img)
registerComponent(Subtitle)
registerComponent(PageTitle)
registerComponent(Avatar)
// TODO: Доработать типизацию
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
registerComponent(SidebarReturn)
registerComponent(Logout)
registerComponent(AddChat)
registerComponent(DropdownAddUser)
registerComponent(Extra)
registerComponent(Loader)
registerComponent(AddUser)
registerComponent(DeleteUser)
registerComponent(Alert)
