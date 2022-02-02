import '../../styles/Header.css'
import SearchIcon from "@material-ui/icons/Search";
import {Avatar} from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {useDataLayerValue} from "../../store/DataLayer";
export default function Header(){
    const [{user}, dispatch] = useDataLayerValue()
    return(
        <div className='header'>
            <div className="header__left">
                <ChevronLeftIcon fontSize='large'  className='nav_active_nav_icon nav_icon'/>
                <ChevronRightIcon fontSize='large'  className='nav_icon'/>
                <div className="header_search">
                    <SearchIcon/>
                    <input placeholder='Search for artist, song, ...' type='text' className='search__input'/>
                </div>
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt={user.display_name}/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}