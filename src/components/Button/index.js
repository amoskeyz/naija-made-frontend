import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

class index extends Component {
  render() {
    return (
      <div>
        <Link to = {`/${this.props.link}`} >
          <button className ='btnn'>{this.props.type}</button>
        </Link>
      </div>
    )
  }
}

export default index


// import React, { Fragment } from "react";
// import { MDBBtn } from "mdbreact";

// const index = () => {
//   return (
//     <Fragment>
//       <MDBBtn gradient="peach">{this.Props.type}</MDBBtn>
//       {/* <MDBBtn gradient="purple">Purple</MDBBtn> */}
//       {/* <MDBBtn gradient="blue">Blue</MDBBtn> */}
//       {/* <MDBBtn gradient="aqua">Aqua</MDBBtn> */}
//     </Fragment>
//   );
// }

// export default index;
