import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
        <title>Location</title>
        <path
            fill={props.fill}
            d="M7.5,1.50990331e-13 C11.6421356,1.50990331e-13 15,3.34867712 15,7.4794797 C15,10.1694517 12.8423186,13.7381353 8.21213,17.740784 L8.21213,17.740784 L8.19338179,17.7562854 C7.79313579,18.0872166 7.21240838,18.0806632 6.81973235,17.740784 C2.313838,13.8103704 0,10.1326028 0,7.4794797 C0,3.34867712 3.35786438,1.50990331e-13 7.5,1.50990331e-13 Z M7.5,1.49589594 C4.1862915,1.49589594 1.5,4.17483764 1.5,7.4794797 C1.5,9.51175766 3.48451852,12.7752496 7.44707359,16.2976351 L7.44707359,16.2976351 L7.5,16.3446013 L7.55292641,16.2976351 C11.5154815,12.7752496 13.5,9.51175767 13.5,7.4794797 C13.5,4.17483764 10.8137085,1.49589594 7.5,1.49589594 Z M7.5,5 C8.88071187,5 10,6.11928813 10,7.5 C10,8.88071187 8.88071187,10 7.5,10 C6.11928813,10 5,8.88071187 5,7.5 C5,6.11928813 6.11928813,5 7.5,5 Z M7.5,6.42857143 C6.90826634,6.42857143 6.42857143,6.90826634 6.42857143,7.5 C6.42857143,8.09173366 6.90826634,8.57142857 7.5,8.57142857 C8.09173366,8.57142857 8.57142857,8.09173366 8.57142857,7.5 C8.57142857,6.90826634 8.09173366,6.42857143 7.5,6.42857143 Z"></path>
    </svg>
);

export default SVG;