import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import {Avatar} from "@material-ui/core";
export default function Header(){
    return(
        <div className='header'>
            <div className="header__left">
                <SearchIcon/>
                <input placeholder='Search for artist, song, ...' type='text' className='search__input'/>
            </div>
            <div className="header__right">
                <Avatar src='' alt=''/>
                <h4>Domirando</h4>
            </div>
        </div>
    )
}