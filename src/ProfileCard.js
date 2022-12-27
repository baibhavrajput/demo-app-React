function ProfileCard(props) {
  const title = props.title;
  const handle = props.handle;
  const image = props.image;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="PDA logo"></img>
        </figure>
      </div>

      <div className="card-conten">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
