import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import {
  InputCommnet,
  LatestComment,
  UserComment,
} from '../../styles/Homepage/Timeline/timeline.styled';

const ContentComment = () => {
  const [inputComment, setInputComment] = useState('');

  return (
    <UserComment>
      <LatestComment>
        <Link href={``} as={`/c/`} scroll={false}>
          <p>View all 0 comments</p>
        </Link>
      </LatestComment>

      <hr />

      <InputCommnet>
        <textarea
          placeholder="Add a comment..."
          onChange={(e) => {
            setInputComment(e.target.value);
          }}
        ></textarea>
        <button>Post</button>
      </InputCommnet>
    </UserComment>
  );
};

export default ContentComment;
