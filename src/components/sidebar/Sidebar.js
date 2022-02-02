import '../../styles/Sidebar.css'
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useDataLayerValue} from "../../../store/DataLayer";

export default function Sidebar(){
    const [{ playlists }, dispatch] = useDataLayerValue()
    return (
        <div className='sidebar'>
            <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' className='sidebar__logo' alt='' />
            <SidebarOption Icon={HomeIcon} title='Home' />
            <SidebarOption Icon={SearchIcon} title='Search'/>
            <SidebarOption Icon={LibraryMusicIcon} title='Your Library'/>
            <br/>
            <strong className='sidebar__title'>PLAYLISTS</strong>
            <hr />
            {playlists ?.items?.map(
                (playlist) => {
                    return (
                        <SidebarOption title={playlist.name} />
                    )
                }
            )}
        </div>
    )
}