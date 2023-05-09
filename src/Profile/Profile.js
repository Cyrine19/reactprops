import React, {Component} from "react";


export class Profile extends Component {
    render(){
        return(
            <div className="profile">
                <h1 className="profile__name" >  {this.props.FullName}</h1>
                <h2 className="profile__bio"> {this.props.Bio} </h2>
                <h2 className="profile__profession">{this.props.Profession}</h2>
            </div>
        );
    }
}
export default Profile