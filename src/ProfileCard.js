function ProfileCard(props) {
  const title = props.title;
  const handle = props.handle;
  const image = props.image;

  return (
    <div>
      <img src={image} alt="PDA logo"></img>
      <div>Title is {title}</div>
      <div>Handle id {handle}</div>
    </div>
  );
}

export default ProfileCard;
