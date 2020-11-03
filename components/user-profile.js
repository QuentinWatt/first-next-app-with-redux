export default function userProfile(props){
  if(props.user){
    return (
      <div>
        <h1 className="font-bold text-3xl mb-2">
          { props.user.name ?
            <span>
              {props.user.name.title} {props.user.name.first} {props.user.name.last}
            </span>
            : 
            null
          }
        </h1>
        <div>
        { props.user.picture ? 
          <img src={props.user.picture.large} className="rounded mr-3 mb-3" />
          : 
          null
        }
        </div>

        <div>
          <span className="font-bold">Name: </span>
          { props.user.name ?
            <span>
              {props.user.name.title} {props.user.name.first} {props.user.name.last}
            </span>
            : 
            null
          }
        </div>

        <div>
          <span className="font-bold">Email: </span>
          { props.user.email ?
            <span>
              {props.user.email}
            </span>
            : 
            null
          }
        </div>

        <div>
          <span className="font-bold">City: </span>
          { props.user.location ?
            <span>
              {props.user.location.city}
            </span>
            : 
            null
          }
        </div>

        <div>
          <span className="font-bold">Country: </span>
          { props.user.location ?
            <span>
              {props.user.location.country}
            </span>
            : 
            null
          }
        </div>
      </div>
    )
  }
} 