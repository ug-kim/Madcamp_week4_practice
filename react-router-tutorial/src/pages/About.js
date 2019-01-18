import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);

    const detail = query.detail === 'true';

    return (
        <div>
            <h2>About {match.params.name}</h2>
            {detail && 'detail: blahblah'}   {/* ?detail=true 일때만 뒤의 문자열 나타남 */}
        </div>
    );
};

export default About;
