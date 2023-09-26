const UserAvatar = (props) => {
    return <img src={props.avatar ? `${props.avatar}` : `https://ui-avatars.com/api/?name=${props.phoneNumber || props.email}`} className={props.className} alt={props.alt}></img>
}



export default UserAvatar;